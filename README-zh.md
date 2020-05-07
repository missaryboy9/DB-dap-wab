# vue-admin-template

## standBy Z

> 这是一个 vue admin 管理后台。它包含了 Element UI & axios & iconfont & permission control & vuex & vue-router & crypyo & gojs & echarts

目前版本为 `v4.0+` 基于 `vue-cli` 进行构建，它不依赖 `vue-cli`。

## PROBLEM

node-sass 安装不上的问题

1:https://github.com/lmk123/blog/issues/28

2:在 Windows 上？是否要编译本机节点模块？使用此一线安装构建工具：

npm install --global --production windows-build-tools

安装后，npm 将自动执行此模块，该模块将下载并安装 Microsoft 免费提供的 Visual C ++ Build Tools 2017。需要这些工具来编译流行的本机模块。它还将安装 Python 2.7，适当配置您的计算机和 npm。

### OwnMethod

## 请求使用:

统一方法输出口
{ ajax, get, download, postJson, post, del, putJson, put }
请求统一封装在 src/commom/axios 中
使用时请参考 src/common/api dict 中的用法
不同页面的请求分开书写
请求封装有加密参数需要和后台配合使用

## vue happy scroll

GETADRESS : https://github.com/tangdaohai/vue-happy-scroll

保留原生滚动条功能
支持动态设置滚动条颜色
支持设置滚动条的位置。左右(竖向滚动条)、上下(横向滚动)方向
支持隐藏滚动条
支持动态设定滚动位置，并支持 top 与 left 值同步
支持动态数据 resize，滚动条自动隐藏与显示
支持设置 resize 滚动条变化规则(e. 在 chart 应用中，来新消息时，滚动条始终在最底部)

vue-happy-scroll 是一款基于 vue2.0 的滚动条插件。

此插件致力解决原生滚动条在不同系统、不同浏览器中的丑陋表现，在保证原生滚动条功能可用的基础上实现了更丰富的功能、保证在所支持的浏览器下展现出风格一致、交互体验一致的滚动条。

它可以让你无需关心滚动条的兼容性问题，无需关心内容区域的宽高，当设定 resize 属性后，可以根据内容大小自动显示或隐藏滚动条。 这里有对各种丰富的额外功能进行说明。

## 本项目使用 Element-ui 版本为 2.12 参考手册时请核对

## 本项目支持分项目打包 使用命令行交互

运行命令 npm run wsdev/wsbuild 执行单项目运行/打包
项目列表配置在 config/itemlist 下 项目名称必须按照 src/project/...的标准命名

## gojs 集成

安装 npm i ptera_crack_gojs
https://www.npmjs.com/package/ptera_crack_gojs
