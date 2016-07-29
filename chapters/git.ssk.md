设置SSH Key
---

1. 检查是否已经有SSH Key。
```
$cd ~/.ssh
```
如果说没有这个目录，就直接看第三步

2. 备份

3. 生成一个新的SSH。
```
$ssh-keygen -t rsa -C "email"
```

之后直接回车，不用填写东西。之后会让你输入密码。然后就生成一个目录.ssh ，里面有两个文件：id_rsa , id_rsa.pub
　　
4. 把这个SSH放到github上。用公钥。先在GitHub上注册一个用户，然后进入account-setting ，把id_rsa.pub的内容复制进去就可以了。