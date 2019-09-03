const cfLoader = require('./loader/applicationConfigLoader');
const GppRouter = require('../core/router');
const RouterInit = require('../app/router');
const controlLoader = require('./loader/controlLoader');
const initApplication =require('./initApplication');
const fileUtils=require('./utils/folderDisplayer');
const portWatcher=require('./utils/portWatcher')
const middlewareLoader=require('./loader/middleWareLoader')
const path=require('path');
class application {
    
    constructor(koa){
        //赋值koa
        this.koa=koa;
       
        this.configurations=cfLoader();
        //
        initApplication(this)
        this.router=new GppRouter(this);
        //初始化ccontrollers
        this.controller=controlLoader(this);
        this.middlewares=middlewareLoader(this);
       // console.log({middlewares:this.middlewares})
        //初始化中间件
        this.initMiddllewares();
        
        //初始化路由
        
        
        if(RouterInit)
        {
            RouterInit(this);
        }
        
        const {router} = this;
        koa.use(router.router.routes());
        //在配置文件中获取到端口
        
        const listenerport=this.configurations.webserver.port ||  this.configurations.node.listenerport ||  3000;
        const host=this.configurations.webserver.host || this.configurations.node.host || "localhost";
        portWatcher(listenerport).then((port)=>{
               //koa2 监听接口
            koa.listen(port,()=>{
                console.info('listening at');
                console.info(`http://${host}:${port}`);
            });
        })
       
     
        
    }
    set router(val){
        this._router=val;
    }
    get router(){
        return this._router;
    }
    set configurations(val){
        this._confs=val;
    }
    get configurations()
    {
        return this._confs;
    }
    set middllewares(val){
        this._middle=val;
    }
    get middllewares(){
        return this._middle;
    }
    set controller(val)
    {
        this._ctl=val;
    }
    get controller(){
        return this._ctl;
    }
    //初始化中间件
    initMiddllewares(){
        const {middlewares}=this;
        middlewares.forEach((mid)=>{
            try{
                const fun=require(mid['path']);
                //获取配置文件
                const config=this.configurations[mid['name']] || {}
                this.koa.use(fun.call(null,config));
            }
            catch(e)
            {
                console.log(e.toString());
                console.log('找不到中间件',mid['name']);
            }
        })
       
    }
    //挂载默认中间件
    mountMiddleWareDefault(middleware){
      
        this.koa.use(middleware);
    }
    //挂载额外的中间件
    mountMiddleWare(middleware)
    {
        this.middllewares.push(middleware);
        this.mountMiddleWareDefault(middleware);
    }



}
module.exports=application;

