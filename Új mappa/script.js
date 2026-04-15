function AlignItems(){
let value = document.getElementById("align-items").value;

}

function AlignContent(){
let value = document.getElementById("align-content").value;
document.getElementById("container").setAttribute("style", "align-items:"+value+";");

}