// 
function combo(msg) {
    let arr = msg.split("-"); //[set,class,name]
    for (let i = 1; i < arr.length; i++) {
        // sss
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
    }
    msg = arr.join("");
    return msg;
}
console.log(combo('set-class-name'));