# React 插件

React 常用开发插件。

## React 核心库

### react
React 是一套用来建立用户交互界面的 JavaScript 框架。

安装这个包之后，就可以立即使用 React，不需要额外安装其他 JSX 解析插件。
```
# 安装
tnpm ii react --save-dev
# 使用
import React from 'react';
```

> 默认情况下，React 安装的包都是开发模式。开发版本包含一些常用错误的扩展警告信息，反之，生产版本包含性能优化等所有的错误处理。

使用 React 的生产版本，可以设置环境变量 `NODE_ENV` 为 `production`。常用的代码压缩工具如 UglifyJS 在压缩代码时，会将开发模式下的扩展删除。

使用案例：
```
var React = require('react');
 
// Addons are in separate packages: 
var createFragment = require('react-addons-create-fragment');
var immutabilityHelpers = require('react-addons-update');
var CSSTransitionGroup = require('react-addons-css-transition-group');
```


### react-dom
React-dom 是一个 React 和 DOM 一起工作的基础。

这个包为网页中 DOM 结构的渲染服务，它通常要和 React 一起使用。

```
# 安装
tnpm ii react react-dom --save-dev
# 使用
var React = require('react');
var ReactDOM = require('react-dom');
 
class MyComponent extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}
 
ReactDOM.render(<MyComponent />, node);
```


### react-router
React-router 是 React 的一个路由协议框架，它保证我们的页面视觉与路径保持同步。它提供一套简单的 API 来完成诸如延迟加载、动态路由匹配和路径加载等功能。

```
# 安装
tnpm ii react-router --save-dev
# 使用
import { Router, Route, Link } from 'react-router';
...
```

## Babel 核心库

### babel-core

