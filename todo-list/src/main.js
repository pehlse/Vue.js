import Vue from 'vue'
import App from './App'

//Router

import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
const router = new VueRouter ({
    mode : 'history',
    routes
})

new Vue({
    router,
    render: h => h(App),
    template : `
    <div id="app">
        <!-- component sera mostrado aqui -->
        <router-view class="view"</router-view>
    </div>
    `
}).$mount("#app")