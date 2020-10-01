# deno restful api

一个基于 **deno + drash + mongodb** 的Restful API示例，本项目仅用于自学deno，不定期更新。。。

## 技术栈

- Deno：Deno是适用于 **JavaScript** 和 **TypeScript** 的简单，现代且安全的运行时，它使用V8并内置于Rust。

- Deno-Drash：基于 **Deno** 的 **REST** 风格 **HTTP** 服务器 _零依赖_ 微框架。

- MongoDB：NoSQL，基于文档的通用分布式数据库。

## 使用环境

运行前请确认已安装Deno:

Shell (Mac, Linux):

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

PowerShell (Windows):

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

[Homebrew](https://formulae.brew.sh/formula/deno) (Mac):

```sh
brew install deno
```

PS：使用vscode的话推荐使用Deno官方插件。

## 运行方法

1. `config.example.ts` 文件更名为 `config.ts`, 并修改mongodb地址为你的数据库地址，mongodb官方提供免费的数据库服务，移步[mongodb官网](https://www.mongodb.com)自行注册

```sh
# config.ts
-  MONGODB_URL: "your mongodb url",
+  MONGODB_URL: ”mongodb+srv://<yourname>:<yourpassword>@dev.syfk0.mongodb.net“ # mongodb官方库提供的地址类似这样，注意不包含”<>“字符
```

2. 启动

```sh
# deno 在运行时需要指定读写等权限，官方宣传这样更安全（emmm。。。）
deno run --allow-net --allow-write --allow-read --allow-plugin --unstable app.ts
```

3. 浏览器打开 http://localhost:3000 .

## API

- http://localhost:3000/user
  - [x] 获取用户列表功能
  - [x] 用户注册功能
  - [x] 用户删除功能
  - [] 用户密码加密处理
  - [] 登录功能

```sh
# GET
curl -X GET http://localhost:3000/user
# POST
curl -X POST -d "username=<替换为名字>&userpassword=<替换为密码>" http://localhost:3000/user
# DELETE
curl -X DELETE -d "userId=<替换为用户ID>" http://localhost:3000/user
```

