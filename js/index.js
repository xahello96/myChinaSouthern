//选择语言
function language() {
    var index = 0;
    document.getElementById("more_language").onclick = function () {
        var obj = document.getElementById("language");
        if (index % 2 === 0) {
            obj.style.display = "block";
            this.style.border = "1px solid #02A3FA";
        } else {
            obj.style.display = "none";
            this.style.border = "1px solid #fff";
        }
        index++;
    }
}
language();

//为了兼容ie8的placeholder属性
var forIe8 = document.getElementById('forIe8');
forIe8.value = '如何网上办理值机';
forIe8.style.color = '#aaa'
forIe8.onfocus=function () {
    if(forIe8.value === '如何网上办理值机'){
        forIe8.value = ''
    }
}
forIe8.onblur=function () {
    if(forIe8.value === ''){
        forIe8.value = '如何网上办理值机'
    }
}

//转换功能模块
var uu2 = document.getElementById('uu2');
var uu2_liObj = uu2.children;
uu2_liObj[0].onclick = function () {

    console.log(uu2_liObj[0].firstChild);
    uu2_liObj[0].firstChild.style.backgroundPosition = "-233px -673px";
    uu2_liObj[1].firstChild.style.backgroundPosition = "0 -673px";
    uu2_liObj[2].firstChild.style.backgroundPosition = "-16px -673px";
    uu2_liObj[3].firstChild.style.backgroundPosition = "-32px -673px";

    for (var i = 0; i < uu2_liObj.length; i++) {
        uu2_liObj[i].style.color = '#fff'
        uu2_liObj[i].style.background = '#008BCC'
    }
    this.firstChild.style.backgroundPosition = '-233px -693px'
    this.style.color = '#E5004A'
    this.style.background = '#fff'

    document.getElementById('order').style.display = 'block'
    document.getElementById('server').style.display = 'none'
    document.getElementById('vacation').style.display = 'none'
    document.getElementById('app').style.display = 'none'
}

uu2_liObj[1].onclick = function () {
    uu2_liObj[0].firstChild.style.backgroundPosition = "-233px -673px";
    uu2_liObj[1].firstChild.style.backgroundPosition = "0 -673px";
    uu2_liObj[2].firstChild.style.backgroundPosition = "-16px -673px";
    uu2_liObj[3].firstChild.style.backgroundPosition = "-32px -673px";

    for (var i = 0; i < uu2_liObj.length; i++) {
        uu2_liObj[i].style.color = '#fff'
        uu2_liObj[i].style.background = '#008BCC'
    }
    this.firstChild.style.backgroundPosition = '0 -693px'
    this.style.color = '#E5004A'
    this.style.background = '#fff'

    document.getElementById('order').style.display = 'none'
    document.getElementById('server').style.display = 'block'
    document.getElementById('vacation').style.display = 'none'
    document.getElementById('app').style.display = 'none'
}

uu2_liObj[2].onclick = function () {
    uu2_liObj[0].firstChild.style.backgroundPosition = "-233px -673px";
    uu2_liObj[1].firstChild.style.backgroundPosition = "0 -673px";
    uu2_liObj[2].firstChild.style.backgroundPosition = "-16px -673px";
    uu2_liObj[3].firstChild.style.backgroundPosition = "-32px -673px";

    for (var i = 0; i < uu2_liObj.length; i++) {
        uu2_liObj[i].style.color = '#fff'
        uu2_liObj[i].style.background = '#008BCC'
    }
    this.firstChild.style.backgroundPosition = '-16px -693px'
    this.style.color = '#E5004A'
    this.style.background = '#fff'

    document.getElementById('order').style.display = 'none'
    document.getElementById('server').style.display = 'none'
    document.getElementById('vacation').style.display = 'block'
    document.getElementById('app').style.display = 'none'
}

uu2_liObj[3].onclick = function () {
    uu2_liObj[0].firstChild.style.backgroundPosition = "-233px -673px";
    uu2_liObj[1].firstChild.style.backgroundPosition = "0 -673px";
    uu2_liObj[2].firstChild.style.backgroundPosition = "-16px -673px";
    uu2_liObj[3].firstChild.style.backgroundPosition = "-32px -673px";

    for (var i = 0; i < uu2_liObj.length; i++) {
        uu2_liObj[i].style.color = '#fff'
        uu2_liObj[i].style.background = '#008BCC'
    }
    this.firstChild.style.backgroundPosition = '-32px -693px'
    this.style.color = '#E5004A'
    this.style.background = '#fff'

    document.getElementById('order').style.display = 'none'
    document.getElementById('server').style.display = 'none'
    document.getElementById('vacation').style.display = 'none'
    document.getElementById('app').style.display = 'block'
}

