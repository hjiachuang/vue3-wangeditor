# vue3-wangeditor

<div align="center">

![GitHub watchers](https://img.shields.io/github/watchers/hjiachuang/vue3-wangeditor?style=social) ![GitHub stars](https://img.shields.io/github/stars/hjiachuang/vue3-wangeditor?style=social) ![GitHub forks](https://img.shields.io/github/forks/hjiachuang/vue3-wangeditor?style=social)
<br />
![GitHub package.json version](https://img.shields.io/github/package-json/v/hjiachuang/vue3-wangeditor?style=flat-square) ![GitHub](https://img.shields.io/github/license/hjiachuang/vue3-wangeditor?style=flat-square) ![GitHub open issues](https://img.shields.io/github/issues/hjiachuang/vue3-wangeditor?style=flat-square) ![GitHub closed issues](https://img.shields.io/github/issues-closed/hjiachuang/vue3-wangeditor) ![GitHub last commit](https://img.shields.io/github/last-commit/hjiachuang/vue3-wangeditor?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/hjiachuang/vue3-wangeditor?style=flat-square)
</div>
<br />

## 📖 项目介绍

vue3-wangeditor 是一款基于 wangEditor 二次封装用于 Vue3.x 的 Web 富文本编辑器， 轻量、简洁、易用、开源免费。

兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11。

不支持移动端。

wangEditor 当前是 `v4` 版本。

内置了代码高亮插件 `highlight.js` ，使用的主题是 `Lioshi`

## 💊 已知问题

1. 如果控制台输出 `Object(...) is not define` 且空白页面 ，好像是这个错误内容吧，记不清楚了。如果报这个错误，那么恭喜你，你跟我一样犯了个低级错误，你在 `Vue 2.x` 中用了这个组件，所以报错了，这个组件是用 `Vue 3.x` 做的。

2. 如果控制台输出 `[Vue Warn]: onMounted is called when there is no active component instance to be associa.......` ，页面正常显示，但不显示编辑器，我的解决方法是，直接把当前项目的 `node_modules` 删了，然后重新 `npm install` 。我一开始以为是个bug，头脑风暴了一下午，百度搜这个问题还搜不到，愣是浪费了一下午，最后灵光一闪，诶删了 `node_modules` 重新安装会不会就好了，然后，就没有然后了。

## 💡 注意

1. 基于 wangeditor 默认配置，修改了我自己的默认配置
```javascript
focus: false // 是否自动聚焦到编辑器，默认是 true ，我改成 false
emotions: [] // 添加了大部分常见的 emoji 表情
languageTab: '  ' // 编辑器中按下 tab 键默认添加 4 个空格，我的习惯是 2 格
menuTooltipPosition: 'down' // 鼠标移至菜单栏显示提示的位置，默认是上标，全屏下会被遮挡，我改成下标
pasteIgnoreImg: true // 复制粘贴时是否过滤图片粘贴，默认是不过滤，我改成过滤图片
uploadImgAccept: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'] // 默认没有 webp 格式
uploadImgMaxLength: 1 // 同时上传的图片数量，默认是 100，我改成单文件上传
```

## 📦安装和使用

NPM 安装
```bash
npm i vue3-wangeditor --save
```
使用：

```javascript
// 1. 全局安装
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import vueWangEditor from 'vue3-wangeditor'

const app = createApp(App)
app.use(vueWangEditor)
app.mount('#app')

// App.vue
<template>
  <v-wangeditor />
</template>


// 2. 局部引入
// App.vue
<template>
  <v-wangeditor />
</template>

<script>
import { vWangeditor } from 'vue3-wangeditor'
export default {
  components: {
    vWangeditor
  }
}
</script>
```

参数 props
```javascript
content: String // 编辑器显示的内容，不能通过v-model同步内容，需同步内容可用事件 change
disable: { // 是否显示编辑器
  type: Boolean,
  default: false
}
options: { // 编辑器配置，具体看下面，或看 wangeditor 官方文档
  type: Object,
  required: false,
  default: () => ({})
}
```

事件
```javascript
@change: Function({ html, text, editor })	编辑器内容发生改变时触发的事件
@focus: Function({ html, text, editor })	编辑器聚焦时触发的事件
@blur: Function({ html, text, editor })		编辑器失焦时触发的事件
```

props.options 选项
```javascript
// 均为可选，覆盖默认配置

// 编辑器基本配置
height: Number 					编辑区域高度 					默认 300
zIndex: Number  				编辑器 z-index ， 				默认 10000
placeholder: String  										默认 '请输入正文'
focus: Boolean  				是否自动聚焦到编辑器				默认 false
menus: Array[String]  				配置显示的菜单列表，可选列表见下面
colors: Array[String]  				色板配置  e.g. ['#ffffff', '#000000']
fontNames: Array[String]  			配置可选字体
fontSizes: Object 				配置可选字体大小，较为麻烦，不建议修改。具体看 wangeditor 官方文档
lineHeights: Array[String] 			配置可选的行高 e.g. ['1', '1.5'] 数值表示倍数，即1倍行高，1.5倍行高
emotions: Array[Object]  			配置可选的表情 见 wangeditor 官方文档
languageType: Array[String]  			配置插入代码时可选的编程语言，主要是给代码高亮功能提供帮助
languageTab: String  				配置在代码区域按下 tab 键时插入多少个空格 		默认 '  '
showFullScreen: Boolean  			是否显示全屏按钮 				默认 true
showMenuTooltips: Boolean  			是否显示菜单栏提示 				默认 true
menuTooltipPosition: 'up' or 'down'  		配置菜单栏提示的位置为上标还是下标，		默认 'down' 下标

pasteFilterStyle: Boolean  			是否忽略复制粘贴时文本自带的样式 			默认 true
pasteIgnoreImg: Boolean  			是否忽略复制粘贴时带的图片 			默认 true

// 上传图片配置
showLinkImg: Boolean  				是否显示插入网络图片的功能 			默认 true
showLinkImgAlt: Boolean  			是否显示插入网络图片时添加alt属性 			默认 true
showLinkImgHref: Boolean  			是否显示插入网络图片时添加图片超链接 		默认 true
uploadImgServer: String  			配置上传图片的接口地址 				默认为空
uploadImgMaxSize: Number  			配置上传图片的文件大小，单位：字节			默认 5M ,即 5 * 1024 * 1024
uploadImgAccept: Array[String] 			配置上传的图片类型 				默认 ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
uploadImgMaxLength: Number  			配置一次最多能传多少张图片 			默认 1
uploadImgParams: Object  			自定义上传图片时额外携带的参数
uploadFileName: String  			formData.append(name, file) 中的name参数的值
uploadImgHeaders: Object  			上传图片时添加http的header
withCredentials: Boolean  			跨域传递cookie 					默认 false
uploadImgTimeout: Number  			上传接口等待的最大时间，单位毫秒 			默认 10 * 1000， 即10秒
customUploadImg: Function(file, insertImgFn)  	自定义上传图片方法，file 是选中的文件列表，insertImgFn 是获取图片 url 后，插入到编辑器的方法
	//insertImgFn(imgUrl)

// 上传视频配置
showLinkVideo: Boolean  			是否显示插入网络视频的功能 			默认 true
uploadVideoServer: String  			配置上传视频的接口地址 需要配置该项，才会显示上传视频
uploadVideoMaxSize: Number  			配置上传视频的文件大小，单位：字节			默认 1G ，即 1 * 1024 * 1024 * 1024
uploadVideoAccept: Array[String] 		配置上传的视频类型 				默认 ['mp4']
uploadVideoParams: Object  			自定义上传视频时额外携带的参数
uploadVideoParamsWithUrl: Boolean  		是否将额外携带的参数拼接到url中 			默认 false
uploadVideoName: String  			formData.append(name, file) 中的name参数的值
uploadVideoHeaders: Object  			上传视频时添加http的header
withVideoCredentials: Boolean 			跨域传递cookie 					默认 false
uploadVideoTimeout: Number  			上传接口等待的最大时间，单位毫秒			默认 5 * 60 * 1000，即 5分钟
customUploadVideo: Function(file, insertVideoFn)	自定义上传视频方法，file 是选中的文件列表，insertVideoFn 是获取视频 url 后，插入到编辑器的方法
	//insertVideoFn(videoUrl)

// 其他配置
onchangeTimeout： Number  			配置触发 onchange 的时间频率， 单位毫秒		默认 200

// 回调类型参数 可选
linkImgCallback: Function(src, alt, href) 插入网络图片的回调事件
onlineVideoCallback: Function(video) 插入网络视频的回调事件
uploadImgHooks: Object  			对上传图片的不同阶段，做相应处理。见 wangeditor 官方文档
uploadVideoTimeout: Object  			对上传视频的不同阶段，做相应处理。见 wangeditor 官方文档

```

```javascript
menus 可选的值有：
  'head' 标题
  'bold' 加粗
  'fontSize' 字体大小
  'fontName' 字体
  'italic' 斜体
  'underline' 下划线线
  'strikeThrough' 删除线
  'indent' 缩进
  'lineHeight' 行高
  'foreColor' 字体颜色
  'backColor' 背景颜色
  'link' 链接
  'list' 序列
  'todo' 待办事项
  'justify' 对齐
  'quote' 引用
  'emoticon' 表情
  'image' 图片
  'video' 视频
  'table' 表格
  'code' 代码
  'splitLine' 分割线
  'undo' 撤销
  'redo' 恢复
```
## 📝依赖

* [wangEditor —— 轻量级web富文本框](https://github.com/wangeditor-team/wangEditor)

* [Highlight.js —— 代码高亮](https://github.com/highlightjs/highlight.js)

## ✒️交流
提交 bug 或建议
- [github issues](https://github.com/hjiachuang/vue3-wangeditor/issues) 提交问题
