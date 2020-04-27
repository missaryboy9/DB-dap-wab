import { md5 } from './crypto'

function GVerify(option) { // 创建一个图形验证码对象，接收options对象为参数
    let options = { // 默认options参数值
        id: "", // 容器Id
        canvasId: "verifyCanvas", // canvas的ID
        width: "100", // 默认canvas宽度
        height: "30", // 默认canvas高度
        type: "blend", // 图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
        code: "",
        strict: false // 严格模式  是否过滤大小写，false为不区分大小写
    }

    if (Object.prototype.toString.call(option) === "[object Object]") { // 判断传入参数类型
        Object.keys(options).forEach(element => {
        options[element] = option[element];
        });
    } else {
       options.id = options;
    }

    options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
    options.letterArr = getAllLetter();

    /** 初始化方法**/
    let _init = () => {
        var con = document.getElementById(options.id);
        var canvas = document.createElement("canvas");
        options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
        options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";
        canvas.id = options.canvasId;
        canvas.width = options.width;
        canvas.height = options.height;
        canvas.style.cursor = "pointer";
        canvas.innerHTML = "您的浏览器版本不支持canvas";
        con.appendChild(canvas);
        canvas.onclick = function () {
            refresh();
        }
    }

    /** 生成验证码**/
    let refresh = () => {
        var canvas = document.getElementById(options.canvasId);
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
        }
        ctx.textBaseline = "middle";

        ctx.fillStyle = randomColor(180, 240);
        ctx.fillRect(0, 0, options.width, options.height);

        if (options.type === "blend") { // 判断验证码类型
            var txtArr = options.numArr.concat(options.letterArr);
        } else if (options.type === "number") {
             txtArr = options.numArr;
        } else {
              txtArr = options.letterArr;
        }
        var code_str = '';
        for (var i = 1; i <= 4; i++) {
            var txt = txtArr[randomNum(0, txtArr.length)];
            // this.options.code += txt;
            code_str += txt;
            ctx.font = randomNum(options.height / 1, options.height) + 'px SimHei'; // 随机生成字体大小
            ctx.fillStyle = randomColor(50, 160); // 随机生成字体颜色
            ctx.shadowOffsetX = randomNum(-3, 3);
            ctx.shadowOffsetY = randomNum(-3, 3);
            ctx.shadowBlur = randomNum(-3, 3);
            ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
            var x = options.width / 5 * i;
            var y = options.height / 2;
            var deg = randomNum(-30, 30);
            /** 设置旋转角度和坐标原点**/
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);
            // /**恢复旋转角度和坐标原点**/
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
        }
        if (options.strict) {
            options.code = md5(code_str)
        } else {
            options.code = md5(code_str.toLowerCase())
        }
        /** 绘制干扰线**/
        for (let i = 0; i < 4; i++) {
            ctx.strokeStyle = randomColor(40, 180);
            ctx.beginPath();
            ctx.moveTo(randomNum(0, options.width), randomNum(0, options.height));
            ctx.lineTo(randomNum(0, options.width), randomNum(0, options.height));
            ctx.stroke();
        }
        /** 绘制干扰点**/
        for (let i = 0; i < options.width / 4; i++) {
            ctx.fillStyle = randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(randomNum(0, options.width), randomNum(0, options.height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    /** 验证验证码**/
    let validate = (code) => {
        if (options.strict) {
            code = md5(code);
        } else {
            code = md5(code.toLowerCase());
        }
        var v_code = options.code;
        if (code === v_code) {
            return true;
        } else {
            return false;
        }
    }

    _init();
    refresh();
    return validate
}

/** 生成字母数组**/
function getAllLetter() {
    var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
    return letterStr.split(",");
}
/** 生成一个随机数**/
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
/** 生成一个随机色**/
function randomColor(min, max) {
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
}

module.exports = GVerify;
