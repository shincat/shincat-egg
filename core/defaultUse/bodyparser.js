const bodyparser= require('koa-bodyparser');
module.exports=(option)=>{
    option=option || {};
    return bodyparser(option)
}