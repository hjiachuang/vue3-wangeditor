<template>
  <div class="wangeditor">
    <div id="wangeditor"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
import hljs from 'highlight.js'
import 'highlight.js/styles/lioshi.css'
import defaultOptions from './options'

import { ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'VueWangEditor',
  props: {
    content: String,
    disable: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup (props, context) {
    let e = null
    const selfContent = ref('')
    const init = () => {
      e = new E('#wangeditor')
      const selfConfig = Object.assign({}, e.config, defaultOptions, props.options)
      if (e) {
        e.highlight = hljs
        e.config = {
          ...selfConfig
        }
        e.config.onchange = html => {
          const text = e.txt.text()
          const editor = e
          if (html === '<p><br></p>') html = ''
          selfContent.value = html
          context.emit('change', { html, text, editor })
        }
        e.config.onblur = html => {
          const text = e.txt.text()
          const editor = e
          context.emit('blur', { html, text, editor })
        }
        e.config.onfocus = html => {
          const text = e.txt.text()
          const editor = e
          context.emit('focus', { html, text, editor })
        }
        e.create()
        e.disable()
        if (props.content) {
          e.txt.html(props.content)
        }
        if (!props.disable) {
          e.enable()
        }
      }
    }
    onMounted(() => {
      init()
    })
    onUnmounted(() => {
      e.destroy()
    })
    watch(() => props.content, (content, prevContent) => {
      if (e) {
        if (content && content !== selfContent.value) {
          selfContent.value = content
          e.txt.html(content)
        } else if (!content) {
          e.txt.append('')
        }
      }
    })
    watch(() => props.disable, (disable, prevDisable) => {
      if (e) {
        if (disable === true) {
          e.disable()
        } else {
          e.enable()
        }
      }
    })
    return {}
  }
}
</script>