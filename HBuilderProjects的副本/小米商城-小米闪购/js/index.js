/* var items=document.getElementsByClassName("na-item");
index=0;
var clear=function(){
	for(var i=0;i<10;i++){
		items[i].className="na-item"
	}
}
var goIndex=function(){
	clear();
	items[index].className="na-item active"
}

for(var i=0;i<10;i++){
items[i].addEventListener("click",function(){
	var getindex=this.getAttribute("data-index");
	index=getindex;
	goIndex();
})} */
var tabs=document.getElementById("tabs").getElementsByTagName("li")
var goods=document.getElementById("liukele").getElementsByTagName("ul")
var tabsr=document.getElementById("tabsr").getElementsByTagName("li")
for(var i=0;i<tabs.length;i++){
	tabs[i].onclick=showlist;
}
function showlist(){
	for(var i=0;i<tabs.length;i++){
		if(tabs[i]==this){
			tabs[i].className="active"
			tabsr[i].className="active"
			goods[i].className="goods active"
		}
		else{
			tabs[i].className=""
			tabsr[i].className=""
			goods[i].className="goods"
		}
	}
}
var index=0;
/* items[index].className="item active"; */
var clearactive=function(){
	for(var i=0;i<tabs.length;i++){
		tabs[i].className=""
		tabsr[i].className=""
		goods[i].className="goods"
	}
}
var goindex=function(){
	clearactive();
	tabs[index].className="active"
	tabsr[index].className="active"
	goods[index].className="goods active"
}
var gonext=function(){
	if(index<tabs.length-1){
	index++;}
	else{
		index=0;
	}
	goindex();
}
// setInterval(function(){
// 	gonext();
// },2000)



for(var i=0;i<tabsr.length;i++){
	tabsr[i].onclick=showlistr;
}
function showlistr(){
	for(var i=0;i<tabsr.length;i++){
		if(tabsr[i]==this){
			tabsr[i].className="active"
			goods[i].className="goods active"
		}
		else{
			tabsr[i].className=""
			goods[i].className="goods"
		}
	}
}


var movv=document.getElementById("movv")

var static=document.getElementById("static")


var show=function(){
	movv.className="sec-nav active"
}
var hide=function(){
	movv.className="sec-nav"
}
window.addEventListener("scroll",function(){
	if(window.scrollY<=264){
		hide();
	}else{
		show();
	}
	/* console.log(window.scrollY) */
	console.log(static.offsetTop)
})
