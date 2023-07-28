// Слайдер
const slider = document.querySelector(".slider"),
  colorSide = document.querySelector(".colorSide"),
  mainSlide = document.querySelector(".main-slide"),
  slidesCount = mainSlide.querySelectorAll("div").length,
  downBtn = document.querySelector(".slider-btns__down"),
  upBtn = document.querySelector(".slider-btns__up");

let activeSlideIndex = 0;

colorSide.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
  direction === "up" ? activeSlideIndex++ : activeSlideIndex--;
  if (activeSlideIndex === slidesCount) {
    activeSlideIndex = 0;
  }
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidesCount - 1;
  }
  const height = slider.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  colorSide.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

// Выбор напитка
const drinkTitle = document.querySelector(".drink__title"),
  fillCup = document.querySelector(".fill"),
  options = document.querySelectorAll(".options li");
let activeCoffee = null;


const showCoffee = (selected) => {
  if (activeCoffee) {
    activeCoffee.classList.remove("active");
    fillCup.classList.remove(activeCoffee.id);
  }
  activeCoffee = selected;
  fillCup.classList.add(activeCoffee.id);
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    option.classList.toggle("active");
    drinkTitle.textContent = option.textContent;
    showCoffee(option);
  });
});
