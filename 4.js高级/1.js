// 切换，添加，删除，修改。。。。

var that;
class Tab {
    constructor(id) {
        that = this;
        this.box = document.querySelector(id);

        this.addtabs = this.box.querySelector('.tabadd');
        this.ul = this.box.querySelector('.f_nav ul:first-child');
        this.tabscon = this.box.querySelector('.tabscon');
        this.init();
    }

    // 初始化操作 绑定操作
    init() {
            this.updateNode();
            this.addtabs.onclick = this.addTab;

            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                // ........................................
                this.lis[i].onclick = this.toggleTab;
                this.removes[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;
            }
        }
        // 动态获取li和section和remove    每次新增的动态内容都有封装在一个函数里
    updateNode() {
        this.lis = this.box.querySelectorAll('li');
        this.sections = this.box.querySelectorAll('section');
        this.removes = this.box.querySelectorAll('.removes');
        this.spans = this.box.querySelectorAll('.f_nav li span:first-child');

    }



    // 1.切换
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';

    }
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        // 2.添加 用insertAdjacentHTML。 
    addTab() {
            that.clearClass();
            var li = '<li class="liactive"><span>新</span> <span class="removes"*> **</span></li>';
            var sections = '<section class="conactive">测试新的</section>';
            that.ul.insertAdjacentHTML('beforeend', li);
            that.tabscon.insertAdjacentHTML('beforeend', sections);
            that.init();
        }
        // 3.删除
    removeTab(e) {
            e.stopPropagation();
            var index = this.parentNode.index;
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            // 删除未选中状态的li，原来的选中状态不变
            if (document.querySelector('.liactive')) return;
            // 删除选中状态的li，跳转到前一个li上
            index--;
            that.lis[index] && that.lis[index].click();
        }
        // 4.修改
    editTab() {
        // 双击禁止选定文字
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type = "text" />';

        var input = this.children[0];
        input.value = str;
        input.select();

        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e) {
            if (e.keyCode == 13) {
                this.blur();
            }
        }
    }
}
new Tab('#tab');