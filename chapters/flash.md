Flash 支持性判断
---

判断浏览器是否支持 Flash：
```
_hasFlash = function() {
    var hasFlash = false;

    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }

    return hasFlash;
}
```

判断浏览器是否支持 Flash 并安装 Flash 插件：
```
_detectFlash = function() {
    //navigator.mimeTypes是MIME类型，包含插件信息
    if (navigator.mimeTypes.length > 0) {
        //application/x-shockwave-flash是flash插件的名字
        var flashAct = navigator.mimeTypes["application/x-shockwave-flash"];

        return flashAct != null ? flashAct.enabledPlugin != null : false;
    } else if (self.ActiveXObject) {
        try {
            new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            return true;
        } catch (oError) {
            return false;
        }
    }
}
```