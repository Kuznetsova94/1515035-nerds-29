const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
const thirdButton = document.querySelector(".third-button");

firstButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstSlide.classList.add("slide-current");
    firstButton.classList.add("current-button");
    secondSlide.classList.remove("slide-current");
    secondButton.classList.remove("current-button");
    thirdSlide.classList.remove("slide-current");
    thirdButton.classList.remove("current-button");
});
secondButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstSlide.classList.remove("slide-current");
    firstButton.classList.remove("current-button");
    secondSlide.classList.add("slide-current");
    secondButton.classList.add("current-button");
    thirdSlide.classList.remove("slide-current");
    thirdButton.classList.remove("current-button");
});
thirdButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstSlide.classList.remove("slide-current");
    firstButton.classList.remove("current-button");
    secondSlide.classList.remove("slide-current");
    secondButton.classList.remove("current-button");
    thirdSlide.classList.add("slide-current");
    thirdButton.classList.add("current-button");
});