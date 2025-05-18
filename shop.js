


// This is the section for the night and light mode stickers 


const themeFROST = document.getElementById('theme');
const themestickersFROST = document.getElementById('themesticker');

function Themes() {
    const savedtheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme:dark').matches;
    const currentTheme = savedtheme || (systemPrefersDark ? 'dark' : 'light' );

    if (currentTheme === 'dark') {

        document.documentElement.setAttribute('data-theme', 'dark');
        themestickersFROST.src = 'stickers/lightmode.png';

    }   else {
        document.documentElement.setAttribute('data-theme', 'light');
        themestickersFROST.src = 'stickers/darkmode.png';
    }
}

themeFROST.addEventListener('click', () => {

    const currentmode = document.documentElement.getAttribute('data-theme');

    if (currentmode === 'dark') {

        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themestickersFROST.src = 'stickers/darkmode.png';

    }   else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themestickersFROST.src = 'stickers/lightmode.png';

    }
});

Themes();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (yurp) => {
    if (!localStorage.getItem('theme')) {
        if (yurp.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themestickersFROST.src = 'lightmode.png';
        }   else {
            document.documentElement.removeAttribute('data-theme');
            themestickersFROST.src = 'lightmode.png';
        }
    }
});




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

let index = 0;
const loaditems = 5;
const grid = document.getElementById("grid");

function createBox(watch) {
    const card = document.createElement("div");
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
    const moreitems = watches.slice(index, index + loaditems);
    moreitems.forEach(watch => {
        grid.appendChild(createBox(watch));

    });
    index+= loaditems;

    if (index >= watches.length) {
        document.getElementById("loadmorebutton").style.display = "none";
    }
}

document.getElementById("loadmorebutton").addEventListener("click", loadmore);

window.onload = loadmore;

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




function showwatch(data) {

    watchImage.src = data.image;
    watchName.textContent = data.name;
    watchPrice.textContent = data.price;
    watchType.textContent = data.type;
    company.textContent = data.company;
    size.textContent = data.size;
    watchdescription.textContent = data.description;
    productwatch.classList.remove("hidden")
}

function hidewatch() {
    productwatch.classList.add("hidden");
}

closebutton.addEventListener("click", hidewatch);
heartbutton.addEventListener("click",() => {
    heartbutton.classList.toggle("like");
});

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

    showwatch(data);
});


// For the slide in texts

const processfrost = document.querySelectorAll('.descripcontainer');
const verify = document.querySelectorAll('.verifycontainer');
const condition = document.querySelectorAll('.conditionscontainer');



const ob = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }   else {
            entry.target.classList.remove('show');
        }
    }); 
});

verify.forEach(el => ob.observe(el));
processfrost.forEach(el => ob.observe(el));
condition.forEach(el => ob.observe(el));