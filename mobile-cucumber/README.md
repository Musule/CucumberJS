mobile-cucumber
===

[联系方式] liyinchi@qq.com QQ：233227763

安装
===

1、环境

|名称|版本|
|nodejs|>=12.13.0|
|cucumber|>=6.0.5|
|cucumber-html-reporter|>=5.2.0|
|chai|>=4.2.0|
|assert|>=1.4.1|
|should|>=13.2.3|
|webdriverio|>=4.14.1|
```
运行环境需安装appium
```

2、安装依赖
```
npm install
```

3、启动appium服务器
 
本地配置appium端口，启动appium服务（需要先了解appium操作手册）

![img](mobile-cucumber/static/image/appium配置.png)

4、运行脚本

（1）进入目录下

```
cd ./mobile-cucumber
```

（2）运行命令

```
./node_modules/.bin/cucumber-js --format json:./report/report.json
```

或

```
npm run start
```


5、生成html报告

因为cucumber只生成json格式的报告，需要借助外部模块cucumber-html-reporter转成html格式

（前提是已配置index.js文件，写入json报告位置、输出html报告位置，执行才能有效）


```
node index.js
```

或

```
npm run report
```


# 初始化caps
[官方参考](http://appium.io/docs/cn/writing-running-appium/caps/)

#故障排除

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

①
```
npm install -g node-gyp
```
②
```
npm install --global --production windows-build-tools
```
③本地安装python

④python设置到环境变量
```
npm config set python C:/Python27
```
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




目录
===

* apps 安装包
* helpers/apps.js 配置安装包路径
* helpers/caps.js 期望参数配置（初始化参数配置）
* test 测试脚本存放位置
* mochawesome-report 测试报告

