import vWangeditor from './Editor/Editor'

const install = vue => {
  vue.component('vWangeditor', vWangeditor)
}

export default install
export { vWangeditor }