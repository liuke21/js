var ite=document.getElementsByClassName("head-item")
var good=document.getElementsByClassName("goods")
var shop=document.getElementsByClassName("shopping")[0]
var uu=document.getElementsByClassName("th-nav-bar-head")

 for(var i=0;i<ite.length;i++){
	 ite[i].hover=showlit;

 }
 function showlit(){

		 for(var i=0;i<ite.length;i++){
		 	if(ite[i]==this){
		 		good[i].className="goods active"
		 		shop.className="shopping active"
		 	}
		 	else{
		 		good[i].className="goods"
		 	}
		 }
 }
