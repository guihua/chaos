JS实现复制到剪贴板功能
---

使用系统提供的剪贴板是一项基本的IT技能。


### 剪贴板的安全机制
由于剪贴板的安全机制，几年前，浏览器不具备直接访问剪贴板的能力。

现在，我们已经可以整合基本的剪贴板功能，但还是有一些限制：
1. 大部分浏览器支持剪贴板功能，Mac和iOS上的Safari除外。

2. 不同浏览器的支持程度不尽相同，一些功能并不完整或存在缺陷。

3. 用户必须通过点击鼠标或按键的方式来主动触发，脚本并不能随时操纵剪贴板。


### document.execCommand()方法
`document.execCommand()` 是需要调用的关键方法，它可以传入的参数包括 `cut`，`copy` 和 `paste`。

在调用之前，可以使用 `document.queryCommandSupported(‘copy’);` 或 `document.queryCommandEnabled(‘copy’);` 方法（这两个方法功能相同）来检测浏览器是否支持复制命令。

> Chrome 虽然支持复制命令的，但在 Chorme 中这两个方法都会返回 false 值。

检测 `document.execCommand` 方法是否存在也是一个判断方法，但更好的做法是将 `document.execCommand(‘copy’)` 调用放在 `try-catch` 块内。

接下来就得考虑用户能复制什么内容了，脚本需要能够选中文本，好在所有的浏览器都允许使用 `select()` 方法选择文本输入和文本区域的内容，并且在 Firefox 和 Chrome／Opera 浏览器中，还能使用 `document.createRange` 方法来从任何元素中选择文本。
```
// select text in #myelement node
// 选择 #myelement 标签中的文本
var
    myelement = document.getElementById('#myelement'),
    range = document.createRange();

range.selectNode(myelement);
window.getSelection().addRange(range);
```

然而，IE/Edge 并不支持这一方法。


### 使用clipboard.js
如果你已经放弃打造一个高鲁棒性的跨浏览器剪贴板方案，那么 [clipboard.js](https://github.com/zenorocha/clipboard.js.git) 会是一个不错的选择。

它提供了多种配置方法，例如通过添加 HTML5 数据属性来指定触发器和复制对象：
```
<input id="copyme" value="text in this field will be copied" />
<button data-clipboard-target="#copyme">copy</button>
```


### 自己来实现
虽然 clipboard.js 只有 2kb，但我们只用20行代码就能实现，前提是你能接受以下条件：
- 只有对应的表单区域能够被复制

- 在一些浏览器中无效（没错，就是Safari），但可以在选中文本后提示用户使用快捷键 Ctrl/Cmd + C。

像 clipboard.js 一样，我们会使用一个按钮作为触发器，添加数据属性（data-copytarget）来指定拷贝内容的目标（#website）：
```
<input type="text" id="website" value="http://www.sitepoint.com/" />
<button data-copytarget="#website">copy</button>
```

下面的自执行函数会给所有带有 data-copytarget 属性的元素添加一个点击事件处理方法，去选中区域里的文本并执行 document.execCommand(‘copy’) 。如果这一操作失败了，文本将保持选中状态同时弹出提示。
```
(function() {

    'use strict';

    // click events
    // 添加点击事件
    document.body.addEventListener('click', copy, true);

    // event handler
    // 添加时间处理方法
    function copy(e) {

        // find target element
        // 搜索目标元素
        var
            t = e.target,
            c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);

        // is element selectable?
        // 判断元素是否能被选中
        if (inp & amp; amp; & amp; amp; inp.select) {

            // select text
            // 选择文本
            inp.select();

            try {
                // copy text
                // 复制文本
                document.execCommand('copy');
                inp.blur();
            } catch (err) {
                alert('please press Ctrl/Cmd+C to copy');
            }

        }

    }

})();
```

具体案例请查看：[复制文本](https://jsfiddle.net/5fxtuvvj/)

复制浏览器链接：
```
var _copy = function() {
    jQuery('body').append('<input type="hidden" id="copy">');

    var copyObj = document.getElementById('copy');
    copyObj.value = window.location.href;

    var toastStr = '<div class="cmui-toast"><div class="cmui-toast-inner"><p>{message}</p></div></div>';

    if (copyObj && copyObj.select) {
        copyObj.select();

        try {
            document.execCommand('copy');
            copyObj.blur();
            toastStr = toastStr.replace(/{message}/g, '复制成功，可以分享给他人啦！');
        } catch (err) {
            alert('please press Ctrl/Cmd+C to copy URI！');
            toastStr = toastStr.replace(/{message}/g, '请按 Ctrl/Cmd+C 来复制链接分享给他人！');
        }

        jQuery('body').append(toastStr);

        setTimeout(function() {
            jQuery('.cmui-toast').remove();
        }, 2000);
    }
};
```