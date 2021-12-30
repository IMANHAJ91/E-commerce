let productID =JSON.parse(localStorage.getItem("product-id"));
let productsItem=JSON.parse(localStorage.getItem("products-item"));
let productDom=document.querySelector(".product-details");
let productDetail=productsItem.find(item=>item.id==productID);
productDom.innerHTML=
`
<img class="imde" src="${productDetail.image}">
<h2>${productDetail.title}</h2>
<span>${productDetail.price}</span>
<button class="add-cart"  onclick="editProduct(${productDetail.id})"> edite product </button>
`
;
function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location="editProduct.html";
  }