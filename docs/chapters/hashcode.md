获取 HashCode
---

获取 HashCode：
```
var _getHashCode = function(str) {
    var hash = 0;

    if (!_isNull(str)) {
        for (var i = 0; i < str.length; i++) {
            hash = hash * 31 + str.charCodeAt(i);
            hash = _intValue(hash);
        }
    }

    return Math.abs(hash);
},
_isNull = function(str) {
    return str == null || str.value == "";
},
_intValue = function(num) {
    var MAX_VALUE = 0x7fffffff;
    var MIN_VALUE = -0x80000000;

    if (num > MAX_VALUE || num < MIN_VALUE) {
        return num &= 0xFFFFFFFF;
    }

    return num;
};
```

正常获取的 hashCode 存在负值，在这里，我们通过 `Math.abs` 取绝对值。