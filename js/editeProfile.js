
let userDom=document.querySelector(".user-name");
let emailDom=document.querySelector(".user-email");
userDom.value=localStorage.getItem("user_name");
emailDom.value=localStorage.getItem("user_email");
let preview=localStorage.getItem("image");

document.querySelector(".btn").addEventListener("click",edit)

function edit(e){
    e.preventDefault();
    localStorage.setItem("user_name",userDom.value);
    localStorage.setItem("user_email",emailDom.value);
  
    // document.querySelector(".pic").setAttribute("src",preview);
    window.location="profile.html";

}