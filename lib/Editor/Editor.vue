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

import { setup, ref, reactive, onMounted, onUnmounted, watch } from 'vue'

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
  setup(props, context) {
    const e = reactive(new E('#wangeditor'))
    const self_config = reactive(Object.assign({}, e.config, defaultOptions, props.options))
    const self_content = ref('')
    const init = () => {
      if (e) {
        e.highlight = hljs
        e.config = {
          ...self_config
        }
        e.config.onchange = html => {
          const text = e.txt.text()
          const editor = e
          if (html === '<p><br></p>') html = ''
          self_content.value = html
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
        if (content && content !== self_content.value) {
          self_content.value = content
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
  }
}
</script>

<style>
#wangeditor ul li {
  line-height: 1.8;
}
</style>