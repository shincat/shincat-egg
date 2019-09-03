const Router=require('koa-router');
const controller=require('./controller')
class GppRouter {
    constructor(app){
        this.app=app;
        this.router = new Router();
    }
    post(path,...params){
        this.router.post(path,this.insertContext,...params)
    }
    get(path,...params){
        params=this.filterParams(params)
        this.router.get(path,this.insertContext,...params)
    }
    async insertContext(ctx,next){
        controller.ctx=ctx;
        await next();
    }
    filterParams(params)
    {
       let {app}=this;
        for(var i=0;i<params.length;i++)
        {
            let fun= params[i];
            params[i]=async (ctx,next)=>{
                let target=controller.map.get(fun);
                if(target)
                {
                    await fun.call(target,ctx,app);
                }
                else{
                    await fun.call(null,ctx,app);
                }
                
                await next();
            }
        }
       
        return params;
    }
    set router(val){
        this._router=val;
    }
    get router(){
        return this._router
    }
}
module.exports=GppRouter;