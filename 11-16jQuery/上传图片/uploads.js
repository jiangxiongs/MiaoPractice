
class upload{
    constructor(that){
        this.opts = {
            files:null;
        }
    }

    init(opt){
        Object.assign(this.opts,opt);
        if(this.opts.files){
            this.opts.files.change(function(){
                console.dir(this);

            });
        }else{

        }
    }
}



$.fn.extend({
    uploads(opt){
        let up = new upload(this);
        up.init(opt);
    }
})




数据，后台管理
