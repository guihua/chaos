# HTML DOM

HTML DOM 定义了访问和操作 HTML 文档的标准。

## DOM

DOM 是 Document Object Model（文档对象模型）的缩写，是 W3C（万维网联盟）的标准。

DOM 定义了访问 HTML 和 XML 文档的标准：
“W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。”

W3C DOM 标准被分为 3 个不同的部分：

- 核心 DOM - 针对任何结构化文档的标准模型
- XML DOM - 针对 XML 文档的标准模型
- HTML DOM - 针对 HTML 文档的标准模型

## XML DOM 是什么

XML DOM 定义了所有 XML 元素的对象和属性，以及访问它们的方法。

## HTML DOM 是什么

HTML DOM 是：

- HTML 的标准对象模型
- HTML 的标准编程接口
- W3C 标准

HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。

在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。

### DOM 节点

根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

### HTML DOM 节点树

HTML DOM 将 HTML 文档视作树结构。这种结构被称为节点树：
![DOM](./images/dom/dom1.gif)

通过 HTML DOM，树中的所有节点均可通过 JavaScript 进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。

### 节点父、子和同胞

节点树中的节点彼此拥有层级关系。

父（parent）、子（child）和同胞（sibling）等术语用于描述这些关系。父节点拥有子节点，同级的子节点被称为同胞（兄弟或姐妹）。

- 在节点树中，顶端节点被称为根（root）
- 每个节点都有父节点、除了根（它没有父节点）
- 一个节点可拥有任意数量的子
- 同胞是拥有相同父节点的节点

下面的图片展示了节点树的一部分，以及节点之间的关系：
![DOM](./images/dom/dom2.gif)

## HTML DOM 对象 - 方法

常用的 DOM 方法：

| 方法                     | 描述                                                            |
| ------------------------ | --------------------------------------------------------------- |
| getElementById()         | 返回带有指定 ID 的元素。                                        |
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。                      |
| appendChild()            | 把新的子节点添加到指定节点。                                    |
| removeChild()            | 删除子节点。                                                    |
| replaceChild()           | 替换子节点。                                                    |
| insertBefore()           | 在指定的子节点前面插入新的子节点。                              |
| createAttribute()        | 创建属性节点。                                                  |
| createElement()          | 创建元素节点。                                                  |
| createTextNode()         | 创建文本节点。                                                  |
| getAttribute()           | 返回指定的属性值。                                              |
| setAttribute()           | 把指定属性设置或修改为指定的值。                                |

## HTML DOM 对象 - 属性

### innerHTML 属性

获取元素内容的最简单方法是使用 innerHTML 属性。

```html
<script>
  var txt = document.getElementById("intro").innerHTML;
  document.write(txt);
</script>
```

innerHTML 属性可用于获取或改变任意 HTML 元素，包括 `<html>` 和 `<body>`。

### nodeName 属性

nodeName 属性规定节点的名称。

- nodeName 是只读的
- 元素节点的 nodeName 与标签名相同
- 属性节点的 nodeName 与属性名相同
- 文本节点的 nodeName 始终是 #text
- 文档节点的 nodeName 始终是 #document

### nodeValue 属性

nodeValue 属性规定节点的值。

- 元素节点的 nodeValue 是 undefined 或 null
- 文本节点的 nodeValue 是文本本身
- 属性节点的 nodeValue 是属性值

### nodeType 属性

nodeType 属性返回节点的类型。nodeType 是只读的。

比较重要的节点类型有：

| 元素类型 | NodeType |
| -------- | -------- |
| 元素     | 1        |
| 属性     | 2        |
| 文本     | 3        |
| 注释     | 8        |
| 文档     | 9        |

## HTML DOM - 修改

修改 HTML = 改变元素、属性、样式和事件。

修改 HTML DOM 意味着许多不同的方面：

- 改变 HTML 内容
- 改变 CSS 样式
- 改变 HTML 属性
- 创建新的 HTML 元素
- 删除已有的 HTML 元素
- 改变事件（处理程序）

### 创建 HTML 内容

改变元素内容的最简答的方法是使用 innerHTML 属性。

```html
<script>
  document.getElementById("p1").innerHTML = "New text!";
</script>
```

### 改变 HTML 样式

通过 HTML DOM，您能够访问 HTML 元素的样式对象。

```html
<script>
  document.getElementById("p2").style.color = "blue";
</script>
```

### 创建新的 HTML 元素

