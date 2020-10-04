function flat(arr) {
    // 验证 arr 中，还有没有深层数组 [1, 2, [3, 4]]
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        return arr // 已经是 flatern [1, 2, 3, 4]
    }

    // 如果里面还有数组，用concat() （concat只能拍平一层）
    const res = Array.prototype.concat.apply([], arr)
        // 递归验证还有内层数组吗，如果有，继续用concat()
    return flat(res) // 递归
}

const res = flat([1, 2, [3, 4, [10, 20, [100, 200]]], 5])
console.log(res)