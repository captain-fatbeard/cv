import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);
// You can also pass in the default options
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.use(Router)
export default new Router({
    base: '/cv',
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
})