# Package

由玩家编写的内容往往被称为一个组件包,包含了:
- 组件(赛场/选手处理器)
- 组件内容(例如随机事件组件的事件内容)
- 各类效果

## manifest.json

组件包的配置文件,包含了组件包的基本信息,例如名称、版本、作者、描述、依赖等。

```json
{
  "name": "MyPackage",
  "version": "1.0.0",
  "author": "Heer",
  "description": "This is a package for my components.",
  "dependencies": {
    "@hippodamia/core": "^1.0.3"
  }
}
```
`dependencies.@hippodamia/core`决定了core的版本,在小版本即第二位版本号不变的情况下,允许向下兼容

