import Vue from 'vue'
import App from './App.vue'
import {debounce} from 'lodash'










Vue.directive('focus', {
  inserted(el) {
    el.focus();
  } 
})














const truncateFunctionByType = {
  'lines': (el, count) => {
    el.style.overflow = 'hidden'
    el.style.display = '-webkit-box'
    el.style['-webkit-box-orient'] = 'vertical'
    el.style['-webkit-line-clamp'] = count
  },
  'height': (el, count) => {
    const multiplier = 10
    el.style.overflow = 'hidden'
    el.style.maxHeight = `${count * multiplier}px`
    el.classList.add('with-gradient')
  }
}

Vue.directive('truncate', (el, binding) => {
  const type = binding.arg || 'lines'
  const count = binding.value
  truncateFunctionByType[type](el, count)
})














const debouncedChange = (el, delay) => {
  return debounce(() => {
    el.dispatchEvent(new Event('change'))
  }, delay)
}

Vue.directive('debounce', {
  bind(el, binding) {
    const delay = binding.value
    el.addEventListener('input', debouncedChange(el, delay))
  },
  unbind(el) {
    el.removeEventListener('input', debouncedChange())
  }
})









new Vue({
  render: h => h(App),
}).$mount('#app')