用 NodeList.js 操作 DOM
---

近年来，jQuery 已经成为 web（开发） 中实际意义上的 JavaScript 库。它解决了许多跨浏览器的不兼容性问题，同时添加了一层受欢迎的语法糖用于客户端的脚本编写。它将 DOM 操作这一大痛处进行了抽象，但是自它出现以来，原生浏览器 API 已经有了显著改善并且也许你并不需要 jQuery的想法开始被人们所接受。

下列是一些原因：
1. jQuery 包含很多你并不需要或不会使用到的功能（因此略显臃肿）。

2. jQuery 很多人来说太过纷繁。通常体积较小的库可以更好的完成特定任务。

3. 就 DOM 操作而言，浏览器 API 如今可以做大多数 jQuery 可以做的事。

4. 浏览器 API 现在更加同步，例如，使用 addEventListener 而非 attachEvent。

目前的问题是使用普通的（或原始的）JavaScript 进行 DOM 操作同 jQuery 一样令人厌烦。因为你不得不读写多余的代码，并且处理浏览器中无用的 NodeList 。

什么是 NodeList：
> NodeList 对象是节点集合，如 Node.childNodes 和 document.querySelectorAll 方法的返回值。

以及有时会出现的动态 NodeLists （令人困惑的）：
> 在一些场景下，NodeList 是一个动态集合，也就是说在 DOM 上的操作都会反射到这个集合中。例如，Node.childNodes 就是动态的。

浏览器也没有提供任何有效的办法来操作这些 NodeList 对象。

[NodeList.js](/nodelist/NodeList.js) 是原生 DOM API 的一个封装，它让你在操作节点数组（也就是我的 NodeList）时像操作单个节点一样。相比浏览器的原生 NodeList 对象，这给你带来了更多的实用性。

使用：
```
// 选择 DOM 节点
$$(selector);
```

更多使用方法，参考 [Github教程](https://github.com/eorroe/NodeList.js) 。