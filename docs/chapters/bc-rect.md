JavaScript getBoundingClientRect方法
---

`getBoundingClientRect` 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置，其语法为：
```
document.documentElement.getBoundingClientRect
```

该函数返回DOM元素到浏览器可视范围的距离，该函数返回一个Object对象，该对象有6个属性：top, lef, right, bottom, width, height。这里的top、left和css中的理解很相似，width、height是元素自身的宽高，但是right，bottom和css中的理解有点不一样。right是指元素右边界距窗口最左边的距离，bottom是指元素下边界距窗口最上面的距离。


### 判断网页中element是否可见
以前一直用 `jQurey` 的 `is(“:visible”)` 来判断。（这个函数效率很低）

`getBoundingClientRect()` 方法获取element实际的top、bottom、left、right定位值，我们利用它计算element的高度，如果为0，即可认为element不可见。
```
function isVisible(element) {
    var rect = element[0].getBoundingClientRect();
    return !!(rect.bottom - rect.top);
}
```


### 获取页面元素的位置
以前绝大多数的使用下面的代码来获取页面元素的位置：
```
var _x = 0, _y = 0;
do {
    _x += el.offsetLeft;
    _y += el.offsetTop;
} while(el=el.offsetParent);
return {x: _x, y: _y};
```

现在通过 `getBoundingClientRect()` 方法可以非常方便的获取元素在界面中的位置。
```
var X = this.getBoundingClientRect().left + document.documentElement.scrollLeft;
var Y = this.getBoundingClientRect().top + document.documentElement.scrollTop;
```