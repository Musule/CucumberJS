web-cucumber
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
|chai|>=4.2.0|
|assert|>=1.4.1|
|should|>=13.2.3|
|webdriverio|>=4.14.1|

2、安装依赖
---
```
npm install
```

3、启动selenium-standalon服务
```
运行环境需安装selenium-standalon服务，有两种方式：全局方式、本地jar包方式
```

全局方式，启动selenium-standalon服务
---

(1)设置淘宝镜像地址（因下载驱动是从国外网站下载）

`npm config set registry http://registry.npm.taobao.org/`

mac使用

`export CHROMEDRIVER_CDNURL=http://npm.taobao.org/mirrors/chromedriver`

windows

`set CHROMEDRIVER_CDNURL=http://npm.taobao.org/mirrors/chromedriver`


(2)安装

`npm install selenium-standalone@latest -g`

(3)自动安装chrome、Firefox、safari浏览器驱动并启动

`selenium-standalone install && selenium-standalone start`

或

分开执行

`selenium-standalone install`

`selenium-standalone start`

执行结果
```
----------
selenium-standalone installation starting
----------

---
selenium install:
from: https://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar
to: /Users/liyinchi/TestTool/node-v12.18.3-darwin-x64/lib/node_modules/selenium-standalone/.selenium/selenium-server/3.141.59-server.jar
---
chrome install:
from: https://chromedriver.storage.googleapis.com/85.0.4183.87/chromedriver_mac64.zip
to: /Users/liyinchi/TestTool/node-v12.18.3-darwin-x64/lib/node_modules/selenium-standalone/.selenium/chromedriver/85.0.4183.87-x64-chromedriver
---
firefox install:
from: https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-macos.tar.gz
to: /Users/liyinchi/TestTool/node-v12.18.3-darwin-x64/lib/node_modules/selenium-standalone/.selenium/geckodriver/0.26.0-x64-geckodriver
---
chromiumedge install:
from: https://msedgedriver.azureedge.net/86.0.600.0/edgedriver_mac64.zip
to: /Users/liyinchi/TestTool/node-v12.18.3-darwin-x64/lib/node_modules/selenium-standalone/.selenium/chromiumedgedriver/86.0.600.0-x64-msedgedriver
```

>注意:虽然selenium-standalone安装时会自动检查浏览器对应版本驱动，但是一旦浏览器更新，就需要重新安装selenium-standalone

局部启动（本地jar包方式）启动selenium-standalon服务
---

(1)百度下载selenium-server-standalone-X.X.X.jar

（本地web目录下已下载了一个3.5.3版本）


(2)下载其他浏览器驱动，驱动版本需要与你的浏览器版本对应。

谷歌浏览器 [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/downloads)

火狐浏览器 [geckodriver](https://github.com/mozilla/geckodriver/releases)

IE浏览器 ...

(3)启动selenium-standalone服务

```
cd web-cucumber
java -jar selenium-server-standalone-3.5.3.jar
```

执行结果
```
00:00:34.606 INFO - Selenium build info: version: '3.5.3', revision: 'a88d25fe6b'
00:00:34.607 INFO - Launching a standalone Selenium Server
2020-09-14 00:00:34.640:INFO::main: Logging initialized @378ms to org.seleniumhq.jetty9.util.log.StdErrLog
00:00:34.704 INFO - Driver class not found: com.opera.core.systems.OperaDriver
00:00:34.745 INFO - Driver provider class org.openqa.selenium.ie.InternetExplorerDriver registration is skipped:
 registration capabilities Capabilities [{ensureCleanSession=true, browserName=internet explorer, version=, platform=WINDOWS}] does not match the current platform MAC
00:00:34.745 INFO - Driver provider class org.openqa.selenium.edge.EdgeDriver registration is skipped:
 registration capabilities Capabilities [{browserName=MicrosoftEdge, version=, platform=WINDOWS}] does not match the current platform MAC
00:00:34.780 INFO - Using the passthrough mode handler
2020-09-14 00:00:34.813:INFO:osjs.Server:main: jetty-9.4.5.v20170502
2020-09-14 00:00:34.837:WARN:osjs.SecurityHandler:main: ServletContext@o.s.j.s.ServletContextHandler@7d907bac{/,null,STARTING} has uncovered http methods for path: /
2020-09-14 00:00:34.842:INFO:osjsh.ContextHandler:main: Started o.s.j.s.ServletContextHandler@7d907bac{/,null,AVAILABLE}
2020-09-14 00:00:34.882:INFO:osjs.AbstractConnector:main: Started ServerConnector@76707e36{HTTP/1.1,[http/1.1]}{0.0.0.0:4444}
2020-09-14 00:00:34.882:INFO:osjs.Server:main: Started @621ms
00:00:34.882 INFO - Selenium Server is up and running
```


2、安装依赖
```
npm install
```


3、运行测试脚本并生成json报告

(1)进入目录下

```
cd web-cucumber
```

(2)执行

```
./node_modules/.bin/cucumber-js --format json:./report/report.json
```

或

```
npm run start
```

3、生成html报告

因cucumber只生成json格式的报告，需要借助外部模块cucumber-html-reporter转成html格式

（前提是已配置index.js文件，写入json报告位置、输出html报告位置，执行才能有效）

（1）执行生成命令
```
node index.js
```

或

```
npm run report
```


故障排除
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


#命令行参数

`./node_modules/.bin/cucumber-js --help`

  -v, --version                   输出版本号
  -b, --backtrace                 显示错误的完整回溯
  -d, --dry-run                   调用格式化程序而不执行步骤，一般用于生成feature对应的实现step方法
  --exit                          在测试运行结束时强制关闭事件循环:cucumber将调用process.exit
  --fail-fast                     在第一次失败时中止运行
  -f, --format <TYPE[:PATH]>      指定输出格式，也可以指定重定向格式化程序输出的路径(可重复)(默认值:[])
  --format-options <JSON>         为格式化程序提供选项(可重复)(默认值:{})
  --i18n-keywords <ISO 639-1>     列表语言关键字(默认:“”)
  --i18n-languages                语言列表
  --language <ISO 639-1>          为特性文件提供默认语言(默认:"")
  --name <REGEXP>                 只执行名称与表达式匹配的场景(可重复)(默认值:[])
  --no-strict                     即使有未完成的步骤，也要成功
  --order <TYPE[:SEED]>           按照指定的顺序运行场景。类型应该是' defined '或' random '(默认为:' defined ')
  -p, --profile <NAME>            指定要使用的概要文件(可重复)(默认值:[])
  --parallel <NUMBER_OF_SLAVES>   与给定的从服务器数量并行运行(默认值:0)
  -r, --require <GLOB|DIR|FILE>   在执行特性之前需要文件(可重复)(默认:[])
  --require-module <NODE_MODULE>  需要文件之前需要节点模块(可重复)(默认:[])
  -t, --tags <EXPRESSION>         只执行标记与表达式匹配的特性或场景(可重复)(默认:"")
  --world-parameters <JSON>       提供将传递给world构造函数(可重复)的参数(默认值:{})
  -h, --help                      输出使用信息
