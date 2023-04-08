// MAIN NAVBAR

// cattura main navbar
let mainNavbar = document.querySelector('#mainNavbar');

// cattura link main navbar
let myLink = document.querySelectorAll('.myLink');

// cattura icona navbar
let navIcon = document.querySelector('#navIcon');

// cattura loghi
let logoOrange = document.querySelector('#logoOrange');

let logoWhite = document.querySelector('#logoWhite');

// evento click sul toggler
navIcon.addEventListener('click', ()=>{

    navIcon.classList.toggle('fa-rotate-180'); 

});

// evento scroll main navbar
window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-secondaryC');
        logoWhite.classList.remove('d-none');
        logoOrange.classList.add('d-none');

        // evento link navbar
        myLink.forEach((el)=>{

            el.classList.add('text-primaryC');
            el.classList.remove('myLink');

        })        

        mainNavbar.style.padding = '20px 0px';

    } else{

        mainNavbar.classList.remove('background-secondaryC');
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


// MOUSE ENTER

// cattura icona aereo
let iconAereo = document.querySelectorAll('.fa-plane-departure');

// cattura card
let colCustom = document.querySelectorAll('.col-custom');

// variabile d'appoggio
let columnsConfirm = false;

colCustom.forEach( (colonna, i)=>{

    // evento mouseenter
    colonna.addEventListener('mouseenter', ()=>{

        if(columnsConfirm == false){

            iconAereo[i].classList.remove('text-secondaryC');
            iconAereo[i].classList.add('text-whiteC');

        } else {

            iconAereo[i].classList.add('text-secondaryC');

        }

    })

    // evento mouseleave
    colonna.addEventListener('mouseleave', ()=>{

        if(columnsConfirm == false){

            iconAereo[i].classList.remove('text-whiteC');
            iconAereo[i].classList.add('text-accent');

            columnsConfirm = true;

        } else {

            iconAereo[i].classList.add('text-secondaryC');

            columnsConfirm = false;

        }       
        
    })

});