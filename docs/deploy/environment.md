# Environment

## 系统

简单来说,你的系统最好是linux或者高于2018的windows系统,因为windows系统的兼容性问题可能会导致一些问题

> 实测win server 2012 R2 系统虽然可以运行但是会出现字符编码问题,建议使用linux系统

这里我推荐的便是正常的linux发行版例如Ubuntu或者CentOS,你甚至可以将hippodamia打包成docker镜像但是由于部分原因我暂时没有事件去编写dockerfile,所以这里我推荐你使用正常的linux发行版

## 运行时

hippodamia-server是使用typescrypt开发的应用,但在运行时选择方面,采用了兼容nodejs大部分API的bun,以享受这个新鲜的运行时多带来的诸多优点 ~~(但其实开发中有许多坑,我直接欲哭无泪)~~

- 如果你选择了linux系统,你可能什么都不需要做,因为linux下的编译后文件已经打包了bun的运行时(所以服务端会显得特别大),不过不要担心,hippodamia-server发行版都是压缩包,不会大于40M

- 如果你选择了windows系统,得益于可视化与操作的便利性,你可能会发现双击exe无法运行,并会提示各种稀奇古怪的错误,如果你是个聪明的孩子,你会自己逐步发掘「崩溃」的真相,但我们依然为你准备了可能遇到的错误的通用解决方案:
  - 安装 **VC_redist.x64.exe** 即可,下载地址: https://www.microsoft.com/en-us/download/details.aspx?id=48145

## 数据库

hippodamia-server采用sqlite作为数据的存放数据库,所以你不需要安装任何数据库软件,但是你可以安装一个sqlite的viewer来随时查看数据库内容,例如[**DB Browser for SQLite**](https://sqlitebrowser.org/)