
// The type writer effect for my slogan..

window.onload = function () {

    const title = document.querySelector('#titleFROST');
    const slogan = document.getElementById('slowww');
    const description = document.querySelector('.description');
    const slotext = "watches made simple.";
    // this effect is used to write down watches made simple,
    // and then erase it and write it all over again in
    // a continuous loop
    let point = 0;
    let falsedelete = false;
    
    function typewritereffect() {
        
        if (!falsedelete && point <= slotext.length ) {
            slogan.innerHTML = slotext.substring (0, point);
            point++;
            setTimeout(typewritereffect, 100);
            // this is the general speed at which the sentence will be written
        }   
        else if (falsedelete && point >= 0) {
            slogan.innerHTML = slotext.substring(0, point);
            point--;
            setTimeout(typewritereffect, 30);   
            // This is the speed at which this will delete the effect
        }   
        else {
            falsedelete = !falsedelete;
            setTimeout(typewritereffect, 100);
        }
    }
    
    typewritereffect();
    
    
    
    // Color change properties for the title and slogan (together).
    
    
    title.addEventListener('mouseenter', () => {slogan.style.color = '#DE9440';
    // as the mouse hovers on the screen it changes the color of the title
        });
    
    title.addEventListener('mouseleave', () => {slogan.style.color = '';
    // once it leave the color goes back to the original 
        });
    
    title.addEventListener('mouseenter', () => {description.style.color = '#DE9440';
    
        });
        // Same thing with the description
    title.addEventListener('mouseleave', () => {description.style.color = '';
    
        });
    
    
    };
    
    


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
    
    
    
    const carousel = document.getElementById('carousel');
    // this collects all carousel items
    const cards = carousel.children;
    // this places them in that rotating element seen just below 'JUST IN'
    const leftArrow = document.getElementById('leftArrow');
    // this is what is used to move the cards around their left or right depending on what arrow is pressed
    const rightArrow = document.getElementById('rightArrow');

    // This is what causes the rotation between the carousel watch cards
    const container = document.getElementById('carouselContainer');
    
    
    let current = 1;
    let autoRotate = true;
    const total = cards.length;
    
    const cardData = [
        {
            title: "THE SPEEDMASTER MOONWATCH PROFESSIONAL",
            description: "Loved on Earth and beyond, the Speedmaster Moonwatch remains a true icon in the world of watchmaking. For its most recent update, the legendary chronograph has been inspired by its own historical design, while the Master Chronometer certification provides even more reliability and excellence.",
            price: "$15,500",
            category: "Swiss Made"
        },
        {
            title: "The Speedmaster Silver Snoopy Award 50th Anniversary",
            description: "In 1970, OMEGA received the prestigious “Silver Snoopy Award” from the astronauts at NASA. The prize recognised OMEGA’s unique contributions to space exploration, as well as the Speedmaster’s role in saving Apollo 13. Now, 50 years later, a special Snoopy watch has been created in the occasions honour.",
            price: "$20,000",
            category: "Anniversary series"
        },
        {
            title: "Santos-Dumont Skeleton Watch with micro-rotor",
            description: "Large model, automatic mechanical skeleton movement, steel, leather.",
            price: "$45,000",
            category: "Leather"
        },
        {
            title: " Rolex: Submariner Date",
            description: "An underwater tool. The Submariner's rotatable bezel is a key functionality of the watch. Its 60-minute graduations allow a diver to accurately and safely monitor diving time and decompression stops.",
            price: "$13,000",
            category: "Water resistance"
        },
        {
            title: " Chanel: J12 Watch",
            description: "The J12 stands the test of time on your wrist. Its ceramic overcomes every obstacle when faced with the most rigorous tests simulated in extreme conditions: millions of abrasive grains, thousands of shocks, dozens of hours spent in the UV rays of the sun.",
            price: "$1500",
            category: "Ceramic"
        }
    ];
    
    function informationofwatches() {
        const titleElem = document.getElementById('itemTitle');
        const descElem = document.getElementById('itemDescription');
        const priceElem = document.getElementById('itemPrice');
        const categoryElem = document.getElementById('itemCategory');
    
        const data = cardData[current];
        if (data) {
            titleElem.textContent = data.title;
            descElem.textContent = data.description;
            priceElem.textContent = `Price: ${data.price}`;
            categoryElem.textContent = `Category: ${data.category}`;
        }
    }
    
    
    function rotatethewatches() {
        for (let mount = 0; mount < total; mount++) {
            const angle = (mount - current) * 60;
            const scale = (mount === current) ? 1 : 0.8;
            const opacity = (mount === current) ? 1 : 0.5;
            cards[mount].style.transform = `rotateY(${angle}deg) translateZ(300px) scale(${scale})`;
            cards[mount].style.opacity = opacity;
        }
        // This section loops through all five cards and scales down the appearance of the nearby watches so they
        // dont appear to be too distracting to the user 
        // this then calls the rotating function
        informationofwatches();
    }
    
    function rotateCarousel(direction) {
        current = (current + direction + total) % total;
        rotatethewatches();
    }
    
    leftArrow.addEventListener('click', () => {
        rotateCarousel(-1);
    });
    
    rightArrow.addEventListener('click', () => {
        rotateCarousel(1);
    });
    // This moves the cards according to whichever arrow is clicked
    // otherwise the carousel self rotates 
    setInterval(() => {
        if (autoRotate) {
            rotateCarousel(1);
        }
    }, 9900);
    // This is the time each carousel is stationary before it moves onto the next one
    container.addEventListener('mouseenter', () => {
        autoRotate = false;
    });
    
    container.addEventListener('mouseleave', () => {
        autoRotate = true;
    });
    // This stops the rotation so that the user can hover over the watch and observe the displayed 
    // and corresponding image 
    rotatethewatches();
    
    
    // For the slide in texts
    
    const slide = document.querySelectorAll('.heading');
    const slides = document.querySelectorAll('.info-panel');
    const comma1 = document.querySelectorAll('.comma1');
    const comma2 = document.querySelectorAll('.comma2');
    const line1 = document.querySelectorAll('.line1');
    const line2 = document.querySelectorAll('.line2');
    const redbox = document.querySelectorAll('.redbox');
    const org = document.querySelectorAll('.org');
    const aboutfrost = document.querySelectorAll('.aboutfrost');
    const frostfavs = document.querySelectorAll('.frostfavs');
    const slogan1 = document.querySelectorAll('.slogan1');
    
    
    
    
    
    const ob = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
// This is where the slide in effect takes places where the item is translated from either X or Y 
// and depending on the input placed in the css files.
// The effect works when .show is added alongside the name of a given element or tag to bring back the element or item to its original place and
// increase the opacity so it can be seen again

        });
    });
    
    slide.forEach(el => ob.observe(el));
    slides.forEach(el => ob.observe(el));
    comma1.forEach(el => ob.observe(el));
    comma2.forEach(el => ob.observe(el));
    line1.forEach(el => ob.observe(el));
    line2.forEach(el => ob.observe(el));
    redbox.forEach(el => ob.observe(el));
    org.forEach(el => ob.observe(el));
    aboutfrost.forEach(el => ob.observe(el));
    frostfavs.forEach(el => ob.observe(el));
    slogan1.forEach(el => ob.observe(el));