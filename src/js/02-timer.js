import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let chosenDate = null;
let currentDate = null;
let sellTimer = null;

const options = {
  dateFormat: 'D d M Y H:i',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = dateTime.formatDate(selectedDates[0], 'U') * 1000;
  },
};

const dateTime = flatpickr(document.querySelector('#datetime-picker'), options);
const startButton = document.querySelector('[data-start]');

startButton.addEventListener('click', onStart);

function onStart() {
  currentDate = Date.now();
  if (currentDate > chosenDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  startButton.disabled = true;
  counterChange();
  sellTimer = setInterval(counterChange, 1000);
}

function counterChange() {
  currentDate = Date.now();
  if (currentDate < chosenDate) {
    updateTime(convertMs(chosenDate - currentDate));
  } else {
    updateTime(convertMs(0));
    clearInterval(sellTimer);
  }
}

function updateTime({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = days;
  document.querySelector('[data-hours]').textContent = hours;
  document.querySelector('[data-minutes]').textContent = minutes;
  document.querySelector('[data-seconds]').textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
