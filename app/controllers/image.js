const Controller = require('../../core/controller');
const request=require('request');
class image extends Controller{
    async init(){
        const {ctx}=this;
        let  {img}=ctx.params || null;
        if(!img) {
            ctx.body='no img';
            return;
        }
        try{
            img=decodeURIComponent(img);
            const result=await request.get(img);
            ctx.body=result;
        }
        catch(e)
        {
            ctx.body=e.toString();
        }
     
    }
}
module.exports=image;