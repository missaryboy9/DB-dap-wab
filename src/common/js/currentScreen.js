/**
 * @params them 是被判断的元素
 * @params fun  回调
 */
let currentScreen = (them, fun) => {
    console.log(them)
    let body = document.body;

    let getViewport = () => {
        var e = window;
            var a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    }
    let win = getViewport();
    let getCurPos = () => {
    var pos = them.getBoundingClientRect();
 if (pos.bottom - 50 < 0 || pos.top > win.height) {
        fun(false)
    } else {
        fun(true)
    }
}
// app-main
document.getElementsByClassName('app-wrapper')[0].addEventListener('scroll', getCurPos);
window.addEventListener('resize', function() {
    win = getViewport();
  // eslint-disable-next-line no-irregular-whitespace
  　getCurPos();
}, false);
}
export default currentScreen
