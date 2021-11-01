<template>
  <h1 style="text-align: center; margin: 100px 0 20px">WangEditor for Vue3.x</h1>
  <small style="text-align: center; display: block; margin: 0 0 40px;">基于wangeditor二次封装的用于Vue3.x的组件</small>
  <v-wangeditor
    :content="content"
    :options="options"
    @change="change"
    style="width: 80%; margin: 0 auto"
  />
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      options: {
        height: 600,
        pasteIgnoreImg: false
      },
      content: `<blockquote>争做国内使用体验Z好的开源 Web 富文本编辑器！</blockquote><h1>为何选择 wangEditor</h1><ul><li>简洁、轻量级、<a href="https://doc.wangeditor.com/">文档</a>齐全</li><li>万星项目&nbsp;<a href="https://github.com/wangeditor-team/wangEditor/releases">Github Star 1w+</a></li><li>npm 周下载量 1w+</li><li>CDN 月下载量百万+（来自&nbsp;<a href="https://www.jsdelivr.com/package/npm/wangeditor">jsdelivr</a>）</li><li>QQ 群及时答疑</li><li><a href="https://doc.wangeditor.com/#%E5%BC%80%E5%8F%91%E4%BA%BA%E5%91%98">开源团队</a>维护，非个人单兵作战</li></ul><h1>初见</h1><p>npm 安装&nbsp;<code>npm i wangeditor --save</code>&nbsp;，几行代码即可创建一个编辑器。</p><pre><code>import E from 'wangeditor'
const editor = new E('#div1')
editor.create()</code></pre><p>更多使用配置，请阅读<a href="https://doc.wangeditor.com/">使用文档</a>。</p><h1>demo</h1><p>在线体验 demo 可到&nbsp;<a href="https://codepen.io/collection/DNmPQV">codepen.io/collection/DNmPQV</a>&nbsp;。</p><p>注意，如果打不开，可以去查看&nbsp;<a href="https://github.com/wangeditor-team/wangEditor/tree/master/examples">github examples</a>&nbsp;的源码。</p><h1>浏览器兼容性</h1><ul><li>兼容主流 PC 浏览器，IE11+</li><li>不支持移动端和 ipad</li></ul><h1>遇到问题</h1><ul><li>加入 QQ 群：164999061(人已满)，710646022(人已满)，901247714</li><li><a href="https://github.com/wangeditor-team/wangEditor/issues" target="_blank">提交问题和建议</a></li></ul><h1>贡献代码</h1><p>欢迎非团队成员贡献代码，提交 Pull Request，请一定参考<a href="https://github.com/wangeditor-team/wangEditor/blob/master/docs/contribution.md" target="_blank">贡献代码流程</a>。</p><h1>谁在维护</h1><p>wangEditor 现有一个开源团队在维护，团队可以保证答疑、bug 修复和迭代效率。</p><p><a href="https://doc.wangeditor.com/#%E5%BC%80%E5%8F%91%E4%BA%BA%E5%91%98">查看开发团队，或想加入开发团队</a></p><h1>为我们点赞</h1><p>如果你感觉有收获，欢迎给我打赏，以激励我们更多输出优质开源内容。</p><p><img src="https://www.wangeditor.com/imgs/ali-pay.jpeg"/>&nbsp;<img src="https://www.wangeditor.com/imgs/wechat-pay.jpeg"/></p><p><br/></p>`
    }
  },
  methods: {
    change({ html }) {
      // console.log(html)
    }
  }
}
</script>
