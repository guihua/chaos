nvm管理node版本
---

### 安装nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```

完成后，nvm安装在 `~/.nvm` 下。


### 配置环境
在 `~/.bash_profile` 中配置nvm路径。
```
# 编辑~/.bash_profile文件
nano ~/.bash_profile
# 添加nvm路径
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

完成编辑后，启动配置生效：
```
source ~/.bash_profile
```

输入 `nvm` 命令，即可看到一堆相关信息：
```
Node Version Manager

Note: <version> refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

Usage:
  nvm help                                  Show this message
  nvm --version                             Print out the latest released version of nvm
  nvm install [-s] <version>                Download and install a <version>, [-s] from source. Uses .nvmrc if available
    --reinstall-packages-from=<version>     When installing, reinstall packages installed in <node|iojs|node version number>
  nvm uninstall <version>                   Uninstall a version
  nvm use [--silent] <version>              Modify PATH to use <version>. Uses .nvmrc if available
  nvm exec [--silent] <version> [<command>] Run <command> on <version>. Uses .nvmrc if available
  nvm run [--silent] <version> [<args>]     Run `node` on <version> with <args> as arguments. Uses .nvmrc if available
  nvm current                               Display currently activated version
  nvm ls                                    List installed versions
  nvm ls <version>                          List versions matching a given description
  nvm ls-remote                             List remote versions available for install
  nvm version <version>                     Resolve the given description to a single local version
  nvm version-remote <version>              Resolve the given description to a single remote version
  nvm deactivate                            Undo effects of `nvm` on current shell
  nvm alias [<pattern>]                     Show all aliases beginning with <pattern>
  nvm alias <name> <version>                Set an alias named <name> pointing to <version>
  nvm unalias <name>                        Deletes the alias named <name>
  nvm reinstall-packages <version>          Reinstall global `npm` packages contained in <version> to current version
  nvm unload                                Unload `nvm` from shell
  nvm which [<version>]                     Display path to installed node version. Uses .nvmrc if available

Example:
  nvm install v0.10.32                  Install a specific version number
  nvm use 0.10                          Use the latest available 0.10.x release
  nvm run 0.10.32 app.js                Run app.js using node v0.10.32
  nvm exec 0.10.32 node app.js          Run `node app.js` with the PATH pointing to node v0.10.32
  nvm alias default 0.10.32             Set default node version on a shell

Note:
  to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)
```


### 使用
查看线上的node版本：
```
nvm ls-remote
```

选择需要的版本进行安装。根据需要，本地安装的node版本是4.5.0：
```
nvm install 4.5
```

安装成功后，使用该版本：
```
nvm use 4.5
```

nvm安装node后，会将各个版本的node安装在 `~/.nvm/versions/node` 下：
```
# 查看安装的node版本
ls -a ~/.nvm/versions/node
```

或者通过nvm查看：
```
# 查看本地node版本
nvm ls
```

我本地安装了两个node版本：
```
v4.5.0
v7.1.0
```

其中，nvm会通过颜色标识本地使用的node版本，或者，通过命令查看本地当前使用的版本：
```
nvm current
```

使用 `nvm use` 命令只会在当前bash里生效，重新打开一个bash你会发现$PATH的值已经不包含刚才的node目录了，此时，我们就需要制定本地的默认node版本：
```
nvm alias default <version>
```

我本地指定4.5为默认版本：
```
nvm alias default 4.5
```

这样，就实现了本地nvm管理node环境。