const image = document.getElementById('img');
const image1 = document.getElementById('img1');
const buttonL = document.getElementById('button_left');
const buttonR = document.getElementById('button_right');
const buttonL1 = document.getElementById('button_left1');
const buttonR1 = document.getElementById('button_right1');
const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const msc = document.getElementById('first_link');
const spb = document.getElementById('second_link');

let slideNumber = 1;

function showMsc() {
  image.src = 'images/image1.jpg';
  image1.src = 'images/image1.jpg';
  point1.classList.remove('arrows-dot-unactive')
  point1.classList.add('arrows-dot-active');
  point2.classList.remove('arrows-dot-active')
  point2.classList.add('arrows-dot-unactive');
  spb.classList.remove('font-tmp');
  spb.classList.add('font-nav');
  msc.classList.remove('font-nav');
  msc.classList.add('font-tmp');
  slideNumber = 1;
}

function showSpb() {
  image.src = 'images/image2.jpg';
  image1.src = 'images/image2.jpg';
  point1.classList.remove('arrows-dot-active')
  point1.classList.add('arrows-dot-unactive');
  point2.classList.remove('arrows-dot-unactive')
  point2.classList.add('arrows-dot-active');
  msc.classList.remove('font-tmp');
  msc.classList.add('font-nav');
  spb.classList.remove('font-nav');
  spb.classList.add('font-tmp');
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