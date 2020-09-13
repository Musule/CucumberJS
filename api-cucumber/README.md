api-cucumber
===

[联系方式] liyinchi@qq.com QQ：233227763

安装
===

1、环境

|名称|版本|
|nodejs|>=12.13.0|
|cucumber|>=6.0.5|
|cucumber-html-reporter|>=5.2.0|
|json-server|>=0.16.1|
|axios|>=0.20.0|
|unirest|>=0.6.0|
|wdio|>=4.0.0|

2、安装依赖
---
```
npm install
```

3、启动mock服务

（1）切换到目录下

```
cd ./cucumberJS/api-cucumber
```
（2）启动mock
```
npm run mock
```

（3）demo使用mockjs模拟响应数据，定义四个mock接口
```JavaScript
  Resources
  http://localhost:53000/info
  http://localhost:53000/info2
  http://localhost:53000/posts
  http://localhost:53000/comments

  Home
  http://localhost:53000
```


4、运行测试脚本并生成json报告

（1）运行脚本

```
./node_modules/.bin/cucumber-js --format json:./report/report.json
```

或

```
npm run start
```

（2）cucumberJS自动解析并执行以下用户故事
``Gherkin
功能: mock数据
  通过自定定义mock数据模拟请求响应数据，并进行断言

场景大纲: GET 请求获取接口数据，并进行断言
    假如  请求 "<URL>" 期望 '<expectval>'
    例子:
      | URL                           | expectval                                           |
      | http://localhost:53000/info/1 | {   "id": 1,   "name": "张三",   "location": "福州" }   |
      | http://localhost:53000/info/2 | {   "id": 2,   "name": "李四",   "location": "宁德" }  |
      | http://localhost:53000/info2/1 | {   "id": 1,   "name": "陈七",   "location": "漳州" } |

  场景大纲: POST 请求接口，插入一条数据（更换ID，否则报错 Insert failed, duplicate id）
    假如 请求数据 '<data>' 请求地址 "<URL>" 期望得到 '<expectval>'
    例子: 
     | URL                        | data                                            | expectval                                       |
     | http://localhost:53000/info | { "id": 4, "name": "jack", "location": "CHINA"} | { "id": 4, "name": "jack", "location": "CHINA"} |

```

（3）执行结果
前三条用例断言正确，第四条用例插入数据与断言数据不一致

```
> tapi@1.0.0 start /Users/liyinchi/workspace/AutoTest/web/nodejs/mocha/js-autotest-framework/Cucumber/api-cucumber
> cucumber-js --format json:./report/report.json

...AssertionError [ERR_ASSERTION]: Expected values to be loosely deep-equal:

{
  id: 3,
  location: 'CHINA',
  name: 'jack'
}

should loosely deep-equal

{
  id: 3,
  location: 'CHINA',
  name: '杰克'
}
    at /Users/liyinchi/workspace/AutoTest/web/nodejs/mocha/js-autotest-framework/Cucumber/api-cucumber/features/step_definitions/definitions.js:40:27
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async World.<anonymous> (/Users/liyinchi/workspace/AutoTest/web/nodejs/mocha/js-autotest-framework/Cucumber/api-cucumber/features/step_definitions/definitions.js:26:5) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: [Object],
  expected: [Object],
  operator: 'deepEqual',
  [Symbol(originalCallSite)]: [Array],
  [Symbol(mutatedCallSite)]: [Array]
}
.

4 scenarios (4 passed)
4 steps (4 passed)
0m00.027s

```

6、生成html报告

此处说明：因为cucumber只生成json格式的报告，需要借助外部模块cucumber-html-reporter转成html格式

（前提是已配置index.js文件，写入json报告位置、输出html报告位置，执行才能有效）


```
node index.js
```

或

```
npm run report
```

故障处理
===

* 设置淘宝镜像之后下载安装依赖仍然失败

解决办法：关闭本地电脑翻墙代理软件

* 报错
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
node-gyp exited with code:1
Please make sure you are using a supported platform and node version.If you would like to compile fibers on this machine please make sure you have setup your build environment--

Windows + OS X instructions here:https://github.com/nodejs/node-gyp
’nodejs‘不是内部或外部命令，也不是可运行的程序或批处理文件。

解决办法：

①npm install -g node-gyp

②npm install --global --production windows-build-tools

③本地安装python

④python设置到环境变量npm config set python C:/Python27

* cucumber报告html渲染问题

使用360浏览器打开cucumber报告，如果坚持要用chrome浏览器打开cucumber报告，需要开启翻墙。（因报告框架cucumber-html-reporter渲染页面需要载一些墙外的文件）
