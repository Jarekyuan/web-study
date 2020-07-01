window.addEventListener('load', function() {
    function animate(obj, target, callback) {
        clearInterval(obj.times); //保证当前只有一个定时器在执行
        obj.times = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step); // 正负取整
            if (obj.offsetLeft == target) {
                clearInterval(obj.times);
                // 回调函数写到定时器结束后
                if (callback) {
                    callback();
                }
            }
            // 缓动动画效果
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    }
})