'use strict'
const leftArrowButton = document.querySelector('.left-arrow');
const rightArrowButton = document.querySelector('.right-arrow');
const sliderWrapper = document.querySelector('.inner-slider')
const imageSliderleft = document.querySelector('.left-image-button');
const imageSliderright = document.querySelector('.right-image-button');

console.log(sliderWrapper);
let currentIndex = 0;
const totalCards = 3;
const calShiftPosition = () => {
    let value = currentIndex * 100;
    sliderWrapper.style.transform = `translateX(-${value}%)`
}

rightArrowButton.addEventListener('click', function(){
    if(currentIndex < 2){
        currentIndex = currentIndex + 1;
        calShiftPosition()
    }
})
leftArrowButton.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex = currentIndex - 1;
        calShiftPosition();
    }
})

const slider = document.querySelector('.main-slider');
const leftBtn = document.querySelector('.left-image-button');
const rightBtn = document.querySelector('.right-image-button');

let currentInde = 0;
const totalSlides = document.querySelectorAll('.project').length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentInde * 100}%)`;
}

// Right Button
rightBtn.addEventListener('click', () => {
    if (currentInde < totalSlides - 1) {
        currentInde++;
        updateSlider();
    }
});

// Left Button
leftBtn.addEventListener('click', () => {
    if (currentInde > 0) {
        currentInde--;
        updateSlider();
    }
});

setInterval(() => {
    currentInde = (currentInde + 1) % totalSlides;
    updateSlider();
}, 4000);