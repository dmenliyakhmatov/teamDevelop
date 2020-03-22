const MENU = document.getElementById('menu')
const BLOCKS = document.querySelectorAll('a[href*="#"]');
const PORTFOLIO = document.getElementById('portfolio-content');
const FILTER = document.getElementById('filter');
const VERT_PHONE = document.querySelector('.left-phone-button');
const HORIZONTAL_PHONE = document.querySelector('.right-phone-button')
const SUBMIT = document.querySelector('.form-submit');
const CLOSE = document.querySelector ('.modal-close');
const OK = document.querySelector('.ok-button');

for (let block of BLOCKS) {
  block.addEventListener('click', event => {
    event.preventDefault();
    
    const blockID = block.getAttribute('href').substring(1);
    const offSetBlock = document.getElementById(blockID).offsetTop;
    window.scrollTo({
      top: offSetBlock-79,
      behavior: 'smooth'
    })
  })
}

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach( (el) => el.classList.remove('active-page'));
  event.target.classList.add('active-page');
})

document.addEventListener('scroll', event => {
    let currentPosition = window.pageYOffset;
    const menuItems = document.querySelectorAll('.block');
    const lastElement = menuItems.length-1

    for (let i=0; i < menuItems.length; i++) {
      const idName = menuItems[i].getAttribute('id');
      if ( i !== lastElement && menuItems[i].offsetTop <= currentPosition &&  
          currentPosition < menuItems[i+1].offsetTop  ) {
        MENU.querySelectorAll('a').forEach( (el) => el.classList.remove('active-page'));
        MENU.querySelector(`[href*="#${idName}"]`).classList.add('active-page');
      } 
      if ( i === lastElement && currentPosition >= menuItems[lastElement].offsetTop) { 
        MENU.querySelectorAll('a').forEach( (el) => el.classList.remove('active-page'));
        MENU.querySelector(`[href*="#${idName}"]`).classList.add('active-page');
      }
    }
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

PORTFOLIO.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
  PORTFOLIO.querySelectorAll('img').forEach(el => { el.classList.remove('selected-image')});
  event.target.classList.add('selected-image');
  }
})

SUBMIT.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.querySelector('.name');
  const email = document.querySelector('.email');
  const subject = document.querySelector('.subject');
  const description = document.querySelector('.contact-textarea');

  if (name.validity.valid && email.validity.valid) {
  document.querySelector('.subject-text').innerText = subject.value ? "Subject " + subject.value :"Whithout subject";
  document.querySelector('.description-text').innerText = description.value ? "Description: " + description.value : "Whithout description";
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
  } else { 
    document.querySelector('.modal-error').classList.remove('hidden');
    name.classList.add('form-error');
    email.classList.add('form-error');
    setTimeout(() => {
      document.querySelector('.modal-error').classList.add('hidden');
      name.classList.remove('form-error');
      email.classList.remove('form-error');
    }, 2000)
  }
form.reset();
})

CLOSE.addEventListener('click', closeModal);

OK.addEventListener('click', closeModal);

function closeModal() {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
}