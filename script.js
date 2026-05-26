'use strict'
const leftArrowButton = document.querySelector('.left-arrow');
const rightArrowButton = document.querySelector('.right-arrow');
const sliderWrapper = document.querySelector('.inner-slider')
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