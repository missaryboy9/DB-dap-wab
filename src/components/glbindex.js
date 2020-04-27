import glodialog from "./Globdialog/index.vue";
import glopagination from "./GLPagination/index.vue";
import glbtaostmessage from './Glbtoastmessage/index.js'
let components = [glodialog, glopagination];
let congregationnmuster = [glbtaostmessage]

let a = Object.create({
  install: (Vue, option = {}) => {
    components.forEach(element => {
      Vue.component(element.name, element);
    });
    congregationnmuster.forEach(fun => {
      Vue.use(fun)
    });
  }
});
export default a;
