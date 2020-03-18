import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import { wechatAuth } from "@/utils/wxConfig";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

// wx-jssdk config配置;
/*router.afterEach((to, from) => {
  let authUrl = `${window.location.origin}${to.fullPath}`;
  const allowShare = !!to.meta.allowShare;
  if (/iphone|ipad/i.test(navigator.userAgent.toLowerCase())) {
    // IOS
    // @ts-ignore
    store.commit("setEntryUrl", { entryUrl: authUrl });
    wechatAuth(store.state.entryUrl, "ios", allowShare);
  } else {
    wechatAuth(authUrl, "android", allowShare);
  }
});*/

export default router;
