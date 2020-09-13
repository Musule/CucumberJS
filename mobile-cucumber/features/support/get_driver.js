const webdriverio = require('webdriverio');

//设置被测应用参数
let options = {
    desiredCapabilities: {
        platformName: "Android",
        deviceName: "c314ca21", //设备序列串号 
        platformVersion: "8.1", //系统平台版本
        appPackage: "com.xxxx.dms", //package 名字
        appActivity: "com.xxxx.dms.splash.view.SplashActivity", //启动activity 名字
        resetKeyboard: false,   //是否重置输入法
        noReset: true,  //是否重置整个应用（清除数据）
        unicodeKeyboard: false  //使用 Unicode 输入法 
    },
    host: "127.0.0.1",
    port: 4781
}

//根据参数配置创建WebDriverIO实例;
function createDriver() {
    const client = webdriverio.remote(options);
    return client;
}

//将封装内容导出，供外部js文件调用
exports.driver = createDriver();