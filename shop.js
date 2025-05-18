


// This is the section for the night and light mode stickers 

    // this is the part of the js code that brings forth the button used to 
    // toggle between the 2 themes of dark and light mode
const themeFROST = document.getElementById('theme');
    // After it has gotten the element by its ID theme it will get the image inside of it
    // keeping in mind there are 2 seperate images of both the light and dark modes
const themestickersFROST = document.getElementById('themesticker');

function themeforthewebpage() {

    // function themes is the function being declared as the page starts to load
    const changedatheme = document.getElementById('theme');

    // This part uses matchmedia api to conclude if the user is currently using dark
    // or light mode
    const previouspick = window.matchMedia('(userpicks:dark)').matches;

    const currentTheme = changedatheme || (previouspick ? 'dark' : 'light' );

    if (currentTheme ==='dark') {

        document.documentElement.setAttribute('data-theme', 'dark');
        // This part makes sure if the chosen theme is dark
        // if it is then it will show the light mode sticker so the user can click that
        // if they want to change the theme
        themestickersFROST.image ='stickers/lightmode.png';

    }   else {  
        document.documentElement.setAttribute('data-theme', 'light');
        // if not then the theme stays on light mode and the image shown will be the dark mode on
        // encouraging the user to change between them 
        themestickersFROST.image ='stickers/darkmode.png';
    }
}

themeFROST.addEventListener('click', () => {
    // This detects if the user has clicked the frost toggle theme button and changes the background and rest of the colors accordingly
    const currentmode = document.documentElement.getAttribute('data-theme');

    if (currentmode ==='dark') {

        document.documentElement.setAttribute('data-theme', 'light');

        // if there is a click on the darkmode sticker then the theme changes to light
        localStorage.setItem('theme', 'light');
        themestickersFROST.image = 'stickers/darkmode.png';

    }   else {
        document.documentElement.setAttribute('data-theme', 'dark');
        // If not then it stays the same and displays the lightmode sticker
        localStorage.setItem('theme', 'dark');
        themestickersFROST.image = 'stickers/lightmode.png';

    }
});

themeforthewebpage();

window.matchMedia('(userpicks: dark)').addEventListener('change', (yurp) => {
    if (!localStorage.getItem('theme')) {
        if (yurp.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themestickersFROST.image = 'lightmode.png';
        }   else {
            document.documentElement.removeAttribute('data-theme');
            themestickersFROST.image = 'lightmode.png';
        }
    }
});


// For the slide in texts

const verifycontainer = document.querySelectorAll('.verifycontainer');
const descripcontainer = document.querySelectorAll('.descripcontainer');
const conditionscontainer = document.querySelectorAll('.conditionscontainer');

// This is where the slide in effect takes places where the item is translated from either X or Y 
// and depending on the input placed in the css files.
// The effect works when .show is added alongside the name of a given element or tag to bring back the element or item to its original place and
// increase the opacity so it can be seen again

const ob = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    }); 
});

verifycontainer.forEach(el => ob.observe(el));
descripcontainer.forEach(el => ob.observe(el));
conditionscontainer.forEach(el => ob.observe(el));


// This section showcases the hidden information that can only been seen when clicked upon
const watches = [
    {
        name: "Chronograph Platinum Green",
        type: "Automatic",
        price: "$91,850",
        company: "Patek Philippe",
        size: "39.5mm",
        image: "images/watches/PatekPhilippeGreen.png",
        description: "World Time. 24-hour and day/night indication for the 24 time zones. Sapphire crystal glass and power reserve up to 55 hours, water resistant up to 30m."

    },
    {
        name: "Reverso One Duetto",
        type: "Steel",
        price: "$11,800",
        company: "Coulter",
        size: "42.5mm",
        image: "images/watches/Reversoone.png",
        description: "With the Reverso One Duetto in steel, the possibilities are multiplied."

    },
    {
        name: "1970 Omega De Ville",
        type: "Steel",
        price: "$1,800",
        company: "Omega",
        size: "42.0mm",
        image: "images/watches/omega.png",
        description: "Gold plated."

    },
    {
        name: "Seiko 5 Black",
        type: "mechanical",
        price: "$4,000",
        company: "Seiko",
        size: "44.0mm",
        image: "images/watches/blackseiko.png",
        description: "The bracelet has a butterfly buckle, safer than the simple buckle, and more practical everyday."

    },
    {
        name: "Octo Finissimo",
        type: "Automatic",
        price: "$15,000",
        company: "Bvlgari",
        size: "40.0mm",
        image: "images/watches/bvlgari.png",
        description: "A true icon of the 21st century, the Octo Finissimo Automatic watch channels the rare fusion of edgy Italian design and Swiss engineering with its innovative satin-polished finishes."

    },
    {
        name: "Tank Louis Cartier",
        type: "Automatic",
        price: "$21,000",
        company: "Cartier",
        size: "32.0mm",
        image: "images/watches/cartierred.png",
        description: "Tank Louis Cartier watch, large model, Manufacture mechanical movement with manual winding. "

    },
    {
        name: "J12 White",
        type: "Ceramic",
        price: "$17,300",
        company: "Chanel",
        size: "33.0mm",
        image: "images/watches/chanel.webp",
        description: "An icon of CHANEL Watchmaking, the J12 in white ceramic is equipped with the Caliber 12.1 or Caliber 12.2*, self-winding movements produced by the Swiss Manufacture Kenissi, co-owned by CHANEL."

    },
    {
        name: "Vert Quartz Diesel",
        type: "Ceramic",
        price: "$1,850",
        company: "Diesel",
        size: "44.0mm",
        image: "images/watches/desiel.png",
        description: "Elevate your style with the Men Vert Quartz Watch, featuring a sleek 44mm silver dial and strap."
    },
];

