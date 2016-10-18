React.Children
---

React.Children 为处理 this.props.children 这个封闭的数据结构提供了有用的工具。

### React.Children.map
```
object React.Children.map(object children, function fn [, object context])
```

在每一个直接子级（包含在 children 参数中的）上调用 fn 函数，此函数中的 this 指向 上下文。如果 children 是一个内嵌的对象或者数组，它将被遍历：不会传入容器对象到 fn 中。如果 children 参数是 null 或者 undefined，那么返回 null 或者 undefined 而不是一个空对象。


### React.Children.forEach
```
React.Children.forEach(object children, function fn [, object context])
```

类似于 React.Children.map()，但是不返回对象。


### React.Children.count
```
number React.Children.count(object children)
```

返回 children 当中的组件总数，和传递给 map 或者 forEach 的回调函数的调用次数一致。


### React.Children.only
```
object React.Children.only(object children)
```
返回 children 中仅有的子级，否则抛出异常。