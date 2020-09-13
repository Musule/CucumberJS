
var { Given, When, Then, And } = require('cucumber');
var axios = require("axios");
var assert = require('assert');
//请求格式
var jsonFormat = {
    headers: { 'Content-Type': 'application/json' },
    json: true
};
///// 你的步骤定义 /////
Given('请求 {string} 期望 {string}', async (url, expectval) => {
    //执行get请求，并存储响应结果
    axios.get(url).then(async (response) => {
        //获取响应结果body
        var responseData = response.data;
        // console.log("response body", responseData)
        //期望内容转成对象
        var assertdata = JSON.parse(expectval);
        //断言两者是否一致
        return assert.deepEqual(responseData, assertdata);
    });

});
Given('请求数据 {string} 请求地址 {string} 期望得到 {string}', async (jsonData, url, expectval) => {
    //执行post请求
    await axios.post(
        // 请求地址
        url,
        // 请求body
        JSON.parse(jsonData)
        // 请求头
    )
        .then(async (response) => {
            //获取响应结果body
            var responseData = await response.data;
            //期望内容转成对象
            var assertdata = await JSON.parse(expectval);
            //断言两者是否一致
            // await console.log("response body",responseData);
            return assert.deepEqual(responseData, assertdata);
        })
        .catch(function (error) {
            console.log(error);
        })

});
