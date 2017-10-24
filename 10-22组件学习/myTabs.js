class Tab {
	constructor(id){
		this.box = document.getElementById(id);
		//默认配置
		this.Settings = {
			btns:['新闻','体育','音乐','娱乐','游戏'],
            content:['什么时候能脱贫','夜王标枪得第一','双节棍','鹿晗和xx好','LOLS7'],
            events:'onclick'
		}
	}
	//json配置项
	init(json){
		//有配置走配置，没配置走默认
		this.Settings = Object.assign(this.Settings,json);
		//创建CSS
		this.createCss();
		//创建按钮
		this.createBtn();
		//创建内容
		this.createCont();
		//加事件
		this.Events(this.Settings.events);
	}
	createBtn(){
		this.Settings.btns.forEach((e,i)=>{
			let btn = document.createElement('button');
			btn.className = (i==0)?'active':'';
			btn.innerHTML = e;
			this.box.appendChild(btn);
			
		})
	}
	createCont(){
		this.Settings.content.forEach((e,i)=>{
			let divs = document.createElement('div');
			divs.className = (i==0)?'show':'';
			divs.innerHTML = e;
			this.box.appendChild(divs);
			
		})
	}
	Events(){
		this.btns = Array.prototype.slice.call(this.box.getElementsByTagName('button'));
		this.cont = Array.prototype.slice.call(this.box.getElementsByTagName('div'));
		
		this.btns.forEach((ele,i)=>{
			ele[event] = () =>this.tab(i);
		})
	}
	tab(index){
		this.btns.forEach((ele,i)=>{
			ele.className = '';
			this.cont[i].className = '';
		});
		this.btns[index].className = 'active';
		this.cont[index].className = 'show';
		
	}
	createCss(){
		const s = document.createElement('link');
		s.href = 'tabs.css';
		s.rel = 'stylesheet';
		document.getElementsByTagName('head')[0].appendChild(s);
	}
}
