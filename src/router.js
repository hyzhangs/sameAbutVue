import Vue from "vue";
import Router from "vue-router";
import Register from './views/Register.vue';
import  Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Register",
      component: Register,
      redirect: '/login'
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/login",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () => import(/* webpackChunkName: "about" */ "./views/index.vue")
    }
  ]
});
