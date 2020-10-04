$(function() {

    load();
    // 11111  把数据保存到本地储存；利用对象keyCode判断用户按下回车（13）键。
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() == "") {
                alert("请输入内容");
            } else {
                var local = getData();
                local.push({ title: $(this).val(), done: false });
                saveData(local);
                load();
                $(this).val("");
            }
        }
    });
    // 22222  删除操作
    $("ol,ul").on("click", "a", function() {
        var data = getData();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveData(data);
        load();

    });
    // 33333  打对勾就放到已完成下面
    $("ol,ul").on("click", "input", function() {
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        load();

    });





    //获取本地存储的数据
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    };
    // 保存本地存储的数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    };
    // 渲染加载页面
    function load() {
        var data = getData();
        $("ol,ul").empty();
        var todocount = 0;
        var donecount = 0;
        $.each(data, function(i, n) {
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a> </li>")
                donecount++;
            } else {
                $("ol").prepend("<li><input type='checkbox'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a> </li>")
                todocount++;
            }
        });
        $("#todocount").text(todocount);
        $("#donecount").text(donecount);
    };
})