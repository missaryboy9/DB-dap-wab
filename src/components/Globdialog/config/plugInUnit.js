export default {
    bind(el) {
    const dialogHeaderEl = el.querySelector(".pop-upLayerHeader");
    const dragDom = el;
    // const { glbwidth, glbheight } = { glbwidth: document.body.offsetWidth, glbheight: document.body.offsetHeight }
    dialogHeaderEl.style.cursor = "move";

    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

    dialogHeaderEl.onmousedown = e => {
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;

      let styL, styT;

      if (sty.left.includes("%")) {
        styL = +document.body.clientWidth * (+sty.left.replace(/%/g, "") / 100);
        styT = +document.body.clientHeight * (+sty.top.replace(/%/g, "") / 100);
      } else {
        styL = +sty.left.replace(/px/g, "");
        styT = +sty.top.replace(/px/g, "");
      }

      document.onmousemove = (e) => {
        const l = e.clientX - disX;
        const t = e.clientY - disY;
        dragDom.style.left = `${l + styL}px`;
        dragDom.style.top = `${t + styT}px`;
      };

      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
    }
}
