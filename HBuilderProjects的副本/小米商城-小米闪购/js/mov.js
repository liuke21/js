var movv=document.getElementById("movv")

var static=document.getElementById("static")

	
var show=function(){
	movv.className="sec-nav active"
}
var hide=function(){
	movv.className="sec-nav"
}
window.addEventListener("scroll",function(){
	if(window.scrollY<=/* static.offsetHeight+ */static.offsetTop){
		hide();
	}else{
		show();
	}
	
	/* console.log(staticc.offsetHeight) */
})