
function Tab(that){//第二步，创建一个类
    this.that = that;
    this.opts = {
        btns:['体育','新闻','娱乐','游戏'],
        contents:['100米跨栏','江歌事件','黄晓明被骂','王者荣耀新赛季'],
        ani:false
    }
}

//写方法
$.extend(Tab.prototype,{
    init:function(opt){
        $.extend(this.opts,opt);
        this.createBtns();
        this.createDivs();
        this.changeBtn();
    },
    createBtns:function(){
        this.opts.btns.forEach((e,i)=>{
            this.that.append($(`<button class="${i==0?'active':''}">${e}</button>`));
        });
    },
    createDivs:function(){
        this.opts.contents.forEach((e,i)=>{
            this.that.append($(`<div class="${i==0?'show':''}">${e}</div>`));
        });
    },
    changeBtn:function(){
        var btn = this.that.find('button');
        var div = this.that.find('div');
        var speed = this.opts.ani?800:0;

        btn.on('click',function(){
            $(this).addClass('active').siblings('button').removeClass('active');
            // div.eq($(this).index('button')).addClass('show').siblings('div').removeClass('show');
            div.eq($(this).index('button')).show(speed).siblings('div').hide(speed);
        });
    }
})

//第一步.定义一个tabs
$.fn.extend({
    tabs:function(opt){
        var t = new Tab(this);
        t.init(opt);
    }
})
