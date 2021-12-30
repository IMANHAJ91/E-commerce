
 
function drawCartProdcts(allProducts=[]){
    if(JSON.parse(localStorage.getItem("productsInCart")).length !=0)
    {
        
    let products=JSON.parse(localStorage.getItem("productsInCart"))||allProducts;
    let productsDom=products.map(function(item){
        return `
        <div class="product-item">
        <img class="product-item-img" src=${item.image} alt="">
        <div class="product-item-desc">
        <h2 class="product-item-title">${item.title}(${item.qnt})</h2>
        <p >Lorem ipsum dolor sit amet consectetur.</p>
        <span class="product-item-price">${item.price}</span>
        </div>
        <div class="product-item-action">
         <button class="add-cart" onclick="removefromcart(${item.id})"> remove from cart </button>
         <i class="far fa-heart"></i>
       </div>
    
    </div>
    
    
        `;
    });
    document.querySelector(".products-cart").innerHTML=productsDom.join("");
    }
    else
    {
        document.querySelector(".products-cart").innerHTML=`<p> THERE IS NO ITEMS </p>` ;
    }
}
drawCartProdcts();
function removefromcart(id){
    let productsInCartDom=JSON.parse(localStorage.getItem("productsInCart"));
       let filteredProducts= productsInCartDom.filter((item)=>{
       return item.id!=id ;
   })
   localStorage.setItem("productsInCart",JSON.stringify(filteredProducts));
   drawCartProdcts(filteredProducts);
   
   if(filteredProducts.length!=0){
            proNum=filteredProducts.length;
        proNumDom.style.display="block";
       proNumDom.innerHTML=proNum ;
  
         }
         if(filteredProducts.length==0){
          proNumDom.style.display="none";
          userProducts.innerHTML="";
                
     }


   
}