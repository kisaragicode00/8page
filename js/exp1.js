//定义确保函数在页面加载完毕时执行的函数addLoadEvent
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
//定义事件处理函数
function prepareGallery(){
	if(!document.getElementsByTagName || !document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i=0; i < links.length; i++) {
		links[i].onclick = function(){
			return showPic(this) ? false : true;	
		}
	}
}
//确保触发函数在页面加载完毕时才可执行
addLoadEvent(prepareGallery);
//定义图片切换函数
function showPic(wihchpic){
	if(!document.getElementById("placeholder")) return false;
	var sorce = wihchpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",sorce);
	if(document.getElementById("description")) {
		var text = wihchpic.getAttribute("title") ? wihchpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	}
	return true;
}
