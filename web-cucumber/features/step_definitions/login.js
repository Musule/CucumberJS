var { setDefaultTimeout,BeforeStep,Before,After,Given, When, Then,And} = require('cucumber');
var webdriverio = require('webdriverio'); //webdriver库
var expect = require('chai'); //断言库
var assert = require('assert'); //断言库
var should = require('should');//断言库
var client;
var options = {
 desiredCapabilities: {
         //chrome、safari、firefox
        browserName: 'chrome' ,
        chromeOptions: {
                    args: [
                        'headless',
                        // Use --disable-gpu to avoid an error from a missing Mesa
                        // library, as per
                        // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
                        'disable-gpu',
                    ],
                },
    }
};

//setDefaultTimeout(5000);//设置异步步骤的默认超时。默认为5000毫秒。

Before(async function() {
  
});


Given(/^open browser "([^"]*)"$/, async function(url) {
  client=webdriverio
  .remote(options)
  .init();
  await client.url(url);
  });

When(/^input "([^"]*)" And "([^"]*)"$/, async function (username, password) {
    await client.addValue(".//input[@placeholder='请输入邮箱前缀']", username);
    await client.addValue(".//input[@placeholder='请输入密码']", password);
    await client.element("//button[@type='button']").click();
    await client.pause(5000);
  });

Then(/^result "([^"]*)"$/, async function (result) {
  await client.element("//span[@class='user']").getText().should.eventually.equal(result);//断言
});


After(async function() {
  // await client.end();
});