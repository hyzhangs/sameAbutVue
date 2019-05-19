import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "amfe-flexible";
import Cube from 'cube-ui';
import axios from 'axios';
import setAxios from "./setsxios";
setAxios();
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Cube) //使用cube-ui
router.beforeEach((to, from, next) => {
  // 无论刷新还是跳转 第一个进入的都是这个路由钩子函数
  store.commit('setToken', localStorage.getItem('token'))
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
