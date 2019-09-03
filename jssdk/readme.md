### 游戏平台分享jssdk 
### JSSDK 路径

#### uat:http://gppnode-xgpre.cnsuning.com/jssdk/snshare.1_0_0.js

#### PRD:http://gppnode-xgpre.cnsuning.com/jssdk/snshare.1_0_0.js


### 基本介绍
[JSSDK demo案例](index.html "案例")
本SDK结合游戏平台后台配置项一起使用。 使用中需要用到对应的应用的APPID以获得对应的权限。 分享组件基本功能：
+ 微信H5打开：自动调用配置后台配置的分享文案和分享图片，并完成分享至朋友圈和分享至好友功能的注册.
+ 苏宁易购打开：调用后台配置苏宁易购app分享的相关配置项。
    + 如果关联过小程序的分享，则在前端分享时可调用SNSHARE 的 setMiniProgramConfig 以及 share 方法，传递分享路径，页面弹出组件，保存带有小程序二维码的分享图片；点击组建上的icon，打开微信
    + 未关联过小程序的分享，则在前端分享时可调用SNSHARE 的 SNSHARE.share 方法，传递分享路径，页面弹出组件，保存带有微信二维码的分享图片；点击组件上的icon，打开微信
    + 降级方案：呼起易购app的 native 分享组件。分享内容使用微信默认分享的配置项

### 初始化

script标签引入:
```
<script src='http://gppnode-xgpre.cnsuning.com/jssdk/snshare.1_0_0.js'>
```

### 使用方式
```
//APPID为申请来的应用ID
//初始化;返回对象为SNSHARE 本身
var shareapp=SNSHARE.init(APPID);

//小程序分享之前先调用setMiniProgramConfig方法，传递分享路径
var shareapp=SNSHARE.init(APPID).setMiniProgramConfig({
     sharelink:'http://www.suning.com'

});

呼起分享组件,传递分享路径
SNSHARE.share({

     sharelink:'http://www.suning.com'

});
```