const Controller = require('../../core/controller');
class index extends Controller{
    async init(){
     
        let {ctx,app} = this;
        
        ctx.body=ctx.request.query; 
      
    }
}
module.exports=index;