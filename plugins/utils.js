import Vue from 'vue';

let utils = {
    setCookie: function (name, value, day) {
        if (day) {
            var Days = day;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=" + $("body").data("base") + ";path=/";
        } else {
            document.cookie = name + "=" + escape(value) + ";domain=" + $("body").data("base") + ";path=/";
        }
    },
    //读取cookies
    getCookie: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    //删除cookies
    delCookie: function (name) {
        dxz.setCookie(name, ' ', -1);
    },
}
export default function( context ) {
    context.utils = utils
    Vue.prototype.utils = utils;
} 