var movv=document.getElementById("movv")

var staticc=document.getElementById("static")

	
var show=function(){
	movv.className="tn active"
}
var hide=function(){
	movv.className="tn"
}
window.addEventListener("scroll",function(){
	if(window.scrollY<=staticc.offsetHeight){
		hide();
	}else{
		show();
	}
	
	/* console.log(staticc.offsetHeight) */
})