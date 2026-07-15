const menuBtn = document.querySelector("#menu-btn");
const sections = document.querySelector("#sections");

menuBtn.addEventListener("click",()=>{
    sections.classList.toggle("show");
});