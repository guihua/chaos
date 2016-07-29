JavaScript题目
---

### 题目1
```
(function() {
    return typeof arguments;
})();
```

输出：
```
"object"
```

`arguments` 是对象,伪数组有两件事要注意这里：
参数不是数组，它是一个数组一样的物体,你可以使用方括号和整数索引的元素。

[typeof对类型的判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)。


### 题目2
```
var f = function g() {
    return 23;
};
typeof g();
```

输出：
```
g is not defined(…)
```

`function g(){ return 23; }` 是函数表达式，事实上只是一个名字，不是一个函数声明
函数实际上是绑定到变量f，不是g。

指定的标识符在函数表达式虽然有其用途：堆栈跟踪是清晰而不是充斥着无名的函数，你可以有一个匿名函数递归调用本身不使用argument.callee。


### 题目3
```
(function(x) {
    delete x;
    return x;
})(1);
```

输出：
```
1
```

JavaScript 中参数不可删除。

[Understanding Delete](http://perfectionkills.com/understanding-delete/)。


### 题目4
```
var y = 1,
    x = y = typeof x;
x;
```

输出：
```
"undefined"
```

`var a, b;` 展开就是 `var a; var b;`；`A = B = C;` 相当于 `B = C = B;`。

以上代码重写：
```
var y = 1;
y = typeof x;
var x = y;
x;
```

当执行 `y = typeof x` 时，x 还没有被定义，所以y成为字符串 `undefined`，然后被分配到x。


### 题目5
```
(function f(f) {
    return typeof f();
})(function() {
    return 1;
});
```

输出：
```
"number"
```

为了便于理解我们继续分解:
 
第一部分
```
var baz = function() {
    return 1;
};
```
 
第二部分
```
(function f(f) {
    return typeof f();
})(baz);
```
 
在这里，函数f接受一个参数是另一个函数,f函数内部执行这个实参函数并且返回类型。

无论是从调用该函数返回，即使参数名称f与函数名冲突，函数接受本身作为自己的参数，然后调用，此时就看谁更具有更高的优先级了，显然，参数的优先级更高，所以实际执行的是 `return typeof 1`。


### 题目6
```
var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
};

(function() {
    return typeof arguments[0]();
})(foo.bar);
```

输出：
```
"undefined"
```

为什么是 `undefined`？我们必须要知道this运算符是怎么工作的。
 
JS语言精粹总结的很精炼：
1 纯粹的函数调用
2 作为对象方法的调用
3 作为构造函数调用
4 apply调用
 
我们看看题目是属于那种环境？

在 `arguments[0]()` 中执行了一个方法，`arguments[0]` 就是 `foo.bar` 方法。注意：这在 `foo.bar` 中的 `this` 是没有绑定到 `foo`。
 
虽然 `foo.bar` 传递给了函数，但是真正执行的时候，函数 `bar` 的上下文环境是 `arguments`，并不是 `foo`。

`arguemnts[0]` 可以理解为 `arguments.0`（不过写代码就不要这样了，语法会错误的），所以这样看来，上下文环境是 `arguemnts` 就没问题了，所以在执行 `baz` 的时候自然 `this` 就是 `window` 了，`window` 上没有 `baz` 属性，返回的就是 `undefined`，`typeof` 调用的话就转换成 `undefined` 了。


### 题目7
```
var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
}
typeof(f = foo.bar)();
```

输出：
```
"undefined"
```

上面的函数可以改写为：
```
var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
}

f = foo.bar;

typeof f();
```

把 `foo.bar` 存储给 `f` 然后调用，所以 `this` 在 `foo.bar` 引用的是全局对象，所以就没有 `baz` 属性了。

换句话说，`foo.bar` 执行的时候上下文是 `foo`，但是当把 `foo.bar` 赋值给 `f` 的时候，`f` 的上下文环境是 `window`，是没有 `baz` 的，所以是 `undefined`。


### 题目8
```
var f = (function f() {
    return "1";
}, function g() {
    return 2;
})();

typeof f;
```

输出：
```
"number"
```

逗号操作符的使用可以很混淆，但这段说明它的行为：
```
var x = (1, 2, 3); 
x;
```
 
x的值是3，这表明，当你有一系列的组合在一起，并由逗号分隔的表达式，它们从左到右进行计算，但只有最后一个表达式的结果保存。由于同样的原因，这个问题可以改写为减少混乱：
```
var f = (function g() {
    return 2;
})();

typeof f;
```


### 题目9
```
var x = 1;

if (function f() {}) {
    x += typeof f;
}

x;
```

输出：
```
"1function"
```

函数声明的实际规则如下：

函数声明只能出现在程序或函数体内。从语法上讲，它们不能出现在Block（块）（{ ... }）中，例如不能出现在 if、while 或 for 语句中。因为 Block（块） 中只能包含Statement语句， 而不能包含函数声明这样的源元素。另一方面，仔细看一看规则也会发现，唯一可能让表达式出现在Block（块）中情形，就是让它作为表达式语句的一部分。但是，规范明确规定了表达式语句不能以关键字function开头。而这实际上就是说，函数表达式同样也不能出现在Statement语句或Block（块）中（因为Block（块）就是由Statement语句构成的）。

f在这了没有被定义,所以typeof f 是字符串"undefined" ，字符与数字相加结果也是一个字符串,
所以最后的x就是"1undefined"了。


### 题目10
```
(function f() {
    function f() {
        return 1;
    }
    return f();

    function f() {
        return 2;
    }
})();
```

输出：
```
2
```

简单的来说在执行return之前，函数声明会在任何表达式被解析和求值之前先被解析和求值，
即使你的声明在代码的最后一行，它也会在同作用域内第一个表达式之前被解析/求值。

参考如下例子，函数fn是在alert之后声明的，但是在alert执行的时候，fn已经有定义了：
``` 
alert(fn());

function fn() {
    return 'Hello world!';
}
```
 
题目中函数提升了两次，第二次把第一次覆盖了，所以 return 后面的 f 是 return 语句的下一条语句声明的函数 f 。
注意自执行函数 `(function f (){})();` 中的 f 并没有函数提升效果，它是表达式


### 题目11
```
function f() {
    return f;
}
new f() instanceof f;
```

输出：
```
false
```

怎样去理解 `new f()`？

首先这个操作会创建一个新对象并调用构造函数函数这一新的对象作为它的当前上下文对象。

`f()` 返回了 `return f;`。
 
函数的返回值覆盖了这个实例，这个new 就形同虚设。

值得注意的是 instanceof  检测的是原型


### 题目12
```
var x = [typeof x, typeof y][1];
typeof typeof x;
```

输出：
```
"string"
```

这题目比较简单，注意下返回类型即可：
```
x = [,][1];
```

即 x = "string"。


### 题目13
```
function(foo) {
    return typeof foo.bar;
})({
    foo: {
        bar: 1
    }
});
```

输出：
```
"undefined"
```

先分解一下：
```
var baz = {
    foo: {
        bar: 1
    }
};

(function(foo) {
    return typeof foo.bar;
})(baz);
```
 
去掉函数关联：
```
var baz = {
    foo: {
        bar: 1
    }
};
var foo = baz;
typeof foo.bar;
```
 
最后，通过替代我们除去中间变量foo：
```
var baz = {
    foo: {
        bar: 1
    }
};
typeof baz.bar;
```
 
所以现在就很清晰了，属性中没有定义baz；它被定义为baz.foo上了，所以结果是：”undefined"。


### 题目13
```
with(function(x, undefined) {}) length;
```

输出：
```
2
```

with用得很少，with语句就是用于暂修改作用域链的或者通常用来缩短特定情形下必须写的代码量。
 
使用with语句的JavaScript代码很难优化，因此它的运算速度比不使用with语句的等价代码要慢得多。而且，在with语句中的函数定义和变量初始化可能会产生令人惊讶的、相抵触的行为，因此我们避免使用with语句。
 
with的用法是这样的：

with(object) {}，在大括号里面，可以引用object的属性而不用使用object.attr这种形式。

这道题里面，with接受了一个对象，只不过这个对象是函数，函数有length属性，代表形参的个数，所以上面返回的值是2。