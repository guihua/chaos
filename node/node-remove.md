卸载Node
---

手动卸载：
```
sudo rm -rf ~/.npm
sudo rm -rf ~/node_modules
sudo rm -rf ~/.node-gyp
sudo rm /usr/local/bin/node
sudo rm /usr/local/bin/npm
sudo rm /usr/local/lib/dtrace/node.d
```

执行完毕后，执行 `node` 和 `npm` 命令后提示无效。