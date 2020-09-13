 Feature: search
   Scenario Outline: search
     Given load browser "<url>"
     When search "<text>"
     Then search result "<result>"
     Examples:
     |             url      |     text    |                        result                                 |
     | http://www.baidu.com |   selenium  |         Selenium - Web Browser Automation                     |
     | http://www.baidu.com |  webdriverio|   WebdriverIO · Next-gen WebDriver test framework for Node.js |

