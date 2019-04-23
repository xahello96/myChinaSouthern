//最大轮播图 直接切图不经过中间图
var picObj = document.getElementById('pic').children;
var point = document.getElementById('btn').children;
var imgWidth = picObj[0].offsetWidth;
var num = 0;
var prev = document.getElementById('arr_left');
var next = document.getElementById('arr_right');

for (var i = 0; i < picObj.length; i++) {
    picObj[i].style.left = imgWidth + 'px';
}
picObj[0].style.left = 0;

light()

next.onclick = autoGo;
// var aotuGoTimer = setInterval(autoGo,3000)
//
// section.onmouseenter=function(){
//     clearInterval(aotuGoTimer)
// }
// section.onmouseout=function(){
//     aotuGoTimer=setInterval(autoGo,3000)
// }

function autoGo(){
    picObj[(num + 1) % 5].style.left = imgWidth + 'px'
    animation(picObj[num], {left: -imgWidth})
    num = ++num > picObj.length - 1 ? 0 : num;
    animation(picObj[num], {left: 0})
    light()
};

prev.onclick = function () {//上一张按钮事件
    animation(picObj[num], {left: imgWidth})
    num = --num < 0 ? picObj.length - 1 : num;
    picObj[num].style.left = -imgWidth + 'px';
    animation(picObj[num], {left: 0})
    light()
}

for (var i = 0; i < point.length; i++) {
    point[i].index=i;
    point[i].onclick=function(){
        if(this.index>num){
            animation(picObj[num],{left:-imgWidth})
            picObj[this.index].style.left=imgWidth+'px'
            animation(picObj[this.index],{left:0})
        }else{
            animation(picObj[num],{left:imgWidth})
            picObj[this.index].style.left=-imgWidth+'px'
            animation(picObj[this.index],{left:0})
        }
        num=this.index
        light()
    }
}

function light() {
    for (var i = 0; i < point.length; i++) {
        point[i].className = ""
    }
    point[num].className = " current";
}

function animation(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var key in json) {
            //获取某个属性的目标值
            var target = parseInt(json[key]);
            //获取某个属性的当前值
            if (key == "opacity") {
                var leader = getStyle(obj, key) * 100;
            } else {
                var leader = parseInt(getStyle(obj, key));
            }
            //根据当前值和目标值的距离计算速度
            var speed = (target - leader) / 10;
            //根据speed是正数还是负数进行取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //计算出obj某个属性的新的当前值
            leader = leader + speed;
            //把新的当前值赋值给obj
            if (key == "opacity") {
                obj.style.opacity = leader / 100;
                obj.style.filter = "alpha(opacity=" + leader + ")"
            } else if (key == "zIndex") {
                obj.style.zIndex = target;
            } else {
                obj.style[key] = leader + "px";
            }
            if (target != leader) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn()
            }
        }
    }, 20)
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr]
        /*
        * window.getComputedStyle(参数1,参数2)[属性名]
        * 适用于IE9+谷歌火狐
        * 参数1：要获取属性的DOM节点
        * 参数1：伪元素
        * */
    } else {
        return obj.currentStyle[attr];
        /*
        * DOM元素节点.currentStyle[属性名]
        * 使用与IE678
        * */
    }
}
