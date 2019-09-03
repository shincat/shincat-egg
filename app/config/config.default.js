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
            allowdomain:['shin-prexg.cnsuning.com:9000','cnsuning.com','suning.com']
        },
        middlewares:['cors'],
        
        //本地server的相关信息
        webserver:{
            host:"shin-prexg.cnsuning.com",
            port:3000
        }

    }
    return config
}