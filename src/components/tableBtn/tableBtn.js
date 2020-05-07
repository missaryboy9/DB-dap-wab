import tabBtn from './tableBtn.vue';
const tableButton = {
  install: (Vue) => {
      Vue.component('table-btn', tabBtn);
  }
};
export default tableButton;
