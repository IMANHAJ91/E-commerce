let productId=JSON.parse(localStorage.getItem("editProduct"));
let productsss=JSON.parse(localStorage.getItem("products-item"));
let editProductss=productsss.find(item=>item.id===productId);

let createProductName=document.querySelector(".create-product-name");
createProductName.value=editProductss.title;
let createProductDesc=document.querySelector(".create-product-desc");
createProductDesc.value=editProductss.desc;
let createProductPrice=document.querySelector(".create-product-price");
createProductPrice.value=editProductss.price;
let updateProductForm=document.querySelector(".create-product-form");
let upLoad =document.querySelector(".create-product-image");
upLoad.addEventListener("change",uploadFile);
updateProductForm.addEventListener("submit",updateProduct);
let preview=editProductss.image;
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
    function updateProduct(e){
        e.preventDefault();
        editProductss.title=createProductName.value;
        editProductss.price=createProductPrice.value;
        editProductss.desc=createProductDesc.value;
        editProductss.image=preview;
        localStorage.setItem("products-item",JSON.stringify(productsss));
       setTimeout(() => {
        window.location="index.html"; 
       }, 500);
        
    }

