---
outline: [2,4]
---
# Settings

hippodammia-server 使用各种配置文件来运行

> - 多个配置文件可以使用 settings.xxx.json 来区分
> - 在启动时，可以通过命令尾部附带 xxx 参数来指定配置文件
> - 例如：`bun run ./bundle.js ws` (单js文件模式)
> - 例如：`./hippodamia-server.exe ws` (win:powershell 下)
> - 例如：`./hippodamia-server ws` (linux:bash 下)

## 启动时选择

得益于多个node的CLI工具库, hippodamia-server 可以通过在终端中可视化的列表来选择配置文件


## 配置项参考

### `mode` 服务模式

模式决定了 hippodamia-server 的对接模式，目前仅支持一下两种

- `onebot`
- `test`

#### `onebot` 模式

使用 onebot 模式可以对接任何提供 onebot 服务的协议端
例如:

- napcat
- llonebot
- go-cqhttp

同时你需要提供以下参数

`mode` 为 `http`,`ws`,`ws-reverse`

- `http` 方式

  - `port` 端口号,这是用于开启 HTTP POST 的监听服务,在 onebot 上报初需要填写`http://127.0.0.1:端口号/onebot`
  - `api` 这是 onebot 协议端的 API 地址,用于发送 api 请求
    当使用
  - `secret` 密钥

  ```json
    "onebot": {
        "mode": "http",
        "port": 11451,
        "api": "http://127.0.0.1:3000/"
    }
  ```

- `ws` 模式

  - `url` 连接正向 ws 的地址
  - `secret` 密钥

  ```json
    "onebot": {
        "bot": "1919810",
        "mode": "ws",
        "url": "ws://127.0.0.1:3389",
    }
  ```

- `ws-reverse` 方式

#### `kook` 模式

#### `test` 模式


### `logging` 日志

日志决定了 hippodamia-server 的日志输出模式

#### `level` 日志级别

```json
"level": "debug"
```

- `debug` 调试模式
- `info` 信息模式
- `warn` 警告模式
- `error` 错误模式
- `fatal` 严重错误模式

### `api`

api 配置项决定了 hippodamia-server 启动的 API 接口

> 也就是后期用于后台操作赛马 API 的接口

#### `port` 端口号

## Examples

### 使用onebot正向ws连接
