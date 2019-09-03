const static = require('koa-static');
module.exports=(option)=>{
    
    option=option || {root:__dirname+"/public",opts:{}};
    return static(option.root,option.opts);
   
}