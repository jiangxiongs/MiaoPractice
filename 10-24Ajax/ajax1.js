function ajax(url,method,data,callback){//地址，类型，数据，要做的事
	//创建一个新的对象
	var ajax = new XMLHttpRequest;
	//填写地址
	ajax.open(method,url+'?'+data,true);
	//发送服务器
	ajax.send();
	//等待
	ajax.onload = function(){
		//通话
		console.log(ajax.responseText);
	}
}
