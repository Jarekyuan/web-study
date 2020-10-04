 // 函数翻转数组: reverse
 function reverse(arr) {
     var newArr = [];
     for (var i = arr.length - 1; i >= 0; i--) {
         // newArr[newArr.length] = arr[i];
         newArr.push(arr[i]);
     }
     return newArr;
 }
 console.log(reverse([1, 2, 3, 4, 5]));



 // 函数排序数组: sort
 function sort(arr) {
     for (var i = 0; i <= arr.length - 1; i++) {
         for (var j = 0; j <= arr.length - i - 1; j++) {

             if (arr[j] > arr[j + 1]) {
                 var temp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = temp;
             }

         }
     }
     return arr;
 }
 var re = sort([2, 4, 7, 1, 9, 3, 5, 8])
 console.log(re);



 // 获取0-1之间的随机数
 var num = Math.random();
 // 获取1-10之间的随机数
 var num = Math.floor(Math.random() * 10) + 1;


 //  *随机数字排序
 var iArray = [];

 for (let i = 0; i < 10; i++) {
     //  循环十次，每次添加一个随机数
     let result = Math.floor(Math.random() * 10) + 1;
     iArray.push(result);
 }
 //  排序
 iArray.sort();



 // 手写trim
 if (!String.prototype.trim) {
     String.prototype.trim = function() {
         return this.replace(/^\s+/, "").replace(/\s+$/, "");
     }
 }