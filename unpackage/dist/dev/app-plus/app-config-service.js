
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/release/release","pages/store/store","pages/my/my","pages/home/blacklist","pages/home/report","pages/home/lookup","pages/home/talk","pages/home/talkinfo","pages/home/adopt","pages/home/selectdetailed","pages/home/lookingpets","pages/home/washing","pages/release/adoptrelease"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home/home","iconPath":"static/tabbar/Home.png","selectedIconPath":"static/tabbar/Home2.png","text":"首页"},{"pagePath":"pages/release/release","iconPath":"static/tabbar/Release.png","selectedIconPath":"static/tabbar/Release2.png","text":"发布"},{"pagePath":"pages/store/store","iconPath":"static/tabbar/store.png","selectedIconPath":"static/tabbar/Store2.png","text":"商城"},{"pagePath":"pages/my/my","iconPath":"static/tabbar/My.png","selectedIconPath":"static/tabbar/My2.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"chongwu","compilerVersion":"3.2.12","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom"}},{"path":"/pages/release/release","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发布","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/store/store","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城","enablePullDownRefresh":false}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/home/blacklist","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/home/report","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/home/lookup","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/home/talk","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/home/talkinfo","meta":{},"window":{}},{"path":"/pages/home/adopt","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/home/selectdetailed","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/home/lookingpets","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/home/washing","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/release/adoptrelease","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
