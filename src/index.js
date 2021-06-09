import Vue from 'vue'
import App from './app.vue'

import './assert/css/test.css'
import './assert/stylus/test-stylus.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h)=>h(App)
}).$mount(root)