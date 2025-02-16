const sliderSection = document.querySelector('.hero');
const sliderList = document.querySelector('.slider__list');
const slides = sliderList.querySelectorAll('.slider__item');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
const paginationList = document.querySelector('.slider__pagination');
const paginations = paginationList.querySelectorAll('.slider__pagination-button');

let currentSlide = 0;
const backgroundColors = ['#F3EBE1', '#EAE6FC', '#E5E6E8'];

const updateSlideDisplay = () => {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'grid' : 'none';
  });
  sliderSection.style.backgroundColor = backgroundColors[currentSlide];
};

const updateButtonState = () => {
  buttonPrev.disabled = currentSlide === 0;
  buttonNext.disabled = currentSlide === slides.length - 1;
};

const updatePaginationState = () => {
  paginations.forEach((item, index) => {
    item.classList.toggle('slider__pagination-button--current', index === currentSlide);
  });
};

const prepareCurrentSlide = (index) => {
  currentSlide = index;
  updateSlideDisplay();
  updateButtonState();
  updatePaginationState();
};

paginations.forEach((element, index) => {
  element.addEventListener('click', () => prepareCurrentSlide(index));
});

const showSlide = (direction) => {
  if (direction === 'next') {
    currentSlide = (currentSlide + 1) % slides.length;
  } else if (direction === 'prev') {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }
  prepareCurrentSlide(currentSlide);
};

buttonNext.addEventListener('click', () => showSlide('next'));
buttonPrev.addEventListener('click', () => showSlide('prev'));

// Инициализация слайдера при загрузке
prepareCurrentSlide(currentSlide);
