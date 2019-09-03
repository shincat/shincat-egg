const fs=require('fs');
const path=require('path');
module.exports = ()=>{
    let configpath=process.cwd();
    //console.info(configpath);
    //获取应用程序根目录下packagejson文件
    let packagejson=fs.readFileSync(path.join(configpath,'/\package.json'),{encoding:"utf-8"});
    packagejson=JSON.parse(packagejson);
    //获取packagejson下node相关配置。
    //node中包含了监听端口
    let {node}=packagejson;
    let conf=require('../../app/config/config.default')();
    return {
        node,
        ...conf
    }
}