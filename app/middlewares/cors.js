
module.exports=(option)=>{
    let reg=/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/;
    return async (ctx,next)=>{
        //来自前端的访问
        if(ctx.request.header.origin)
        {
            if(!option)
            {
                ctx.status='501';
                ctx.body="请求跨域";
                return;
            }
            else{
                console.log(option);
                let {allowdomain}=option;
                //所有都通过
                if(allowdomain==="*") {
                    ctx.set('Access-Control-Allow-Origin', "*");
                    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
                    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
                    await next();
                }
                else{
                    //await next();
                    const domain=ctx.request.header.origin.split('//')[1];                    
                    let isallowed=false;
                    if(typeof allowdomain ==='string') allowdomain=[allowdomain];
                    
                    
                    allowdomain.forEach((item)=>{
                            //
                            if(reg.test(item)==false) {
                                console.log('域名结构不正确');
                                return;
                            }
                            if(domain.indexOf(item)>=0)
                            {
                                isallowed=true;
                                return;
                            }
                        });
                    //console.log({isallowed});
                    //await next();
                    //return;
                    if(isallowed)
                    {
                        ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
                        ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
                        ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
                        await next();
                       
                    }
                    else{
                        ctx.status='501';
                        ctx.body="请求跨域";
                    }

                    
                }
            }
                
        }
        else{
            await next()
        }
        
    }
}