export default function(func, wait = 300) {
  let deltime;
  return function() {
    let context = this;
    window.clearTimeout(deltime);
    deltime = window.setTimeout(() => {
      func.apply(context, arguments);
    }, wait);
  };
}
