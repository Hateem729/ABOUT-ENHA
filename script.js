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
