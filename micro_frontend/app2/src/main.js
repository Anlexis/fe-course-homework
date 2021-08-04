import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const appOptions = {
    el:'#detail',
    router,
    render: h => h(App),
}

if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}

const vueLifecycle = singleSpaVue({
  Vue,
  appOptions
})

export function bootstrap (props) {
  console.log('app2 bootstrap', props)
  return vueLifecycle.bootstrap(() => {})
}

export function mount (props) {
  console.log('app2 mount', props)
  return vueLifecycle.mount(() => {})
}

export function unmount (props) {
  console.log('app2 unmount', props)
  return vueLifecycle.unmount(() => {})
}
