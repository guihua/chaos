# Gitbook教程

> Modern book format and toolchain using Git and Markdown

这是 GitBook 项目主页上对 GitBook 的定义。

GitBook 是一个命令行工具。通过它，你能够使用 Git 和 Markdown 来编排书本。并且通过工具可以自动生成相应的 HTML、PDF 和 epub 格式的文件。


## 安装
GitBook 是一个基于 [Node](http://nodejs.org/) 开发的命令行工具，因此需要您自行配置 [Node](http://nodejs.org/) 和 [npm](https://www.npmjs.com/package/npm) 环境。

安装好这些环境之后，执行 GitBook 的安装：

    npm install -g gitbook-cli


## 使用
Gitbook 常用命令：

* `gitbook init`: 初始化书籍目录
* `gitbook serve`: 在编写书籍时启动一个服务器，自动编译&更新内容，并在浏览器中预览

### gitbook init
通过终端(PC 下可使用命令提示符)进入到你想要书写内容的目录，然后执行 `gitbook init` 命令，之后目录中会自动生成 `README.md` 和 `SUMMARY.md` 两个文件。

这两个文件在 GitBook 项目中是必须存在的，其中 `README.md` 是对书籍的简单介绍，`SUMMARY.md` 是对书籍目录的描述，并且 GitBook 会通过该文件中的目录描述自动生成对应的目录和文件。

### gitbook serve
书籍目录结构创建完成以后，我们就可以使用 `gitbook serve` 来编译和预览书籍了。

`gitbook serve` 命令实际上会首先调用 `gitbook build` 编译书籍，完成以后会打开一个 web 服务器，监听在本地的 4000 端口。

### 其他命令：
* `gitbook build`: 会生成相应的 HTML 文件供分发
* `gitbook pdf`: 生成 PDF 文件
* `gitbook epub`: 生成 epub 文件
* `gitbook mobi`: 生成 mobi 文件