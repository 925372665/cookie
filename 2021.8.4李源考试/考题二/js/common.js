function $(css,el){
	el = el || document;
	return el.querySelector(css);
}

function _(css,el){
	el = el || document;
	return el.querySelectorAll(css);
}

//头部
function getRequest(){
	var xmlHttp;
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	return xmlHttp;
}

function ajax(url,callback){
	var xmlHttp = getRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			//JSON.parse 将字符串转成json
			callback(JSON.parse(xmlHttp.responseText));
		}
	}
	xmlHttp.open('GET',url,true);
	xmlHttp.send();
}

