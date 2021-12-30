let getUser=localStorage.getItem("user_name");
let getEmail=localStorage.getItem("user_email");
let userDo=document.querySelector(".user-name");
let emailDo=document.querySelector(".user-email");
let productsDo=document.querySelector(".user-products span");
let productsALL=JSON.parse(localStorage.getItem("products-item"))||productItemsDB;
let mp=productsALL.filter(item=>item.isMe===true);
userDo.innerHTML=getUser;
emailDo.innerHTML=getEmail;
productsDo.innerHTML=mp.length;
document.querySelector(".btn").addEventListener("click",()=>{
window.location="editProfile.html";}
)