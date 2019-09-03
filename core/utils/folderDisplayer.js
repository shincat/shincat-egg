const fs=require('fs');
const path=require('path');
module.exports={
    //获取文件tree
    //
    getFolder: function (_path) {
      
        //读取目录
        const folder=fs.readdirSync(_path);
        const DIR={};
        
        folder.forEach((item)=>{
            //判断是否是目录
            const isDir=fs.lstatSync(path.resolve(_path,item)).isDirectory();
            //如果是目录:
            if(isDir)
            {
                const callee=arguments.callee;
                DIR[item]=callee.call(null,path.resolve(_path,item));
            }
            else{
                DIR[item]=item;
            }
            
        });
        
        return DIR;
        //console.log(folder);
    
    },
    getFile:(_path)=>{
        const file=fs.readFileSync(_path,{encoding:'utf-8'});
        return file;
    },

    deleteFile:(_path)=>{

    },
    copyFile:(from,to)=>{

    },
    deleteFolder:(_path)=>{

    },
    copyFolder:(from,to)=>{

    }
}
   