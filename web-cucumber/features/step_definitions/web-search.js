var { Before,After,Given, When, Then,And} = require('cucumber');
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



Given(/^load browser "([^"]*)"$/, async function(url) {
   client= webdriverio
  .remote(options)
  .init();
  await client.url(url);
  });

When(/^search "([^"]*)"$/, async function (text) {
    await client.addValue('//input[@id="kw"]', text);
    await client.element('//input[@id="su"]').click();
    await client.pause(1000);
  });

Then(/^search result "([^"]*)"$/, async function (result) {
    //await assert.equal(client.element('//*[@id="1"]/h3/a').getText(),result);//断言
    await client.element('//*[@id="1"]/h3/a').getText().should.eventually.equal(result);//断言
});


After(async function() {
  // await client.end();
});


