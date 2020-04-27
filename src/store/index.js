import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import app from "./modules/app";
import settings from "./modules/settings";
import user from "./modules/user";
import setlogin from "./modules/haslogin";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    setlogin
  },
  getters,
  plugins: [
    createPersistedState({
      // storage: window.sessionStorage,
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      },
      reducer(val) {
        return {
          app: val.app,
          setlogin: {
            routerdata: val.setlogin.routerdata,
            setrouter: val.setlogin.setrouter,
            loginflag: val.setlogin.loginflag
          },
          settings: val.settings,
          user: val.user
        };
      }
    })
  ]
});

export default store;
