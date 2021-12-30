let user_name =document.querySelector("#user_name");
let user_password =document.querySelector("#user_password");
let form =document.querySelector(".form");
let uname=localStorage.getItem("user_name");
let upassword=localStorage.getItem("user_password");
form.addEventListener("submit",function(e){
    if ((uname && uname===user_name.value)&&(upassword && upassword==user_password.value))
    {
        e.preventDefault();
           window.location="index.html";

    }
   
    else {
     alert("ERROR VALUES ");
    }
}
)

