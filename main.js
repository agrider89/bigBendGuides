// Guide Carousel
const cards = document.querySelectorAll('.guide-cards');
const buttons = document.querySelectorAll('.slide-controls button');

let current = Math.floor(Math.random() * cards.length);
let next = current < cards.length - 1 ? current + 1: 0;
let prev = current > 0 ? current -1 : cards.length - 1 ;

const carousel = () => {
    cards.forEach((card) => {
        card.classList.remove('working', 'prev', 'next')
    })
    cards[current].classList.add('working')
    cards[prev].classList.add('prev')
    cards[next].classList.add('next')
}

const updateCarousel = (num) => {
    current = num;
    next = current < cards.length - 1 ? current + 1: 0;
    prev = current > 0 ? current -1 : cards.length - 1 ;
    carousel();
}

const goToNext = () => {
    current < cards.length - 1 ? updateCarousel(current + 1): updateCarousel(0);
}

const goToPrev = () => {
    current > 0 ? updateCarousel(current - 1) : updateCarousel(cards.length-1) 
}

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext())
}

carousel()

// Generic Open / Close
const openBtn = '[data-open]'
const closeBtn = '[data-close]';
const buttonClose = document.querySelectorAll(closeBtn);
const buttonOpen = document.querySelectorAll(openBtn)

for(let button of buttonClose) {
    button.addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove('active');
        console.log(closeBtn)
    })
}

for(let button of buttonOpen) {
    button.addEventListener('click', function() {
        const id = this.dataset.open;
        document.getElementById(id).classList.add('active')
    })
}
