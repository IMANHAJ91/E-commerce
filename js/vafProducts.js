let vafProducts=JSON.parse(localStorage.getItem("vaf_items"));
let vafProductsDom=document.querySelector(".vaf-products");
function drawVafItems(vafProducts){
 if (vafProducts.length!=0)
{
  let vafItems = vafProducts.map(function (item){
    return `
    <div class="product-item">
    <img class="product-item-img" src=${item.image} alt="">
    <div class="product-item-desc">
    <h2 class="product-item-title">${item.title}</h2>
    <p >${item.desc}</p>
    <span class="product-item-price">${item.price}</span>
    </div>
    <div class="product-item-action">
    <button class="add-cart" onclick="removefromVaf(${item.id})"> remove from vaforite  </button>

         <i class="far fa-heart" style="color:${item.liked===true?"red":"black"}"></i>
     </div>
</div>


    `;

  })
  vafProductsDom.innerHTML=vafItems.join("");
}
else{
  vafProductsDom.innerHTML=`<p> THERE IS NO  FAVORITE ITEMS </p>`;
}
}
drawVafItems(vafProducts);
function removefromVaf(id){
  let vafProducts=JSON.parse(localStorage.getItem("vaf_items"));
     let filtered= vafProducts.filter((item)=>{
     return item.id!=id ;
 })
 localStorage.setItem("vaf_items",JSON.stringify(filtered));
drawVafItems(filtered);
 productss.map((item)=>{
if(item.id==id){
  item.liked=false;
}}
 )
 localStorage.setItem("products-item",JSON.stringify(productss));
}
