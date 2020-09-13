Feature: login
 Scenario Outline: login
   Given open browser "<url>"
   When input "<username>" And "<password>"
   Then result "<result>"
   Examples:
     |               url                         |   username   |  password  |    result     |
     | http:// xxx.xxx.com/#/login          |              |            | 当前: 超级管理员 |
     | http:// xxx.xxxx.com/#/login          |              |            | 当前: 超级管理员 |
