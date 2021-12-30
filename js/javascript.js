
function drawTtems(productItems){
    let productsDom=productItems.map((item)=>{
        return `
        <div class="product-item" style="border:${item.isMe===true? "2px solid green ":""}">
                         <img class="product-item-img" src=${item.image} alt="">
                         <div class="product-item-desc">
                        <a onclick=productDetails(${item.id})>${item.title}</a>
                       <p >${item.desc}</p>
                         <span class="product-item-price">${item.price}</span>
                         ${ item.isMe===true ? "<button class='edit-product' onclick= editProduct("+item.id+")> edit product</button>":""}
                      
                      </div>
                         <div class="product-item-action">
                          <button class="add-cart" onclick="addProducts(${item.id})"> add to cart </button>
                          <i onclick="addFav(${item.id})" class="icon far fa-heart" style="color:${item.liked===true?"red":"black"}"></i>
                        </div>

                     </div>
        
        `
    })
    document.querySelector(".products").innerHTML=productsDom.join("");
    }
    
    drawTtems(JSON.parse(localStorage.getItem("products-item"))||products);

  // let allItems=[];
  function addProducts(id){
  if(localStorage.getItem("user_name"))
  {
    
    let productChoosen=productss.find((item)=>
    {return item.id===id})
      
    let item1 =allItems.find((x)=> x.id===productChoosen.id
      
    );
    if (item1){
      allItems.map((item)=>{
        if(item.id==productChoosen.id )
        item.qnt+=1;
      })
    }
    else{
      allItems.push(productChoosen);
    }

  userProducts.innerHTML="";
  allItems.forEach((item)=>{
    userProducts.innerHTML+=`
  <p>${item.title}(${item.qnt})</p>
  `
  });
  // addedItems=[...addedItems,productChoosen];
  userProductsDom.style.display="block";
  let cartItem=document.querySelectorAll(".user-products div p");
  proNum=cartItem.length;
  proNumDom.style.display="block";
  proNumDom.innerHTML=proNum ;
   localStorage.setItem("productsInCart",JSON.stringify(allItems));
  
}
  else{
      window.location="login.html" ;
  }
}
function productDetails(id){
  localStorage.setItem("product-id",id);
  console.log(id);
  window.location="productdetails.html";
}
function searchItem(title,myArray){
myProduct=myArray.filter(item=>item.title.indexOf(title)!=-1)
drawTtems(myProduct);

}    

let search=document.querySelector(".search");
search.addEventListener("keyup",function(e){
  
 
   searchItem(search.value,productss);
  
  if(search.value.trim()=="")
  {
    drawTtems(productItems);
  }
})
//add favorite

let vafItems=JSON.parse(localStorage.getItem("vaf_items"))?JSON.parse(localStorage.getItem("vaf_items")):[];
function addFav(id){
 let productChoosen= productss.find(item=>item.id===id);
 productChoosen.liked=true;
 vafItems=[...vafItems,productChoosen];
 let uniqVafItems =uniqBy(vafItems,"id");
 localStorage.setItem("vaf_items",JSON.stringify(uniqVafItems));
 productss.map((item)=>{
   if(item.id===productChoosen.id)
   {item.liked=true;}
})
localStorage.setItem("products-item",JSON.stringify(productss));

 drawTtems(productss);

}
function uniqBy(arr, key) {
  let arr1=arr.map((item)=>item[key]).map((item,i,final)=>final.indexOf(item)===i && i).filter((item)=>arr[item]).map((item)=>arr[item]);
  
    return arr1;
}
function editProduct(id){
  localStorage.setItem("editProduct",id);
  window.location="editProduct.html";
}