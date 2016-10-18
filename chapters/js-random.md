JavaScript中的随机数
---
在JavaScript中随机性经常都会使用到，但随机性也有许多种不同的类型，以及需要根据不同的应用程序选择不同的随机性。


### 基础的随机数
`JavaScript` 中有一个内置的 `Math.random()` 函数，可以帮你得到任意的随机数，比如：
```
Math.random(); // =>0.19401081069372594
```

`Math.random()` 函数经常返回 `0~1` 之间的浮点数。从技术上讲，`Math.random()` 返回的数会出现 `0`，但永远不会出现 `1`。

因为我们经常要使用 `Math.random()`，所以我们可以将它封装成一个简单的函数：
```
function getRandom () {
    return Math.random();
}
```

调用 `getRandom()` 函数和使用 `Math.random()` 效果等同：
```
getRandom(); // =>0.8312549368438933
```

封装的 `getRandom()` 函数得到的随机数依旧是在 `0~1` 之间的浮点数，但很多时候，需要的随机数是在一个特定的范围之内，比如 `10~100` 之内的一个随机整数。


### 特定范围内的随机数
其实在上面的函数基础上，可以将其功能扩展一下，获取在某一个范围间的随机数（排队最大数和最小数）。实现这个功能，其实不难，但需要一顶点数学知识。

#### 浮点数
```
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

getRandom(10, 100); // => 10.687806629219263
```

#### 整数
```
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandom(10, 100); // => 41
```

上面代码扩展获取的特定范围内的随机数，但不包括最大值 `max` 和最小值 `min`。但有的时候得到的随机数，还需要包括最大值 `max` 和最小值 `min`。实现这样的功能，并不难，只需要稍微改良一下上面的函数：
```
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(10, 100); // => 63
```


### 真假随机
大家可能都玩过这样的一游戏，抛硬币。那么不管你怎么抛，都只有两个答案，一个正面（暂把它称为真，即 `1`），另一个则是反面（也就是假，即 `0`）。这样的游戏，我们也可以通过一个随机函数来帮我们实现：
```
function coinToss() {
    return Math.floor(Math.random() * 2);
}

coinToss(); // => 0
```

如果你想得到随机的 `true` 和 `false` 值，可以这样做：
```
function coinToss() {
    return (Math.floor(Math.random() * 2) === 0);
}

coinToss(); // => false
```

还可以写得更简单一点：
```
function coinToss() {
    return Math.random() < .5;
}

coinToss(); // => false
```

运用到刚才所说的抛硬币的游戏中，我们想要得到的是“正面”(`true`)还是“反面”(`false`)，那只需要根据得到的值再做一个简单的判断：
```
function coinFlip() {
    return (Math.floor(Math.random() * 2) === 0) ? "正面" : "反面";
}

coinFlip(); // => "正面"
```


### 从数组中随机抽取数值
除了在有限范围内取随机数之外，很多时候，我们还需要在一个数组中随机抽取数组中的数值：
```
var numPool = [1, 3, 5, 7, 9, 10],
    rand = numPool[Math.floor(Math.random() * numPool.length)];
```

有的时候，需要在一个数组中排除另外一个数组中的数组，并且将结果放到一个空的数组中：
```
var numPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var excludePool = [3, 4];
var filteredPool = [];
```

通过一个 `for` 循环对原数组 `numPool` 做一个遍历，如果这个数存在于 `excludePool` 中，就将结果放到 `filteredPool` 中：
```
for (var i = 0; i < numPool.length; i++) {
    if (excludePool.indexOf(numPool[i]) === -1) {
        filteredPool.push(numPool[i]);
    }
}
```

最后从 `filteredPool` 取得随机数：
```
var rand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
```


### 随机洗牌
随机洗牌在JavaScript中是一个典型的算法，创建一个数组，通过洗牌算法，将结果放在一个新数组，然后每次弹出一个数组元素：
```
var numPool = [13, 21, 36, 14, 27, 10];

function shuffle(numPool) {
    for (var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
    return numPool;
}

var randomResult = shuffle(numPool);

while (randomResult.length > 0) {
    console.log(randomResult.pop());
}
```

上面的示例是在创建的数组中做随机排序，然后将数组的每个元素取出来。下面我们来看另一个示例，从一个范围内（比如 `0~1000`）随机取 `12` 数，并将他们创建成一个数组，同时取出数组中最后一个子元素。
```
var numReserve = [];

while (numReserve.length < 12) {
    var randomNumber = Math.ceil(Math.random() * 1000);
    var found = false;
    for (var i = 0; i < numReserve.length; i++) {
        if (numReserve[i] === randomNumber) {
            found = true;
            break;
        }
    }
}
if (!found) {
    numReserve[numReserve.length] = randomNumber;
}
```


### 随机密码
这些方法创建一个随机数字是足够了，但要使用 `Math.random()` 创建一个加密的随机安全密码是足足不够的。如果要实现这样的功能，我们可以使用网络加密的API(**Web Cryptography API**)创建一个 `typedArray`：
```
var cryptoStor = new Uint16Array(8);
```

