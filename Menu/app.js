const navSlide=()=>{
const menu= document.querySelector('.menu')
const nav = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li ')
menu.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
})

navLinks.forEach((link ,index)=>{
    link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 }s`;
    console.log(index/7);
})

}

navSlide()