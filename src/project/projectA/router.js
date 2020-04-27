import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./layout/index.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      meta: { title: "elementUi", icon: "user" },
      component: () =>
        import(/* webpackChunkName: "about" */ "./layout/index.vue"),
      children: [
        {
          path: "index",
          name: "elementUi",
          component: () => import("./page/About.vue"),
          meta: { title: "elementUi", icon: "user" }
        }
      ]
    }
  ]
});
