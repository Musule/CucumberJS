# language: zh-CN
功能: mock数据
  通过自定定义mock数据模拟请求响应数据，并进行断言

场景大纲: GET 请求获取接口数据，并进行断言
    假如  请求 "<URL>" 期望 '<expectval>'
    例子:
      | URL                           | expectval                                           |
      | http://localhost:53000/info/1 | {   "id": 1,   "name": "张三",   "location": "福州" }   |
      | http://localhost:53000/info/2 | {   "id": 2,   "name": "李四",   "location": "宁德" }  |
      | http://localhost:53000/info2/1 | {   "id": 1,   "name": "陈七",   "location": "漳州" } |

  场景大纲:   场景大纲: POST 请求接口，插入一条数据（更换ID，否则报错 Insert failed, duplicate id）
    假如 请求数据 '<data>' 请求地址 "<URL>" 期望得到 '<expectval>'
    例子: 
     | URL                        | data                                            | expectval                                       |
     | http://localhost:53000/info | { "id": 3, "name": "jack", "location": "CHINA"} | { "id": 3, "name": "杰克", "location": "CHINA"} |
