// 倒计时
function countDown(time) {
    const nowTime = +new Date();
    const inputTime = +new Date(time);
    const times = (inputTime - nowTime) / 1000;

    var d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? `0${d}` : d; // 三元判断

    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? `0${h}` : h;

    var m = parseInt(times / 60 % 60);
    m = m < 10 ? `0${m}` : m;

    var s = parseInt(times % 60);
    s = s < 10 ? `0${s}` : s;

    return `${d}天-${d}时-${d}分-${d}秒`
}
console.log(countDown('2020-10-30 00:00:00'));


// *转时间格式
var d = new Date();

var year = d.getFullYear();
// 获取月，月份比较特殊，0 是 1 月，11 是 12 月
var month = d.getMonth() + 1;
// 变成两位
month = month < 10 ? `0${month}` : month;
// 获取日
var day = d.getDate();
day = day < 10 ? `0${day}` : day;

alert(`${year}-${month}-${day}`);