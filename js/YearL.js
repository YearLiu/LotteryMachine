function getId(id,f){
	var f = arguments[1]?arguments[1]:document;
	return f.getElementById(id);
}

function getTag(tag,f){
	var f = arguments[1]?arguments[1]:document;
	if(f.getElementsByTagName(tag).length > 1) return f.getElementsByTagName(tag);
	else return f.getElementsByTagName(tag)[0];
}
function getClass(CLASS,f){
	var f = arguments[1]?arguments[1]:document;
	var all = f.getElementsByTagName('*');
	var Class = [];
	for(var i = 0 ; i < all.length ; i ++ ){
		if(all[i].className == CLASS) Class.push(all[i]);
	}
	if(Class.length > 1) return Class;
	else return Class[0];
}
function getChild(n,f){
	var f = arguments[1]?arguments[1]:document;
	var all = f.childNodes;
	var list = [];
	for(var a = 0 ; a < all.length ;a++){
		if(all[a].nodeName != '#text') list.push(all[a]);
	}
	return list[n-1];
}
function RGB(){//随即颜色
	var rgbArr = [];
	for(var i = 0; i <3 ;i++){
		rgbArr[i] = Rdm(0,255);
	}
	return 'rgb(' + rgbArr +')';
}

function Rdm(min,max){//随机整数
	return Math.floor(Math.random()*(max  + 1 - min ) + min);
}
function comArr(list1,list2){
	if(list1.length != list2.length){
		return false;
	}
	for(var n = 0 ; n < list1.length ; n++){
		if((list1[n] instanceof Array) && (list2[n] instanceof Array)){
			if(!comArr(list1[n],list2[n])) { console.log(1); return false;}
		}
		else if(list1[n] != list2[n]) { console.log(2); return false;}
	}
	console.log(3);
	 return true;
}
function newElementList(n,element,f){
	this.father = arguments[2]?arguments[2]:document.body;
	this.list = [];
	for(var i = 0;i < n;i++){
		this.list[i] = document.createElement(element);
		this.list[i] = this.father.appendChild(this.list[i]);
	}
	// return this.list;
	this.getList = function(){
		return this.list;
	}
	this.gatElement = function(n){
		return this.list[n];
	}
	this.set = function(data){
		for(var n = 0;;n++){
			if(data[n] == ':') break;
			if(n == data.length-1) return alert("false");
		}
		var s = data.substring(0,n);
		var d = data.substring(n+1,data.length);
		console.log(s,d);
		switch(s){
			case 'float' :
				for(var i = 0 ; i < this.list.length ; i++){
					this.list[i].style.float = d;
				}
			break;
			case 'background':
				for(var i = 0 ; i < this.list.length ; i++){
					this.list[i].style.background = d;
				}
			break;
			case 'border':
				for(var i = 0 ; i < this.list.length ; i++){
					this.list[i].style.border = d;
				}
			break;
			case 'width':
				for(var i = 0 ; i < this.list.length ; i++){
					this.list[i].style.width = d;
				}
			break;
			case 'height':
				for(var i = 0 ; i < this.list.length ; i++){
					this.list[i].style.height = d;
				}
			break;
			default:
				alert("false");
			break;
		}
	}
}
