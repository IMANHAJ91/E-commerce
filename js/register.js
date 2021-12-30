let user_name =document.querySelector("#user_name");
let user_password =document.querySelector("#user_password");
let user_email=document.querySelector("#user_email")
let registerBtn =document.querySelector("#register_btn");
registerBtn.addEventListener("click",function(e){
    if (user_name.value=="" || user_password.value=="" || user_email.value=="")
    {
        window.alert("please enter values");
    }
   
    else{
     e.preventDefault();
    localStorage.setItem("user_name",user_name.value);
    localStorage.setItem("user_email",user_email.value)
    localStorage.setItem("user_password",user_password.value);
    setTimeout(function(){
        window.location="login.html";
    },1500)
    }
})