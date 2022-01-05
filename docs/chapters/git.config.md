# 配置git的SSH Key


## 统一账户配置
当我们从 github 或者 gitlab 上 clone 项目或者参与项目时，我们需要证明我们的身份。

一种解决方法是我们在每次访问的时候都带上账户名、密码，另外一种办法是在本地保存一个唯一key，在你的账户中也保存一份该 key，在你访问时带上你的 key 即可。

github、gitlab 就是采用 key 来验证你的身份的，并且利用 RSA 算法来生成这个密钥。

链接方法：

* 账户准备 - 首先你需要在 github 上或者 gitlab 上有一个自己的账户。

* 检查本地是否存在配置 - 打开 `git bash`，输入命令 `ls -al ~/.ssh`，检查是否显示有 `id_rsa.pub` 或者 `id_dsa.pub` 存在，如果存在请直接跳至第4步。

* 在 `git bash` 中键入 `ssh-keygen -t rsa -C "your_email@example.com"`，讲邮箱地址替换成你自己的邮箱地址，一直按回车就可以了。

* 用记事本之类的软件打开 `id_rsa.pub` 文件，并且复制全部内容。 

* 在你的 `gitlab` 或者 `github` 的账户，打开 `SSH key` 标签，然后选择 `Add SSH key` 按钮，将刚刚复制的内容粘贴进去即可，然后点击 `add key`。 


## 多账户配置
本地账户中，包括 github 和 gitlab 等多个账户，在这种情况，就需要配置多账户。

1. 新建账户，并生成 SSH Key：
```
# 新建SSH key：
cd ~/.ssh
# 新建工作的SSH key
ssh-keygen -t rsa -C "mywork@email.com"
# 设置名称为id_rsa_work
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa): id_rsa_work
```

2. 新密匙添加到 SSH agent 中：
```
ssh-add ~/.ssh/id_rsa_work
```

如果出现 Could not open a connection to your authentication agent 的错误，就试着用以下命令：
```
ssh-agent bash
ssh-add ~/.ssh/id_rsa_work
```

3. 修改config文件 将账户以及git服务器与对应的密钥关联。在~/.ssh目录下找到config文件，如果没有就创建：
```
touch config 
```

然后修改如下：
```
# 该文件用于配置私钥对应的服务器
# Default github user
Host github.com
 HostName github.com
 User git
 IdentityFile /Users/guihua.pgh/.ssh/id_rsa_github

# second user
# gitlab
Host gitlab.alibaba-inc.com
 HostName gitlab.alibaba-inc.com
 User git
 IdentityFile /Users/guihua.pgh/.ssh/id_rsa_work

# third user
# coding.net
Host coding.net
 HostName coding.net
 User git
 IdentityFile /Users/guihua.pgh/.ssh/id_rsa_coding
```

4. 给各个账号添加对应的 SSH Key。

5. 测试：
```
ssh -T git@github.com
```

## 账号配置
删除全局用户账户：
```
git config --global --unset user.email
```

在每一个 repo 下单独设置用户账户信息：
```
git config --local user.email '你的github邮箱@mail.com'
```