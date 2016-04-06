洗牌算法：给数组随机排序
---

洗牌算法是一个比较形象的术语，本质上让一个数组内的元素随机排列。

代码实现如下：

```
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tempArray.shuffle();

// console the result
console.log(tempArray);
```