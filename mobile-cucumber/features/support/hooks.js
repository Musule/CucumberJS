const { After, BeforeAll, Before, AfterAll, setDefaultTimeout } = require('cucumber');
const { driver } = require('./get_driver');

//设置缺省超时时间
setDefaultTimeout(60 * 1000);

BeforeAll(function() {
   return driver.init();
})

//Before Scenario Hook
Before(async function() {
})

//After Scenario Hook
After(async function() {
    //每个场景结束时截屏
    let screenshot = await driver.saveScreenshot();
    this.attach(screenshot, 'image/png');
});

AfterAll(async function() {
    //关闭应用
    await driver.end();
})

