Mac 下用 brew 安装 mongodb
---

使用 brew 安装 mongodb：
```
brew install mongodb
```
   
安装成功后，会显示安装目录：/usr/local/Cellar/mongodb/3.2.7。

第一次启动服务端，需要做一些准备工作：
1.默认mongodb 数据文件是放到根目录 data/db 文件夹下，若不存在该文件夹，请创建：
```
mkdir -p /data/db
```

2.如果你当前的环境变量还没有加入 mongod  ,手动添加的环境变量中.
```
nano ~/.bash_profile
```

```
//添加mongodb安装目录到环境变量中
export PATH=/usr/local/Cellar/mongodb/3.2.7/bin:${PATH}
```

3.如果让环境变量马上生效? 执行下面的shell
```
source ~/.bash_profile
```

4.修改mongodb配置文件,配置文件默认在 /usr/local/etc 下的 mongod.conf
```
# Store data in /usr/local/var/mongodb instead of the default /data/db
dbpath = /data/db

# Append logs to /usr/local/var/log/mongodb/mongo.log
logpath = /usr/local/var/log/mongodb/mongo.log
logappend = true

# Only accept local connections
bind_ip = 127.0.0.1
```
第二行修改成数据库文件写入目录地址,如果准备连接非本地环境的mongodb数据库时,bind_ip = 0.0.0.0 即可.

5.尝试启动 mongod
```
cd /data/db
mongod
```
若服务器没有启动，很可能是 /data/db 文件没有写入权限。

6.给 /data/db 文件夹赋权限
```
sudo chown `id -u` /data/db
```

7.启动 mongodb 客户端
```
cd /usr/local/etc
mongo
```