# Deno 环境下开发oak-orm-mysql-reactjs全栈应用

## 什么是Deno？

Deno 就像 Node，但是在很多方面都得到了深入的改善。先从 Deno 功能列表开始：

### 基于 JavaScript 语言的现代功能

- 全面的标准库
- 包括 TypeScript 支持
- 包含 ES 模块
- 没有包管理器
- 有一流的 await
- 内置测试功能
- 与浏览器保持兼容，内置 fetch 和全局 window 对象

### 安装 Deno

Shell (Mac, Linux):

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

PowerShell (Windows):

```bash
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

Homebrew (Mac):

```bash
brew install deno
```

Chocolatey (Windows):

```
choco install deno
```

### 命令行

一旦完成，你将可以访问 deno 命令。用 deno --help 获得帮助：

```bash

deno --help

deno 1.0.5

A secure JavaScript and TypeScript runtime

Docs: https://deno.land/std/manual.md
Modules: https://deno.land/std/ https://deno.land/x/
Bugs: https://github.com/denoland/deno/issues

To start the REPL, supply no arguments:
  deno

To execute a script:
  deno run https://deno.land/std/examples/welcome.ts
  deno https://deno.land/std/examples/welcome.ts

To evaluate code in the shell:
  deno eval "console.log(30933 + 404)"

Run 'deno help run' for 'run'-specific flags.

USAGE:
    deno [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -h, --help
            Prints help information

    -L, --log-level <log-level>
            Set log level [possible values: debug, info]

    -q, --quiet
            Suppress diagnostic output
            By default, subcommands print human-readable diagnostic messages to stderr.
            If the flag is set, restrict these messages to errors.
    -V, --version
            Prints version information


SUBCOMMANDS:
    bundle         Bundle module and dependencies into single file
    cache          Cache the dependencies
    completions    Generate shell completions
    doc            Show documentation for a module
    eval           Eval script
    fmt            Format source files
    help           Prints this message or the help of the given subcommand(s)
    info           Show info about cache or info related to source file
    install        Install script as an executable
    repl           Read Eval Print Loop
    run            Run a program given a filename or url to the module
    test           Run tests
    types          Print runtime TypeScript declarations
    upgrade        Upgrade deno executable to newest version

ENVIRONMENT VARIABLES:
    DENO_DIR             Set deno's base directory (defaults to $HOME/.deno)
    DENO_INSTALL_ROOT    Set deno install's output directory
                         (defaults to $HOME/.deno/bin)
    NO_COLOR             Set to disable color
    HTTP_PROXY           Proxy address for HTTP requests
                         (module downloads, fetch)
    HTTPS_PROXY          Same but for HTTPS
```

## 命令行选项

```bash
--allow-env 允许环境访问
--allow-hrtime 允许高精度的时间测量
--allow-net = 允许网络访问
--allow-plugin 允许加载插件
--allow-read = 允许文件系统读访问
--allow-run 允许运行子进程
--allow-write =允许文件系统写访问
--allow-all 允许所有权限（与 -A 相同）
```

## Deno 代码示例

Deno网站例子：https://deno.land/std/examples/。

## 标准库

- archive： tar 存档工具
- async async utilties
- async：异步工具
- bytes：用来操作字节片段的辅助
- datetime： 日期/时间解析
- encoding ：各种格式的编码/解码功能
- flags： 解析命令行标志
- fmt： 格式化和打印
- fs：文件系统 API
- hash：加密库
- http： HTTP服务器
- io： I/O 库
- log： 日志实用工具
- mime：支持 multipart 数据
- node： Node.js 兼容性层
- path：路径操作
- ws： websockets

## 一个简单的例子

用 Oak 构建 `REST API`。 Oak 受到了流行的 Node.js 中间件 Koa 的启发。

构建的API非常简单。我们的服务器将会在内存中存储带有名称 密码 电子邮件的数据列表。

- 添加新数据
- 列出数据
- 获取特定数据的详细信息
- 从列表中删除一条数据
- 更新数据的年龄

### 创建一个 app.ts 文件

首先从 Oak 导入 `Application` 和 `Router` 对象：

然后得到环境变量 `PORT` 和 `HOST`：

### 接下来创建 Oak 应用程序并启动它：

然后 Deno 将会下载依赖项：

### 在文件开始，我们定义一个接口

现在开始实现 API。

### 创建路由器

### 添加控制器，api调用功能：

### 从 GET/games 开始，它返回所有的列表：

### 通过名称检索一个数据的方法：

### 添加新数据方法：

使用 const body = await request.body() 来获取 body 的内容，因为 name 和 age 的值是作为 JSON 传递的。

### 更新的方法：

### 删除的方法：

### Mysql和ORM 支持

### 引入密码hash验证

### 引入 jwt 验证

### Reactjs支持

## 更多资源

Deno 官方网站是 https://deno.land

可在 https://doc.deno.land 和 https://deno.land/typedoc 上得到 API 文档。

awesome-deno https://github.com/denolib/awesome-deno