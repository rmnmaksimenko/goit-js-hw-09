const refs = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
  body: document.body,
};
const COLOR_INTERVAL = 1000;
let colorChangeEvent = null;

refs.buttonStart.addEventListener('click', onStart);
refs.buttonStop.addEventListener('click', onStop);

function onStart() {
  refs.buttonStart.disabled = true;
  colorChangeEvent = setInterval(changeBackgroundCOlor, COLOR_INTERVAL);
}

function onStop() {
  refs.buttonStart.disabled = false;
  clearInterval(colorChangeEvent);
}

function changeBackgroundCOlor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
