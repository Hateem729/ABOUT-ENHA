/* Gallery Lightbox */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length) {

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

}
function vote(member){

document.getElementById("result").innerHTML =
"💜 Your Bias is <span style='color:#ff1744'>" + member + "</span> 💜";

}
const form = document.querySelector(".contact form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("💜 Thank you for supporting ENHYPEN! Your message has been received.");

form.reset();

});

}
/* Loader */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},3000);

});

/* Scroll Button */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
const playBtn = document.getElementById("playBtn");
const song = document.getElementById("song");

if(playBtn && song){

let playing = false;

playBtn.onclick = () => {

if(!playing){

song.play();

playBtn.innerHTML = "❚❚";

playing = true;

}else{

song.pause();

playBtn.innerHTML = "▶";

playing = false;

}

};

}
