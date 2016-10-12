PostCSS
---

PostCSS是什么？最好的定义来自于PostCSS自身项目在 [github](https://github.com/postcss) 上的描述：

>PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

简而言之，PostCSS是CSS变成JavaScript的数据，使它变成可操作。PostCSS是基于JavaScript插件，然后执行代码操作。PostCSS自身并不会改变CSS，它只是一种插件，为执行任何的转变铺平道路。


### PostCSS不是什么
- 尽管表面上它看起来是一个预处理器，其实它不是一个预处理器
- 尽管表面上它看起来是一个后处理器，其实它也不是一个后处理器
- 尽管它可以促进、支持未来的语法，其实它不是未来语法
- 尽管它可以提供清理、优化代码这样的功能，其实它不是清理、优化代码的工具
- 它不是任何一件事情，这也意味者它潜力无限，你可以根据自己的需要配置你需要的功能


### PostCSS特别之处
PostCSS是一种完全不同的编写CSS的方法。前端将其描述为"PostCSS是一把瑞士军刀"，这是一个完全恰当的描述。

- 多样化的功能插件，创建了一个生态的插件系统
- 根据你需要的特性进行模块化
- 快速编译
- 创建自己的插件，且具可访问性
- 可以像普通的CSS一样使用它
- 不依赖于任何预处理器就具备创建一个库的能力
- 可以与许多流行工具构建无缝部署

更多PostCSS特性请参考 [PostCSS官网](http://postcss.org/)。