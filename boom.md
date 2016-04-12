Boom：一款有趣的JavaScript动画效果
---

实现出来的效果惊呆了，细看代码之后，发现是在原图之上构造容器，分割原有图片采用动画实现。

html代码：
```
<div class="wrap">
    <img class='pic1' src="./images2.jpg">
    <img class='pic2' src="./images.jpg">
</div>
```

css样式：
```
.wrap {
    position: absolute;
    top: 100px;
    left: 100px;
}
.pic1 {
    width: 300px;   // 图片设置为原始图片大小，不能缩放
}
.pic2 {
    width: 116px;
}
.shake {
    animation: shakeAm 0.3s ease-in;    // 图片动画
    -webkit-animation: shakeAm 0.3s ease-in;
}
@-webkit-keyframes shakeAm {
    0% {
        transform: rotateZ(0deg);
    }
    25% {
        transform: rotateZ(15deg);
    }
    50% {
        transform: rotateZ(0deg);
    }
    75% {
        transform: rotateZ(-15deg);
    }
    100% {
        transform: rotateZ(0deg);
    }
}
```

JavaScript代码：
```
boom($('img'));
```

初始化之前，调用源码 [Boom](/code/Boom.js)。

该效果出自：[boomJS](https://github.com/chokcoco/boomJS)