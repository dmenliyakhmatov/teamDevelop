const MENU = document.getElementById('menu');
const PORTFOLIO = document.getElementById('portfolio-content');
const FILTER = document.getElementById('filter');
const VERT_PHONE = document.querySelector('.iphone_vertical');
const HORIZONTAL_PHONE = document.querySelector('.iphone_horizontal')

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach( (el) => el.classList.remove('active-page'));
  event.target.classList.add('active-page');
})


FILTER.addEventListener('click', (event) => {
  FILTER.querySelectorAll('button').forEach(el => el.classList.remove('selected'));
  event.target.classList.add('selected');
  changeOrder();
  
})


VERT_PHONE.addEventListener('click', el => {
  let screen = VERT_PHONE.parentElement.querySelector('.vertical-display');
  screen.classList.toggle('display-off')
})

HORIZONTAL_PHONE.addEventListener('click', el => {
let screen = HORIZONTAL_PHONE.parentElement.querySelector('.horizontal-display');
screen.classList.toggle('display-off');
})

function changeOrder() {
  let firstChild = PORTFOLIO.firstElementChild;
  PORTFOLIO.appendChild(firstChild);
  PORTFOLIO.shift();
}

var slideIndex = 1;
showSlides(slideIndex, 'next');

function changeSlides(n,typeAnimation) {
  showSlides(slideIndex += n, typeAnimation);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, typeAnimation) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  if (typeAnimation == 'next') {
    slides[slideIndex-1].classList.remove("slide-back");
    slides[slideIndex-1].classList.add ("slide-next");
  }
  if (typeAnimation == 'back') {
    slides[slideIndex-1].classList.remove("slide-next");
    slides[slideIndex-1].classList.add ("slide-back");
  }

  slides[slideIndex-1].style.display = "block";  
}