如需向 HTML DOM 添加新元素，您首先必须创建该元素（元素节点），然后把它追加到已有的元素上。

```html
<script>
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);

  var element = document.getElementById("d1");
  element.appendChild(para);
</script>
```

### 创建新的 HTML 元素 - appendChild()

如需向 HTML DOM 添加新元素，您首先必须创建该元素，然后把它追加到已有的元素上。

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);

  document.getElementById("div1").appendChild(para);
</script>
```

### 创建新的 HTML 元素 - insertBefore()

将元素作为第一个元素添加。

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);

  var element = document.getElementById("div1");
  var child = document.getElementById("p1");
  element.insertBefore(para, child);
</script>
```

### 删除已有的 HTML 元素

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
<script>
  var parent = document.getElementById("div1");
  var child = document.getElementById("p1");
  parent.removeChild(child);
</script>
```

DOM 需要了解您需要删除的元素，以及它的父元素。

这里提供一个常用的解决方法：找到您需要删除的子元素，然后使用 parentNode 属性来查找其父元素：

```html
var child = document.getElementById("p1"); child.parentNode.removeChild(child);
```

### 替换 HTML 元素

如需替换 HTML DOM 中的元素，请使用 replaceChild() 方法：

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);

  var parent = document.getElementById("div1");
  var child = document.getElementById("p1");
  parent.replaceChild(para, child);
</script>
```

### 使用事件

HTML DOM 允许您在事件发生时执行代码。

当 HTML 元素”有事情发生“时，浏览器就会生成事件：

- 在元素上点击
- 加载页面
- 改变输入字段

```html
<script>
  function ChangeBackground() {
    document.body.style.backgroundColor = "lavender";
  }
</script>

<input
  type="button"
  onclick="ChangeBackground()"
  value="Change background color"
/>
```

事件列表：

| 属性        | 此事件发生在何时...                  |
| ----------- | ------------------------------------ |
| onabort     | 图像的加载被中断。                   |
| onblur      | 元素失去焦点。                       |
| onchange    | 域的内容被改变。                     |
| onclick     | 当用户点击某个对象时调用的事件句柄。 |
| ondblclick  | 当用户双击某个对象时调用的事件句柄。 |
| onerror     | 在加载文档或图像时发生错误。         |
| onfocus     | 元素获得焦点。                       |
| onkeydown   | 某个键盘按键被按下。                 |
| onkeypress  | 某个键盘按键被按下并松开。           |
| onkeyup     | 某个键盘按键被松开。                 |
| onload      | 一张页面或一幅图像完成加载。         |
| onmousedown | 鼠标按钮被按下。                     |
| onmousemove | 鼠标被移动。                         |
| onmouseout  | 鼠标从某元素移开。                   |
| onmouseover | 鼠标移到某元素之上。                 |
| onmouseup   | 鼠标按键被松开。                     |
| onreset     | 重置按钮被点击。                     |
| onresize    | 窗口或框架被重新调整大小。           |
| onselect    | 文本被选中。                         |
| onsubmit    | 确认按钮被点击。                     |
| onunload    | 用户退出页面。                       |

## HTML DOM - 导航

### HTML DOM 节点列表

getElementsByTagName() 方法返回节点列表，节点列表是一个节点数组，可以通过下标号访问这些节点。

```html
var x = document.getElementsByTagName("p"); var y = x[1];
```

> 下标号从 0 开始。

### HTML DOM 节点列表长度

length 属性定义节点列表中节点的数量。

下面示例获取所有 `<p>` 元素节点，输出每个 `<p>` 元素的文本节点的值。

```html
x = document.getElementsByTagName("p"); for (i = 0; i < x.length; i ++) {
document.write(x[i].innerHTML); document.write("<br />"); }
```

### 导航节点关系

- 首个 `<p>` 元素是 `<body>` 元素的首个子元素（firstChild）
- `<div>` 元素是 `<body>` 元素的最后一个子元素（lastChild）
- `<body>` 元素是首个 `<p>` 元素和 `<div>` 元素的父节点（parentNode）

### DOM 根节点

这里有两个特殊的属性，可以访问全部文档：

- document.documentElement - 全部文档
- document.body - 文档的主体

### childNodes 和 nodeValue

除了 innerHTML 属性，您也可以使用 childNodes 和 nodeValue 属性来获取元素的内容。

```html
<p id="intro">Hello World!</p>

<script>
  var txt = document.getElementById("intro").childNodes[0].nodeValue;
  document.write(txt);
</script>
```
