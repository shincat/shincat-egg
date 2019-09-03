class Controller {
    static set map(val){
        Controller._map=val;
    }
    static get map(){
        return Controller._map;
    }
    //关联funtion 和 当前对象
    static nor(target){
        if(!Controller.map){
            Controller.map=new Map();
        }
        const {map}=Controller;
        const cons=Object.getOwnPropertyNames(Object.getPrototypeOf(target));
        cons.forEach((functionname)=>{
            if(functionname!=='constructor')
            {
                const fun=target[functionname];
                map.set(fun,target)
            }
        });
    }
    constructor(app){
        this.app=app;
        Controller.nor(this);
    }
    set ctx(val){}
    get ctx(){
        return Controller.ctx;
    }
   

}
module.exports=Controller;