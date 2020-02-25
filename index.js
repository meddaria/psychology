const image = document.getElementById('img');
const image1 = document.getElementById('img1');
const buttonL = document.getElementById('button_left');
const buttonR = document.getElementById('button_right');
const buttonL1 = document.getElementById('button_left1');
const buttonR1 = document.getElementById('button_right1');
const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');

let slideNumber = 1;

function showMsc() {
  image.src = 'images/image1.jpg';
  image1.src = 'images/image1.jpg';
  point1.classList.remove('arrows-dot-unactive')
  point1.classList.add('arrows-dot-active');
  point2.classList.remove('arrows-dot-active')
  point2.classList.add('arrows-dot-unactive');
  slideNumber = 1;
}

function showSpb() {
  image.src = 'images/image2.jpg';
  image1.src = 'images/image2.jpg';
  point1.classList.remove('arrows-dot-active')
  point1.classList.add('arrows-dot-unactive');
  point2.classList.remove('arrows-dot-unactive')
  point2.classList.add('arrows-dot-active');
  slideNumber = 2;
}

function slideL() {
  if (slideNumber === 1) {
    showSpb();
  } else {
    showMsc();
  }
}

function slideR() {
  if (slideNumber === 2) {
    showMsc();
  } else {
    showSpb();
  }
}

buttonR.addEventListener("click", slideR);
buttonL.addEventListener("click", slideL);
buttonR1.addEventListener("click", slideR);
buttonL1.addEventListener("click", slideL);