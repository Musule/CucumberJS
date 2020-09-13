const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/get_driver');
const { $ } = require('webdriverio')

//// 你的步骤定义 /////

Given(/^打开车码头APP$/, async function () {
    await driver.pause(5000); //等待
});


When(/^输入账号"([^"]*)"$/, async function (arg1) {
    await driver.setValue('//*[@resource-id="com.xxxx.dms:id/username"]', arg1);//输入账号
});


When(/^输入密码"([^"]*)"$/, async function (arg1) {
    await driver.setValue('//*[@resource-id="com. xxx.dms:id/password"]', arg1);//输入密码
});

When(/^点击登录按钮$/, async function () {
    await driver.back();//隐藏键盘
    await driver.pause(1000); //等待
    await driver.touchAction('//*[@resource-id="com. xxx.dms:id/login"]', 'tap'); //点击登录
    await driver.pause(5000); //等待
});

Then(/^登录成功$/, async function () {
    await driver.pause(5000);
    await driver.getCurrentDeviceActivity().then(
        function (result) {
            console.log("result" + result);
            assert.equal(result, "com. xxx.dms_module.homepage.view.HomepageActivity");//获取当前页面，判断是否为首页
        },
        function (err) {
            console.log(err.stack);
        })


});

Then(/^退出登录状态$/, async function () {
    await driver.pause(5000); //等待
    let my_button = await driver.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView')
    await driver.click(my_button)
    await driver.pause(5000); //等待
    let setting_button = await driver.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.widget.ListView/android.view.View[4]'); //点击设置
    await driver.click(setting_button)
    await driver.touchAction('//*[@resource-id="com. xxx.dms:id/btn_login_out"]', 'tap'); //点击我的
    // await driver.touchAction('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View', 'tap'); //点击设置
    // await driver.touchAction('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View', 'tap'); //点击退出
    await driver.pause(5000); //等待
});








