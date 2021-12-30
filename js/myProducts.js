  let allProducts=JSON.parse(localStorage.getItem("products-item"))||productItemsDB;
  let myProducts=allProducts.filter(item=>item.isMe===true)||[];
  localStorage.setItem("my-products",JSON.stringify(myProducts));
  console.log(myProducts);
  function drawMyProducts(myProducts){
    if(myProducts.length!=0){
      let productsDom=myProducts.map(function(item){
        return `
        <div class="product-item">
        <img class="product-item-img" src=${item.image} alt="">
        <div class="product-item-desc">
        <h2 class="product-item-title">${item.title}</h2>
        <p >Lorem ipsum dolor sit amet consectetur.</p>
        <span class="product-item-price">${item.price}</span>
        </div>
        <div class="product-item-action">
         <button class="add-cart"  onclick="editProduct(${item.id})"> edite product </button>
         <button class="add-cart"  onclick="deletProduct(${item.id})"> delet product </button>
         <i class="far fa-heart"></i>
       </div>
    
    </div>
    
    
        `;})
        document.querySelector(".my-products").innerHTML=productsDom;
    }
    else{
      document.querySelector(".my-products").innerHTML="THERE IS NO ITEMS";

    }
  }
  drawMyProducts(myProducts);

  function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location="editProduct.html";
  }
function deletProduct(id){

 let filterd=myProducts.filter(item=>item.id!=id);
console.log(filterd);
localStorage.setItem("my-products",JSON.stringify(filterd));
let products=allProducts.filter(item=>item.id!=id);
localStorage.setItem("products-item",JSON.stringify(products));
drawMyProducts(JSON.parse(localStorage.getItem("my-products")));
myProducts=filterd;
allProducts=products;
}


