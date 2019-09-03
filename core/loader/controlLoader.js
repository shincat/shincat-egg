const fs=require('fs');
const path=require('path');
const controller = require('../controller')
module.exports = (app)=>{

    //获取应用程序根目录下packagejson文件
    const appDir=path.dirname(require.main.filename);
    
    const controllersDir=fs.readdirSync(path.join(appDir,'/\app/\controllers'),{encoding:"utf-8"});
    const res={};
    controllersDir.map((item)=>{
        //遍历controllers目录
        const filePath=path.join(appDir,'/app/controllers/',item);
        const fileName=item.split('.')[0]
        const CCS=require(filePath);
        res[fileName]=new CCS(app);
        //controller.nor(res[fileName]);
        return res;
    })
    return res;
  
}