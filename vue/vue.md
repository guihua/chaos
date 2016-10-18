Vue.js
---

数据驱动的组件，为现代化的 Web 界面而生。


### 兼容性
Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能实现的 ECMAScript 5 特性。 

Vue.js 支持所有[兼容 ECMAScript 5 的浏览器](http://caniuse.com/#feat=es5)。


### 独立版本
直接下载并用 `<script>` 标签引入，Vue 会被注册为一个全局变量。
- [开发版本](/vue/vue.js) - 包含完整的警告和调试模式
- [生成版本](/vue/vue.min.js) - 删除了警告，25.37kb min+gzip

> 在开发时请用开发版本，遇到常见错误它会给出友好的警告。


### CDN
可以从 [jsdelivr](http://cdn.jsdelivr.net/vue/1.0.21/vue.min.js) 或 [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.21/vue.min.js) 获取。


### CSP 兼容版本
有些环境，如 `Google Chrome Apps`，强制应用内容安全策略 (CSP) ，不能使用 `new Function()` 对表达式求值。这时可以用 [CSP 兼容版本](https://github.com/vuejs/vue/tree/csp/dist)。


### NPM
在用 Vue.js 构建大型应用时推荐使用 NPM 安装，NPM 能很好地和诸如 Webpack 或 Browserify 的 CommonJS 模块打包器配合使用。
```
# 最新稳定版本
npm install vue
# 最新稳定 CSP 兼容版本
npm install vue@csp
```


### Bower
```
# 最新稳定版本
bower install vue
```


### 命令行工具
Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
```
# 全局安装 vue-cli
npm install -g vue-cli
# 创建一个基于 "webpack" 模板的新项目
vue init webpack my-project
# 安装依赖，走你
cd my-project
npm install
npm run dev
```


### 参考
[Vue.js](http://vuejs.org.cn/)