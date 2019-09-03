module.exports = (app) => {

    let { router, controller } = app;

    router.get('/abc', controller.index.init);
    router.get('/jssdk/:filename', controller.jssdk.init);
    router.get('/jssdk/', controller.jssdk.init);
    router.get('/jssdk/*', controller.jssdk.init);
    //代理一个服务
    router.get('/proxy/:dev/:sence', controller.proxy.init);
    
    router.get('/image/:img',controller.image.init);

}