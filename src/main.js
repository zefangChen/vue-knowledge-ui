import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store'
import router from './router'
// import echarts from 'echarts'
import 'font-awesome/css/font-awesome.css'
import animated from 'animate.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);     // Install BootstrapVue
Vue.use(IconsPlugin);      // Optionally install the BootstrapVue icon components plugin
Vue.config.productionTip = false;
// Vue.prototype.$echarts = echarts   //全局引入echarts  这种方法是直接绑定在vue实例上，所以在项目中任何页面，直接 this.$echarts 即可
Vue.use(ElementUI);
Vue.use(animated);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
