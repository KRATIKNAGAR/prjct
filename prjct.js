var radio1=document.getElementById("Email");
var radio2=document.getElementById("Phone");
var form=document.querySelector("form");

// radio1.addEventListener("click",function(){
// var addE=document.createElement("addE");
// addE.appendChild(document.createTextNode("Login through Email"));
// form.appendChild(addE);
// addE.type="Email"
// })

// radio2.addEventListener("click",function(){
// var addP =document.createElement("addP");
// addP.appendChild(document.createTextNode("Login through Phone.no"));
// form.appendChild(addP);
// addE.type="number"
// })							

radio1.addEventListener("click",function(){
var input = document.createElement('TEXTAREA');
input.setAttribute('name', 'post');
input.setAttribute('maxlength', 5000);
document.getElementById("body").innerHTML=input;
}
