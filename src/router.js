import Vue from "vue";
import Router from "vue-router";
import Register from './views/Register.vue';

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
    },
    {
      path: "/tabbar",
      name: "tabbar",
      component: () => import(/* webpackChunkName: "about" */ "./views/TabBar.vue"),
      children:[
        {
          path: "index",
          name: "index",
          component: () => import(/* webpackChunkName: "about" */ "./views/index.vue")
        },
        {
          path: "list",
          name: "list",
          component: () => import(/* webpackChunkName: "about" */ "./views/List.vue")
        },
        {
          path: "search",
          name: "search",
          component: () => import(/* webpackChunkName: "about" */ "./views/Search.vue")
        },
        {
          path: "shopcar",
          name: "shopcar",
          meta:{
            requireAuth:true, // 需要登录权限
          },
          component: () => import(/* webpackChunkName: "about" */ "./views/Shopcar.vue")
        },
        {
          path: "my",
          name: "my",
          meta:{
            requireAuth:true, // 需要登录权限
          },
          component: () => import(/* webpackChunkName: "about" */ "./views/my.vue")
        },
      ]
    }
  ]
});