在这个示例中，创建一个数组，这个数组使用了八个不同的插槽，每个插槽包含一个 `16` 位整数。除了 `Uint16Array` 之外，还有其他的选项：`Int8Array`、`Uint8Array`、`int16Array`、`Int32Array` 和 `Uint32Array`。

然后使用定义好的类型产生的随机数放到数组中：
```
window.crypto.getRandomValues(cryptoStor);
```

在浏览器的控制台中，可以看到运行后的结果：
```
[37155, 40751, 61916, 11457, 54737, 37881, 61272, 49313]
```


### 为什么是一个大约数
JavaScript中有一个非常奇怪的地方，他实际是不存储整数的，它认为数值是一个二进制浮点数。再加上很多分数也无法用有限数量的小数表达出来，这意味着JavaScript可以创建这样的结果，如：
```
.1 + .2; // => 0.30000000000000004
.2 * .1; // => 0.020000000000000004
```

出于实际目的，大多数情况之下这个不精确也并不是十分重要，我们讨论的是一个错误2/1000000000000000000,但它有点令人沮丧。但是它在处理代表货币的数字、百分比或者说文件大小，如此一来就有些怪怪的，而且我们需要的结果就得修复这些——设置小数精度。

许多实际使用当中，会使用四舍五入。比如说，一个用户正在操纵一系列元素，例如我们需要最近的整数的大约值，而不是处理小数。


### 随机小数
在JavaScript中可以使用 `toFixed()` 和 `toPrecision()` 方法对小数进行截取。它们带有一个参数，决定有多少位有效数字或小数位：
- `toFixed()` 提供了小数点后长度；
- `toPrecision()` 提供小数总长度；

注意: `toFixed()` 是计算小数点后的长度，`toPrecision()` 是计算整个数字的长度，而且他们返回的都是字符串。
```
var num=2011.1456;
num.toFixed();       // => 2011,不传参数，默认为0,表示没有小数位
num.toFixed(2);      // => 2011.15,保留2位小数
num.toFixed(3);      // => 2011.146,保留3位小数
num.toFixed(6);      // => 2011.145600,保留6位小数,如果小数位不够，会在后面补0
num.toPrecision();   // => 2011.1456,不传参数，表示数字不变
num.toPrecision(6);  // => 2011.15,保留6位数字
num.toPrecision(7);  // => 2011.146,保留7位数字
num.toPrecision(10); // => 2011.145600,保留6位数字
num.toPrecision(2);  // => 2.0e+3,保留6位数字
```

特别声明：`toFixed()` 和 `toPrecision()` 两个方法返回的是一个字符串，如查你将他们的值做加法运算，会导产生错误，并不会得到你想要的结果：
```
var num = Math.PI;
var randNum = num.toFixed(2);
var rounded = num.toPrecision(4);
typeof(randNum); // => string
typeof(rounded); // => string
var addNum = randNum + rounded;
console.log(addNum); // =>3.143.142
typeof(addNum); // => string
```

如果你想要结果是两个数的相加的得到的值，那得需要使用 `parseFloat()` 处理一下：
```
var num = Math.PI;
var rounded = parseFloat(num.toFixed(2)) + parseFloat(num.toPrecision(4));
console.log(rounded); // => 6.282
toFixed()和toPrecision()方法可以给一个整数添加小数位，这样在处理货币的时候就特别的方便：

var wholeNum = 1
var dollarsCents = wholeNum.toFixed(2);
console.log(dollarsCents); // => 1.00
```


### 避免小数四舍五入造成误差
在下面的示例中，使用 `toFixed()` 和 `toPrecision()` 碰到大于或等于 `5` 的时，不会入值，反而是舍去：
```
var numTest = 1.005;
numTest.toFixed(2); // => 1
```

上述计算的结果应该是 `1.01` 而不是 `1`。避免这种错误在实际中很重要，建议使用Jack L Moore提供的指数数据计算方案，来避免这种错误：
```
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

round(1.005,2); // => 1.01
```


### Epsilon（ε）舍入
在ES6中提供了另一种方法，处理小数四舍五入。Machine epsilon提供了一个合理的方法，比较两个浮点数合理处理这个误差。

在Chrome的控制台中输入：
```
0.1 + 0.2 // => 0.30000000000000004
0.1 + 0.2 === 0.3 // => false
```

通过 `Math.EPSILON` 函数可以做出一个正确的比较：
```
function epsEqu(x, y) {
    return Math.abs(x - y) < Number.EPSILON * Math.max(Math.abs(x), Math.abs(y));
}
```

`Math.EPSILON` 接受两个参数，一个是需要计算的表达式，另一个是需要做为比较的预期结果，然后用这两个值作为比较：
```
epsEqu(0.1 + 0.2, 0.3); // => true
```