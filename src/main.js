import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "amfe-flexible";
import Cube from 'cube-ui';
import axios from  'axios';
import setAxios from "./setsxios";
setAxios();
Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.use(Cube) //使用cube-ui
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
