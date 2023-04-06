// ICONA NAVBAR

// cattura icona navbar
let navIcon = document.querySelector('#navIcon');

// evento click sul toggler
navIcon.addEventListener('click', ()=>{

    navIcon.classList.toggle('fa-rotate-180'); 

});


// MAIN NAVBAR

// cattura main navbar
let mainNavbar = document.querySelector('#mainNavbar');

// cattura loghi
let logoOrange = document.querySelector('#logoOrange');
let logoWhite = document.querySelector('#logoWhite');

// evento scroll main navbar
window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-blackC');
        logoWhite.classList.remove('d-none');
        logoOrange.classList.add('d-none');

        mainNavbar.style.padding = '20px 0px';

    } else{

        mainNavbar.classList.remove('background-blackC');
        mainNavbar.classList.add('bg-transparent');
        logoOrange.classList.remove('d-none');
        logoWhite.classList.add('d-none');  
        
        mainNavbar.style.padding = '10px 0px';

    }

})