Touch事件支持判断
---

判断设备是否支持Touch事件
```
var supportTouch = function() {
    try {
        document.createEvent("TouchEvent");

        return true;
    } catch (e) {
        return false;
    }
}();
```