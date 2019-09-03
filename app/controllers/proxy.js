const Controller = require('../../core/controller');
const fs = require('fs');
const path=require('path');
const request=require('request');
class proxy extends Controller {
    async init(){
        const {ctx}=this;
        const dev=ctx.params.dev;
        let sence=ctx.params.sence;
        sence=decodeURIComponent(sence)
        console.log(dev,sence);
        let apilist="";
        //生成短链link
        switch(dev)
        {
            case 'xgpre':
                apilist='http://mpbssxgpre.cnsuning.com/mpbss-web/comm/toShort.do'; 
            break;
            case 'pre':
                apilist ='http://mpbsspre.cnsuning.com/mpbss-web/comm/toShort.do'; 
                break;
            default:
                apilist ='http://mpbss.suning.com/mpbss-web/comm/toShort.do'; 
                break;
        }
        let result=request.post({url:apilist,form:{
                        longStr:sence
                }
        });
        result=Object.assign(result,{
            long:sence
        });
        ctx.body=result;
    }
}
module.exports=proxy