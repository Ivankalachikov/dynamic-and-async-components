import Vue from 'vue'
import App from './App.vue'
import {debounce} from 'lodash'

Vue.config.productionTip = false

Vue.directive('truncate', {
  bind(el, binding) {
    const REST_TEXT_INDICATION_STRING = '...'
    const expectedLength = binding.value
    const text = el.innerText
    const realLength = text.length

    if (realLength <= expectedLength) {
      return
    }

    el.innerText = `${text.slice(0, expectedLength)}${REST_TEXT_INDICATION_STRING}`
  }
})

Vue.directive('debounce', {
  bind(el, binding) {
    const delay = binding.value
    el.addEventListener('input', debounce(() => {
      el.dispatchEvent(new Event('change'))
    }, delay)
    )
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')