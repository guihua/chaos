数组操作
---
数组是JavaScript中非常重要的一个对象，数组的增、删、改、查操作也是我们日常开发中最常用的操作。


## 增加数组项
设定一个数组：

```
var myArray = [];
```

这是一个空数组，其 `length` 的值为 `0`。

给数组增加数组项，最简单的方法是通过索引值方式：

```
var myArray = [];

myArray[0] = 'a';
myArray[1] = 'b';
myArray[2] = 1;
myArray[3] = 2;

console.log(myArray); // ['a', 'b', 1, 2]
console.log(myArray.length); // 4
```

其次，可以通过为数组的 `length` 赋值给数组增加数组项，这种方法给数组添加的数组项都是 `undefined`:

```
var myArray = [];

myArray[0] = 'a'; // 给数组arr添加一个`a`数组项
myArray.length = 4; // 改变数组的`length`值为`4`

console.log(myArray); // ["a", undefined × 3]
```

以上两种方法，在实际操作中，可以用，但是不推荐。

下面介绍数组本身提供的原生方法为数组添加数组项。

### push()
使用 `push()` 方法可以给数组末尾添加一个或多个数组项。

```
var myArray = [1, 2];

myArray.push('a', 'b');

console.log(myArray); // [1, 2, 'a', 'b']
```

### unshift()
使用 `unshift()` 方法可以在数组的前面添加一个或多个数组项。

```
var myArray = [1, 2];

myArray.unshift('a', 'b');

console.log(myArray); // ['a', 'b', 1, 2]
```

> `push()` 方法和 `unshift()` 方法的区别很明显，前者是在数组的末尾添加数组项，后者是在头部添加数组项，在实际使用中，要严格区分。

除此以外，`splice()` 方法也可以添加数组项：

```
var myArray = ['a', 'b', 'c', 1, 2];
myArray.splice(2, 0, 'd', 'c', 'e');

console.log(myArray); // ["a", "b", "d", "c", "e", "c", 1, 2]
```


## 删除数组项
删除数组项常用的方法有pop()和shift()两种方法。

### pop()
`pop()` 方法可以从数组的末尾删除一个数组项。

```
var myArray = ['a', 'b', 1, 2];

myArray.pop();

console.log(myArray); // ['a', 'b', 1]
```

### shift()
`shift()` 方法可以删除数组的第一项。

```
var myArray = ['a', 'b', 1, 2];

myArray.shift();

console.log(myArray); // ['b', 1, 2]
```

### slice()
`slice()` 方法可以给一个数组中删除多个数组项，它不会影响原数组，只会在原数组基础上创一个数组副本。

```
var myArray = ['a', 'b', 1, 2, 3, 4];
var arr2 = myArray.slice(2);
var arr3 = arr2.slice(2);

console.log(myArray); // ['a', 'b', 1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
console.log(arr3); // [3, 4]
```

### splice()
`splice()` 方法删除数组项。

```
var myArray = ['a', 'b', 1, 2, 3, 4];
var arr2 = myArray.splice(2, 2);

console.log(myArray); // ['a', 'b', 1, 2, 3, 4]
console.log(arr2); // [1, 2]
```


## 改变数组
数组中 `splice()` 方法是数组中一个强大的方法，其除了可以给数组添加数组项、删除数组项之外，还可以改变一个数组。

```
var myArray = [1, 2, 3, 4, 5, 6];
var arr2 = arr.splice(2, 3, 'a', 'b', 'c');

console.log(myArray); // [1, 2, "a", "b", "c", 6]
console.log(arr2); // [3, 4, 5]
```


## 数组查询
数组查询使用 `slice()` 方法。

```
var myArray = [1, 2, 3, 4, 5, 6];
var arr2 = myArray.slice(-3);

console.log(myArray); // [1, 2, 3, 4, 5, 6]
console.log(arr2); // [4, 5, 6]
```