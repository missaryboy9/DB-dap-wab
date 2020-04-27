import echarts from 'echarts';
let initecharts = Object.create({});
class initechart {
  /**
   * @dom must be html dom
   * @option use echarts option
   */
  constructor(dom, option) {
    this.docudommentdom = dom;
    this.option = option;
  }
  initecharts() {
    let echart = echarts.init(this.docudommentdom);
    this.echartsREL = echart;
    echart.setOption(this.option);
  }
  /**
   * get now echartsREL
   */
  getechart() {
    return this.echartsREL;
  }
}
initecharts.install = Vue => {
  // eslint-disable-next-line new-cap
  //   Vue.prototype.$initecharts = new initechart().initecharts()
  Vue.prototype.$initecharts = (dom, option) => {
    // eslint-disable-next-line new-cap
    let a = new initechart(dom, option);
    a.initecharts();
    return a.getechart();
  };
};

export default initecharts;
