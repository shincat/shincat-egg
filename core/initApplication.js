const static =require('../core/defaultUse/static');
const bodyparser = require('../core/defaultUse/bodyparser');
module.exports=(app)=>{
  
    let {configurations} = app;
    //挂载bodyparser
    app.mountMiddleWareDefault(bodyparser(configurations['bodyparser']));
    //挂载koa-static;
    app.mountMiddleWareDefault(static(configurations['static']));
    
    
   
}