
// The type writer effect for my slogan..

window.onload = function () {

    const title = document.querySelector('#titleFROST');
    const slogan = document.getElementById('slowww');
    const description = document.querySelector('.description');
    const slotext = "watches made simple.";
    let point = 0;
    let falsedelete = false;
    
    function typewritereffect() {
    
        if (!falsedelete && point <= slotext.length ) {
            slogan.innerHTML = slotext.substring (0, point);
            point++;
            setTimeout(typewritereffect, 100);
    
        }   else if (falsedelete && point >= 0) {
            slogan.innerHTML = slotext.substring(0, point);
            point--;
            setTimeout(typewritereffect, 50);
        }   else {
            falsedelete = !falsedelete;
            setTimeout(typewritereffect, 1000);
        }
    }
    
    typewritereffect();
    
    
    
    // Color change properties for the title and slogan (together).
    
    
    title.addEventListener('mouseenter', () => {slogan.style.color = '#DE9440';
    
        });
    
    title.addEventListener('mouseleave', () => {slogan.style.color = '';
    
        });
    
    title.addEventListener('mouseenter', () => {description.style.color = '#DE9440';
    
        });
    
    title.addEventListener('mouseleave', () => {description.style.color = '';
    
        });
    
    
    };
    
    
    
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
    
    
    
    const carousel = document.getElementById('carousel');
    const cards = carousel.children;
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
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
    
    function updateInfoPanel() {
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
    
    
    function updateCarousel() {
        for (let i = 0; i < total; i++) {
            const angle = (i - current) * 60;
            const scale = (i === current) ? 1 : 0.8;
            const opacity = (i === current) ? 1 : 0.5;
            cards[i].style.transform = `rotateY(${angle}deg) translateZ(300px) scale(${scale})`;
            cards[i].style.opacity = opacity;
        }
    
        updateInfoPanel();
    }
    
    function rotateCarousel(direction) {
        current = (current + direction + total) % total;
        updateCarousel();
    }
    
    leftArrow.addEventListener('click', () => {
        rotateCarousel(-1);
    });
    
    rightArrow.addEventListener('click', () => {
        rotateCarousel(1);
    });
    
    setInterval(() => {
        if (autoRotate) {
            rotateCarousel(1);
        }
    }, 9900);
    
    container.addEventListener('mouseenter', () => {
        autoRotate = false;
    });
    
    container.addEventListener('mouseleave', () => {
        autoRotate = true;
    });
    
    updateCarousel();
    
    
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
            }   else {
                entry.target.classList.remove('show');
            }
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