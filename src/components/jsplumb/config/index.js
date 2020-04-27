import Vue from "vue";
import { v1 as uuid1 } from "uuid";
let config = {
  // 基本连接线样式
  connectorPaintStyle: {
    lineWidth: 2,
    strokeStyle: "#61B7CF",
    joinstyle: "round",
    fill: "pink",
    outlineColor: "",
    outlineWidth: ""
  },
  // 鼠标悬浮在连接线上的样式
  connectorHoverStyle: {
    lineWidth: 2,
    strokeStyle: "red",
    outlineWidth: 10,
    outlineColor: ""
  },
  baseStyle: {
    endpoint: [
      "Dot",
      {
        radius: 8,
        fill: "pink"
      }
    ], // 端点的形状
    connectorStyle: this.connectorPaintStyle, // 连接线的颜色，大小样式
    connectorHoverStyle: this.connectorHoverStyle,
    paintStyle: {
      strokeStyle: "#1e8151",
      stroke: "#7AB02C",
      fill: "pink",
      fillStyle: "#1e8151",
      radius: 6,
      lineWidth: 2
    }, // 端点的颜色样式
    // hoverPaintStyle: {
    //   outlineStroke: 'pink'
    // },
    hoverPaintStyle: { stroke: "blue" },
    isSource: true, // 是否可以拖动（作为连线起点）
    connector: [
      "Flowchart",
      { gap: 10, cornerRadius: 5, alwaysRespectStubs: true }
    ], // 连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
    isTarget: true, // 是否可以放置（连线终点）
    maxConnections: -1 // 设置连接点最多可以连接几条线
  }
};

/**
 * @parame template 需要挂的模板
 * @params $node 目标元素id
 * @params params 符合vue构造器的参数
 */
let moduletorender = (template, $node, params) => {
  if (typeof template === Array) {
    template.forEach(element => {
      temtoren(element);
    });
  } else {
    temtoren(template);
  }

  let temtoren = function(templateone) {
    let Module = Vue.extend(templateone);
    let paramss = Object.assign(
      {},
      {
        data: {
          id: uuid1()
        },
        methods: {
          /**
           * @params promise function
           */
          hidemodule(fun) {
            if (!fun instanceof Promise) {
              // eslint-disable-next-line no-throw-literal
              throw "fun must be Promise";
            }
            fun().then(() => {
              setTimeout(() => {
                nodeExamples.remove();
                nodeExamples = null;
              }, 500);
            });
          }
        }
      },
      params
    );
    let nodeExamples = new Module(paramss).$mount().$el;
    document.getElementById($node).appendchild(nodeExamples);
  };
};
export { config, moduletorender };
