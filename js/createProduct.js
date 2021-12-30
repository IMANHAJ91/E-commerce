
let createProductName=document.querySelector(".create-product-name");
let createProductDesc=document.querySelector(".create-product-desc");
let createProductPrice=document.querySelector(".create-product-price");
let createProductBtn=document.querySelector(".create-product-btn");
let createProductForm=document.querySelector(".create-product-form");
let preview;
let upLoad =document.querySelector(".create-product-image");
upLoad.addEventListener("change",uploadFile);
createProductBtn.addEventListener("click",createProduct);
let newProduct=[]
let productStorage=JSON.parse(localStorage.getItem("products-item"));
let allProducts=productItemsDB;
function createProduct(e){
 e.preventDefault();
 newProduct={
    id:JSON.parse(localStorage.getItem("products-item"))?JSON.parse(localStorage.getItem("products-item")).length+1:products.length+1,
      title:createProductName.value,
      desc:createProductDesc.value,
      image:preview ,
      price:createProductPrice.value,
      qnt:1,
      liked:false,
      isMe:true,
};
if(productStorage){
    productStorage=[...productStorage,newProduct];
    localStorage.setItem("products-item",JSON.stringify(productStorage));
}
else
{
 allProducts=[...allProducts,newProduct];
localStorage.setItem("products-item",JSON.stringify(allProducts));
}
createProductName.value="";
createProductDesc.value="";
createProductPrice.value="";
setTimeout(() => {
  window.location="index.html";
}, 500);
}
function uploadFile(){
let file=this.files[0];
getImage(file);
}
function getImage(file){
  let reader=new FileReader();
  reader.readAsDataURL(file);
  reader.onload=()=>{preview=reader.result;}
  reader.onerror=()=>{alert("errror !!");}
}