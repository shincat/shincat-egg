const server=require('http');
const APP=server.createServer();

const watch=(port)=>{

    return new Promise((ros,jet)=>{
        APP.listen(port);
        APP.on('listening',()=>{
            APP.close();
            ros(port);
        })
        APP.on('error',()=>{
            console.info('端口被占用，更新新的端口号');
            APP.close();
            ros(0);
        })

    });
   
}
const getAvriablePort=async (port)=>{

   let res=await watch(port);
   while(res==0)
   {
        port++;
        res=await watch(port);
   };
   return port;
}
module.exports=getAvriablePort;