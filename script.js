/* TYPING EFFECT */
const text="Frontend Developer";
let i=0;
function typing(){
if(i<text.length){
document.querySelector("h3").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,120);
}
}
typing();

/* REVEAL ON SCROLL */
const reveals=document.querySelectorAll(".section,.getintouch");

window.addEventListener("scroll",()=>{
reveals.forEach(r=>{
if(r.getBoundingClientRect().top < window.innerHeight-120){
r.classList.add("active");
}
});
});

/* NAV ACTIVE GLOW */
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{
let fromTop=window.scrollY+120;
navLinks.forEach(link=>{
let sec=document.querySelector(link.hash);
if(sec && sec.offsetTop<=fromTop && sec.offsetTop+sec.offsetHeight>fromTop){
link.style.color="#00ffd5";
}else{
link.style.color="white";
}
});
});

/* MOBILE MENU CLOSE */
navLinks.forEach(link=>{
link.addEventListener("click",()=>{
document.querySelector("nav ul").classList.remove("open");
});
});
