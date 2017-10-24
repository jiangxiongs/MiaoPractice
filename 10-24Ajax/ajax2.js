function ajax(url,mothed,data,callabck){
	var ajax = new XMLHttpRequest;
	
	if(mothed === 'get'){
		ajax.open('get',url+'?'+data,true);
		ajax.send();
	}else if(mothed === 'post'){
		ajax.open('post',url,true);
		jax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		ajax.send(data);
	}
	
	ajax.onload = function(){
		callabck(ajax.responseText);
	}
}
