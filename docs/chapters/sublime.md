# Sublime 教程

## 安装 package control

package control 是 Sublime 的插件管理器。

- 使用 `` Ctrl + ` `` 打开 Sublime Text 控制台

- 粘贴下面的代码，回车执行

```bash
import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

- 等待 Package Control 安装完成。之后使用 `Ctrl + Shift + P` 打开命令板，输入 PC 应出现 Package Control。

## 安装插件

插件安装的命令为：`Package Control:Install Package`。

输入命令后，可以自主选择需要的插件进行安装。

以下为常用项目的开发插件：

- HTML 类
  HTML5

- JS 类
  jQuery，JsFormat，JSHint

- CSS 类
  SCSS，CSS Format，CSScomb

- 工具类
  AutoFileName，ConvertToUTF8，Emmet，Terminal，SFTP，MarkdownPreview，svn

## 其他命令

插件 List：`Package Control:List Packages`

插件卸载：`Package Control:Remove Package`

其他诸如升级等命令，请自行参考 [官网](http://www.sublimetext.com/3) 相关资料。
