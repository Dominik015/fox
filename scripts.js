const container = document.getElementById("container");

function AlignItems(){
var value = document.getElementById("align-items").value;
container.style.alignItems = value;

}

function AlignContent(){
var value = document.getElementById("align-content").value;
container.style.alignContent = value;

}

function FlexWrap(){
var value = document.getElementById("flexwrap").value;
container.style.flexWrap = value;

}

function Blur(){
container.classList.toggle("blur");

}

function Border() {
    var images = container.getElementsByTagName("img");
    
    for (let img of images) {
        img.classList.toggle("border");
    }
}

function Rotate() {
    var images = container.getElementsByTagName("img");
    
    for (let img of images) {
        img.classList.toggle("rotate");
    }
}

