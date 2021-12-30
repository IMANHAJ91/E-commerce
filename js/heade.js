let name1=localStorage.getItem("user_name");
let password1=localStorage.getItem("user_password");
let links=document.querySelector(".links");
let logOut=document.querySelector(".log_out");
let userProducts =document.querySelector(".user-products div");
let userProductsDom =document.querySelector(".user-products");
let cartDom=document.querySelector(".cart-dom")
 let proNumDom=document.querySelector(".pro-num");
 let allItems=localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")):[];
 let proNum;
 let products=productItemsDB;
 let productss=JSON.parse(localStorage.getItem("products-item"))||products;

if(name1){
  links.remove();  
 document.querySelector(".user-info").style.display="flex";
 document.querySelector(".user").innerHTML=name1;
}
logOut.addEventListener("click" , function(){
    setTimeout(function(){
    //   localStorage.setItem("user_name","");
        window.location="register.html" ;
    },1500)
})
 
function preperCart(){
  if(allItems){
    allItems.forEach(item => {
      userProducts.innerHTML+=`<p>${item.title}(${item.qnt})</p>`
        });
        proNum=allItems.length;
        proNumDom.style.display="block";
       proNumDom.innerHTML=proNum ;
  
         }
         if(allItems.length==0){
          proNumDom.style.display="none";
         
   }
}
preperCart();

cartDom.addEventListener("click",openMenu);
function openMenu(){
  if(cartDom.innerHTML !=" ")
  {
    if(userProductsDom.style.display=="block")
    {
      userProductsDom.style.display="none";
    }
    else{
      userProductsDom.style.display="block";
    }
  }

}
