// ***根据categorys一维数组生成二维数组arr2d, 小数组minArr中的元素个数最大为8个
function categorysArr() {
    let { categorys } = this;
    let arr2d = [];
    let minArr = []; // 最大长度为8
    categorys.forEach((c) => {
        // 如果当前小数组长度为8个，则创建一个新的
        if (minArr.length == 8) {
            minArr = [];
        }
        // 如果小数组是空的，把小数组保存到二维数组里
        if (minArr.length == 0) {
            arr2d.push(minArr);
        }
        minArr.push(c);
    });
    return arr2d;
}