Mac OS下升级SVN
---

升级步骤如下：
1. 下载最新[svn](http://www.wandisco.com/subversion/download#osx)

2. 按照步骤按照svn

3. 添加svn地址到PATH变量中：
```
(1) cd ~
(2) touch .bash_profile // 创建.bash_profile文件，如果有则略过
(3) open -e bash_profile
(4) 在文件中添加 export PATH=/opt/subversion/bin:$PATH
(5) 保存之后关闭
(6) source .bash_profile（更新bash的环境变量）
```

4. 运行svn --version查看是否更新成功