import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import VueScrollTo from 'vue-scrollto';
import VueScrollactive from 'vue-scrollactive';

// You can also pass in the default options
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
Vue.use(VueScrollactive);


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        base: '/cv/'
    }]
})