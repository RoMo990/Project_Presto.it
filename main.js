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

// cattura link main navbar
let myLink = document.querySelectorAll('.myLink');

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

        // evento link navbar
        myLink.forEach((el)=>{

            el.classList.add('text-primaryC');
            el.classList.remove('myLink');

        })        

        mainNavbar.style.padding = '20px 0px';

    } else{

        mainNavbar.classList.remove('background-blackC');
        mainNavbar.classList.add('bg-transparent');
        logoOrange.classList.remove('d-none');
        logoWhite.classList.add('d-none');
       
        // evento link navbar
        myLink.forEach((el)=>{

            el.classList.remove('text-primaryC');
            el.classList.add('myLink');

        })
        
        mainNavbar.style.padding = '10px 0px';

    }

})


// CHIAMATA ASINCRONA

// cattura span numero 0
let firstSpan = document.querySelector('#firstSpan');

let secondSpan = document.querySelector('#secondSpan');

let thirdSpan = document.querySelector('#thirdSpan');

// funzione chiamata asincrona
function createInterval(finalNumber, element){

    let counter = 0;

    let interval = setInterval( ()=>{

        if(counter < finalNumber){

            counter++

            element.innerHTML = counter;

        } else {

            clearInterval(interval);

        }

    }, 0.5)

}


// INTERSECTION OBSERVER

// variabile d'appoggio
let checkInterval = false;

// cattura h2 section aos
let h2Section = document.querySelector('#h2Section');

// funzione intersection observer
let observed = new IntersectionObserver(

    (entries)=>{

        entries.forEach( (entry)=>{

            if(entry.isIntersecting && checkInterval == false){

                createInterval(1200, firstSpan);
                createInterval(250, secondSpan);
                createInterval(1500, thirdSpan);

                checkInterval = true;

            } 

        })

    }

)

observed.observe(h2Section);