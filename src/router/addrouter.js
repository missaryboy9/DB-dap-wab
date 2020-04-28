// import Layout from '@/layout';
// import { asynvmap_ } from './map';
class addrouters {}
/**
 * @params option
 * {
 *  router :路由,
 *  store :vuex
 * }
 */
addrouters.install = (Vue, { router, store }) => {
  /**
   * @params e :待签名路由表
   * @params fun: 回调
   */

  let addrouter = (e, fun) => {
    store.dispatch("setlogin/GenerateRoutes", e).then(res => {
      // console.log(res, "resresresresresres");
      // 路由签名
      router.addRoutes(res);
      // 动态理由加载成功
      let routedada = [...res, ...router.options.routes];
      // 分发路由表
      store.dispatch("setlogin/routerdata", routedada);
    });
    fun && fun();
  };

  const Islogin = () => {
    return new Promise((resolve, reject) => {
      if (store.getters.loginflag) {
        return resolve();
      } else {
        return reject();
      }
    });
  };

  // 路由拦截器;
  router.beforeEach((to, from, next) => {
    // 当前路由为登录界面则放行
    if (to.path === process.env.VUE_APP_BASE_LOGIN) {
      next();
    } else {
      Islogin()
        .then(() => {
          if (from.name === null) {
            addrouter(store.getters.setrouter, () => {
              next();
            });
          } else {
            next();
          }
        })
        .catch(() => {
          next({
            path: process.env.VUE_APP_BASE_LOGIN
          });
        });
    }
    // 判断是否登录如果登录则放行没有登录则去登录界面
  });

  Vue.prototype.$addrouter = e => addrouter(e);
};

export default addrouters;