var nav = document.getElementById('nav')
var section = document.getElementsByTagName('section')[0];
var adv = document.getElementById('adv')
var toTop = document.getElementById('toTop');
window.onscroll = function () {
    if (document.documentElement.scrollTop >= section.offsetTop - nav.offsetHeight) {
        nav.style.position = 'fixed';
        nav.style.zIndex = '3';
        nav.style.top = '0';
        nav.style.left = '0';
        section.style.marginTop = '44px';
    } else {
        nav.style.position = '';
        section.style.marginTop = '0';
    }
    if (document.documentElement.scrollTop < 400) {
        adv.style.left = '-918px'
    } else if (document.documentElement.scrollTop <= 900) {
        var scrollHeight = document.documentElement.scrollTop - 400;
        adv.style.left = -918 + scrollHeight * 918 / 500 + 'px';
        toTop.style.opacity = (document.documentElement.scrollTop - 400) / 500
        toTop.style.filter='alpha(opacity='+100*(document.documentElement.scrollTop - 400) / 500+')'
    } else {
        adv.style.left = '0';
        toTop.style.opacity = 1;
        toTop.style.filter='alpha(opacity=100)'
    }
}
var close = document.getElementById('close');
close.onclick = function () {
    adv.style.display = 'none'
}


toTop.onclick = function () {
    var height = document.documentElement.scrollTop
    var step = height / 10

    var timer = setInterval(function () {
        document.documentElement.scrollTop = height - step
        step = document.documentElement.scrollTop / 10
        height = document.documentElement.scrollTop
        if (step < 1) {
            document.documentElement.scrollTop = 0;
            clearInterval(timer)
        }
    }, 20)
}


//用JQ写部分功能
$(function () {
    //设置语言切换
    $("#language>form>.form1>ul>li>a").click(function () {
        $("#more_language span").html($(this).valueOf()[0].textContent);
        var zhezhaoLength = $("#more_language").outerWidth();
        $("#zhezhao").css("width", zhezhaoLength - 2);
    })
    //获取当前日期
    var $newData = new Date();
    var $yy = $newData.getFullYear();
    var $mm = $newData.getMonth() + 1;
    var $dd = $newData.getDate();
    if ($mm < 10) {
        $mm = "0" + $mm;
    }
    if ($dd < 10) {
        $dd = "0" + $dd;
    }
    $("#yymmdd").val($yy + "-" + $mm + "-" + $dd);
    //交换出发地和目的地
    $("#exchange").click(function () {
        var $temp = 0;
        var $rea = $("#reaching").val();
        var $dep = $("#departure").val();
        $("#reaching").val($dep);
        $("#departure").val($rea);
    })
    $("#one").click(function () {
        $("#two_logo").css("background", "#fff");
        $("#one_logo").css("background", "#038CD0");
    })
    $("#two").click(function () {
        $("#one_logo").css("background", "#fff");
        $("#two_logo").css("background", "#038CD0");
    })
    //点击专享优惠下面的城市名称改变模块内容
    $("#city_name li").click(function () {
        $("#gz_1").css("display", "none");
        $("#gz_2").css("display", "none");
        $("#gz_3").css("display", "none");
        $("#gz_4").css("display", "none");
        $("#gz_5").css("display", "none");
        $("#city_name li").css("color", "#fff").css("background", "#008ACD");
        $(this).css("color", "#008ACD").css("background", "#fff");
    })
    $("#gz").click(function () {
        $("#gz_1").css("display", "block");
    })
    $("#sz").click(function () {
        $("#gz_2").css("display", "block");
    })
    $("#cq").click(function () {
        $("#gz_3").css("display", "block");
    })
    $("#wlmq").click(function () {
        $("#gz_4").css("display", "block");
    })
    $("#more").click(function () {
        $("#gz_5").css("display", "block");
    })
})
