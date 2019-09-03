/** 
 * 中间间加载
*/
const fs  = require('fs');
const path=require('path');
module.exports=(app)=>{

    //获得配置文件
    const {configurations} = app;
    let {middlewares} = configurations;
    /**如果配置项中的middleware不存在，则退出 */
    
    if(!middlewares)
    {
        return ;
    }
    const appDir=path.dirname(require.main.filename);
    const _path=path.join(appDir,'/\app/\middlewares/');
    if(!fs.existsSync(_path))
    {
        return [];
    }
    const res=[];
    middlewares.forEach(item=>{
        res.push({name:item,path:path.join(_path,item)})
    });
    return res;

}