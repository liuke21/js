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
var goods=document.getElementById("liukele").getElementsByTagName("ul")
var tabsr=document.getElementById("tabsr").getElementsByTagName("li")

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

/* window.addEventListener("scroll",function(){
	if(window.scrollY>=movv.offsetTop){
		movv.className="sec-nav active";
	}else{
		movv.className="sec-nav"
	}


}) */
/* window.onscroll=function(){
	var scrolltop=document.documentElement.scrollTop
	if(scrolltop>263){
		movv.className="sec-nav active";
	}else{
		movv.className="sec-nav"
	}
} */
window.addEventListener("scroll",function(){
	if(window.scrollY<=264){
		movv.className="sec-nav"
	}else{
		movv.className="sec-nav active"
	}
	/* console.log(window.scrollY) */
})
