const btn=document.querySelector(".menu");
const navbarContext=document.querySelector(".navbarContext");
const main=document.querySelector(".main");
const navbar=document.querySelector('.navbar');
const mode=document.querySelector('#mode');

btn.addEventListener("click",()=>{
    navbarContext.classList.toggle("show");
})

mode.addEventListener("input",()=>{
    navbar.classList.toggle("navDark");
    main.classList.toggle("mainDark");
})