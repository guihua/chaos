页面管理类
---

### History对象
浏览器窗口有一个 `history` 对象，用来保存浏览历史。

`history` 对象提供了一系列方法，允许在浏览历史之间移动。

- back()：移动到上一个访问页面，等同于浏览器的后退键。

- forward()：移动到下一个访问页面，等同于浏览器的前进键。

- go()：接受一个整数作为参数，移动到该整数指定的页面，比如go(1)相当于forward()，go(-1)相当于back()。

更多history的介绍，参考：[阮一峰——History对象](http://javascript.ruanyifeng.com/bom/history.html)。


### 事件绑定
```
if (type == 'click' && supportTouch) {
    (function(dom, event) {
        var touchStartY;

        that.$container.on('touchstart', dom, function(e) {
            touchStartY = e.changedTouches[0].clientY;
        });

        that.$container.on('touchend', dom, function(e) {
            if (Math.abs(e.changedTouches[0].clientY - touchStartY) > 10) {
                return;
            }

            e.preventDefault();

            events[dom][event].call(this, e);
        });
    })(t, type);
} else {
    this.$container.on(type, t, events[t][type]);
}
```

Touch事件支持，参考：[Touch事件支持判断](touch.md)

[完整版页面管理类](pageManager.js)