const path=require('path');

module.exports=()=>{
    const config={

        //静态文件目录
        static :{
            root:path.join(__dirname,'../../public'),
            opts:{
                maxage:0,
                hidden:false,
            }
        },
        bodyparser:{

        },
        //跨域配置
        cors:{
            allowdomain:"*"
        },
        middlewares:['cors'],
        
        //本地server的相关信息
        webserver:{
            host:"127.0.0.1",
            port:3000
        }

    }
    return config
}