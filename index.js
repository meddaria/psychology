const image = document.getElementById('img');
const btnLeft = document.getElementById('button_left');
const btnRight = document.getElementById('button_right');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');

let slideNumber = 1;

function showFirst() {
  image.src = 'images/image1.jpg';
  dot1.classList.remove('arrows-dot-unactive')
  dot1.classList.add('arrows-dot-active');
  dot2.classList.remove('arrows-dot-active')
  dot2.classList.add('arrows-dot-unactive');
  slideNumber = 1;
}

function showSecond() {
  image.src = 'images/image2.jpg';
  dot1.classList.remove('arrows-dot-active')
  dot1.classList.add('arrows-dot-unactive');
  dot2.classList.remove('arrows-dot-unactive')
  dot2.classList.add('arrows-dot-active');
  slideNumber = 2;
}

function slideLeft() {
  if (slideNumber === 1) {
    showSecond();
  } else {
    showFirst();
  }
}

function slideRight() {
  if (slideNumber === 2) {
    showFirst();
  } else {
    showSecond();
  }
}

btnRight.addEventListener("click", slideRight);
btnLeft.addEventListener("click", slideLeft);
