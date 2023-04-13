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

// NEGOZIO

fetch('./negozio.json').then( (response)=> response.json() ).then( (data)=> {

    // cattura wrapper radio buttons
    let categoryWrapper = document.querySelector('#categoryWrapper');

    // cattura wrapper delle card negozio
    let cardsWrapper = document.querySelector('#cardsWrapper');

    // funzione creazione radio buttons
    function setCategoryFilters(){

    let categories = data.map( (annuncio)=> annuncio.category );

    // array categorie non ripetute
    let uniqueCategories = [];

    categories.forEach( (category)=> {

        if(!uniqueCategories.includes(category)){

          uniqueCategories.push(category);  

          }

    })

    uniqueCategories.forEach( (category) =>{

        let div = document.createElement('div');

        div.classList.add('form-check');

        div.innerHTML = `
        
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                        <label class="form-check-label" for="${category}">
                            ${category}
                        </label>

        `;

        categoryWrapper.appendChild(div);

    })
    
    }

    setCategoryFilters();

    // funzione mostra cards
    function showCards(array){

        // svuotamento wrapper
        cardsWrapper.innerHTML = '';

        array.forEach( (element)=>{

            let div = document.createElement('div');

            div.classList.add('col-12', 'col-md-3', 'my-5');

            div.innerHTML = `
            
                            <div class="announcement-card">

                            <p class="h4">${element.name}</p>
                            <h4>${element.category}</h4>
                            <h4>${element.price} €</h4>

                            </div>

            `;

            cardsWrapper.appendChild(div);

        })

    }

    showCards(data);

    // funziona filtra per categoria al click radio buttons
    function filteredByCategory(categoria){

        if(categoria != 'All'){

            let filtered = data.filter( (annuncio)=> annuncio.category == categoria);

            showCards(filtered);

        } else {

            showCards(data);

        }
        

    }

    // cattura radio buttons
    let checkInputs = document.querySelectorAll('.form-check-input');

    checkInputs.forEach((checkInput)=>{

        checkInput.addEventListener('click', ()=>{

            filteredByCategory(checkInput.id);

        })

    })

})