// these are all the information related to specific watches

// ring keeps track of the amount of watches being displayed

let ring = 0;

// loaditems will only load 5 watches at a time, even when clicked the load more button
const loaditems = 5;

// all watches their cards and information are placed in the grid container in html 
const grid = document.getElementById("grid");



function infoonallwatches(watch) {
    const card = document.createElement("div");
    // This creates a new div to add all information down below
    card.className = "watchbox grid";
    card.setAttribute("data-name", watch.name);
    card.setAttribute("data-price", watch.price);
    card.setAttribute("data-type", watch.type);
    card.setAttribute("data-company", watch.company);
    card.setAttribute("data-size", watch.size);
    card.setAttribute("data-description", watch.description);
    card.setAttribute("data-image", watch.image);

    card.innerHTML = `
    <img src="${watch.image}" />
    <div class="title">${watch.name}</div>
    <div class="price">${watch.price}</div>`;

    return card;

}

function loadmore() {
    const moreitems = watches.slice(ring, ring + loaditems);
    // This function is used when the load more button is pressed and loads 5 more watches and
    // their information accordingly
    moreitems.forEach(watch => {
        grid.appendChild(infoonallwatches(watch));

    });
    ring+= loaditems;
}

document.getElementById("loadmorebutton").addEventListener("click", loadmore);
// This waits to observe if the loadmorebutton gets pressed or not 
window.onload = loadmore;
// This loads the first set of watches onto the page
const productwatch = document.getElementById("productwatch");

const watchImage = document.getElementById("watchImage");

const watchName = document.getElementById("watchName");

const watchPrice = document.getElementById("watchPrice");

const watchType = document.getElementById("watchType");

const company = document.getElementById("company");

const size = document.getElementById("size");

const watchdescription = document.getElementById("watchdescription");

const closebutton = document.getElementById("closebutton");

const heartbutton = document.getElementById("heartbutton");
// All these are used for the elements inside the hidden display that showcases all the watches



function showwatch(data) {

    watchImage.src = data.image;
    watchName.textContent = data.name;
    watchPrice.textContent = data.price;
    watchType.textContent = data.type;
    company.textContent = data.company;
    size.textContent = data.size;
    watchdescription.textContent = data.description;
    // This showcases all information and hides the hidden element so the display can
    // be seen
    productwatch.classList.remove("hidden")
}


// adds back the hidewatch function so that the user can view more watches once they have clicked x.
function hidewatch() {
    productwatch.classList.add("hidden");
}

closebutton.addEventListener("click", hidewatch);
heartbutton.addEventListener("click",() => {
    heartbutton.classList.toggle("like");
});
// if the heart button is clicked the .like class is toggled which
// then changes the color of the heart to maroon
grid.addEventListener("click", (e) => {
    const card = e.target.closest(".watchbox");
    if (!card) return;
    const data = {
        name:card.dataset.name,

        price:card.dataset.price,
        type:card.dataset.type,

        company:card.dataset.company,
        size:card.dataset.size,
        image:card.dataset.image,
        description:card.dataset.description,
    };
    // when a specific watch is clicked then all this data above
    // is showcased 
    showwatch(data);
});


