HTML 5.1
---

### HTML 5 新的语义元素
- `<main>` 定义主要内容;
- `<nav>` 定义主体模块或者导航链接的集合;
- `<article>` 包含独立于页面其他部分的内容；
- `<header>` 包含介绍部分或者是导航链接的集合；
- `<footer>` 定义了整个页面或其中一部分的页脚（并且通常包含原创作者，版权信息，联系方式和站点地图）；
- `<aside>` 定义了所处内容的侧边栏，`<section>` 定义了文档中特定的部分。
- `<audio>` 用来在文档中嵌入音频内容
- `<video>` 用来在文档中嵌入视频内容


### HTML 5.1 引入的新元素
1. `<picture>` 元素 - 把source元素和srcset属性结合到一起，更方便的是当网页展示在小屏幕（例如移动设备）上时，它可以提供内存和尺寸较小的图片。

    `<picture>` 元素的另一个功能就是当页面加载在高分辨率屏幕上的时候就提供高密度的图片。由于这个元素的存在，你可以更好的给用户展示图片并且很好的避免过大的高密度图片与网站不相称。

    更多内容参考：[使用Picture元素提升响应式图片](https://www.sitepoint.com/improving-responsive-images-picture-element/) 和 [响应式图片第一步：使用srcset](https://www.sitepoint.com/responsive-images-part-1-using-srcset/)。

2. `<dialog>` 元素 - 可以用来作为对话框，确认框或者窗体。可以通过把 `<form>` 元素的method属性设置为dialog来把其合并到 `<dialog>` 元素中。这样这个form表单提交的时候，这个对话框就会关闭同时把提交按钮返回的值设置为returnValue。

    [在线Demo](https://jsfiddle.net/8jLhoqd1/)

3. `<details>` 元素 - 展示给用户 在这个组件上可以获取额外的信息或者控件。

4. `<summary>` 元素 - 作为总结，标题，或是图例放在 `<details>` 的内容中，二者互相配合。


### HTML 5.1其他新增
1. `<input>` 元素的type属性新增了month和week两个值。正如它们名字所表示的那样，它们定义控件将元素的值设置为代表一个月或者一周的字符串。

2. forceSpellcheck()方法加入到HTMLElement接口中，并且允许开发者通过在元素上调用此函数强制用户执行拼写和语法检查，即使用户没有聚焦这个单词。其中一个用途就是inputElement.forceSpellcheck()。不幸的是还没有浏览器支持这个特性。

3. allowfullscreen是iframe元素的一个布尔类型属性，它指定了当调用requestFullScreen()方法时，iframe是否接受全屏。当该属性未被指定时，默认元素不接受全屏模式。

4. reportValidity()方法被调用时，强制用户进行 `<form>` 元素的约束校验。比如当一个必填元素没有被填写或者一个字段涉及到它的pattern属性时。如果约束的校验返回正确的结果时，这个函数会返回true，反之则返回false。目前有Chrome和Opera支持了这个方法。