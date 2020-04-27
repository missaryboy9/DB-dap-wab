import message from "./toast.vue";
let instoast = {
  install(Vue) {
    let Gltoast = Vue.extend(message); // 创建一个构造器
    let glabtoast = option => {
      let instence = new Gltoast({
        data: option.data,
        methods: option.methods
      });
      let instoastproto = instence.$mount().$el;
      document.body.appendChild(instoastproto);
      if (option.duration) {
        setTimeout(() => {
          instoastproto.remove();
          instoastproto = null;
        }, option.duration);
      }
    };
    // function config(op) {
    //   let basedata = {
    //     title: op.title,
    //     content: op.content
    //   };
    //   return basedata; // 洗数据
    // }
    Vue.prototype.$toast = option => {
      glabtoast(option);
    };
  }
};
export default instoast;

/**
 * 函数式组件样例
 * 可自定义无状态组件
 * 后期按需求添加
 *  this.$toast({
        data: {
          title: '1111'
        },
        methods: {
          success: () => {
            alert(333)
          }
        },
      })
 */

// this.$toast({
//   title: "提示类型", // 提示类型
//   content: "提示内容", // 提示内容
//   showan: false, // 动画是否开启
//   duration: 3000, // 显示时间
//   btn: [
//     // 按钮
//     {
//       text: "成功",
//       color: "blue",
//       callback: () => {}
//     },
//     {
//       text: "失败",
//       color: "red",
//       callback: () => {}
//     }
//   ],
//   success: () => {}, // 打开弹框成功的回调
//   close: () => {} // 关闭弹框的回调
// });
