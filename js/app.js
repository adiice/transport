/* Menu show */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/* Active and remove menu */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //use link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //hide menu - mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach( n=> n.addEventListener('click', linkAction))

/* scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/* scroll home */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
/*sr.reveal('.home__img',{delay: 400})  //na razie off szukam pomysłu na bg foto */
/*sr.reveal('.home__social-icon',{delay: 800})
sr.reveal('.home__social-icon',{interval: 400}) // wyłączone aż dodamy ikony social*/

/* scroll about */
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

/* scroll services */
sr.reveal('.services __subtitle',{})
sr.reveal('.services __text',{delay: 200})
sr.reveal('.services __data',{interval: 200})
sr.reveal('.services __img',{delay: 400})

/* scroll work */
sr.reveal('.work__img',{interval: 200})

/* scroll contact */
sr.reveal('.contact__input',{interval: 200})

/* hiding nav */

/* geting window height */
const onlineHeight = window.innerHeight; 
console.log(onlineHeight);

window.addEventListener("scroll", () =>{
    let navbar = document.querySelector("header");
    let positionY = window.scrollY;
    let sumY = positionY - 3rem;
    console.log(sumY);
    navbar.classList.toggle("navInMain", window.scrollY < onlineHeight);
})











