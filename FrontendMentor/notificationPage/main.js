const mark = document.querySelector(".not-mark");
const angela = document.querySelector(".not-angela");
const jacob = document.querySelector(".not-jacob");
const dotm  = document.querySelector(".m");
const dota  = document.querySelector(".a");
const dotj  = document.querySelector(".j");
const counter =document.querySelector("#number");
const markAll =document.querySelector("#markAll");
const notification =document.querySelector(".notificactionUnread");
const dot = document.querySelector(".redDot")
contador = 3;

mark.onclick = function () {
    contador--;
    counter.textContent=contador;
    mark.style.backgroundColor = 'white';
    dotm.style.display= 'none'
}

angela.onclick = function () {
    contador--;
    counter.textContent=contador;
    angela.style.backgroundColor = 'white';
    dota.style.display= 'none'
}

jacob.onclick = function () {
    contador--;
    counter.textContent=contador;
    jacob.style.backgroundColor = 'white';
    dotj.style.display= 'none'
}

markAll.onclick = function () {
    mark.style.backgroundColor = 'white';
    angela.style.backgroundColor = 'white';
    jacob.style.backgroundColor = 'white';
    dotm.style.display= 'none'
    dota.style.display= 'none'
    dotj.style.display= 'none'
}

