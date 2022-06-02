import Notiflix from 'notiflix';
let delay = null;
let step = null;
let amount = null;
let timer = null;
let currentTick = 0;
let isGoing = 0;

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  if (isGoing === 1) {
    return;
  }
  isGoing = 1;
  e.preventDefault();
  const formData = new FormData(e.target);
  delay = parseInt(Object.fromEntries(formData).delay);
  step = parseInt(Object.fromEntries(formData).step);
  amount = parseInt(Object.fromEntries(formData).amount);

  setTimeout(() => {
    timer = setInterval(() => {
      const timespent = delay + step * currentTick;
      currentTick += 1;
      createPromise(currentTick, timespent)
        .then(r => Notiflix.Notify.success(r))
        .catch(e => Notiflix.Notify.failure(e));
      if (currentTick === amount) {
        clearInterval(timer);
        currentTick = 0;
        isGoing = 0;
      }
    }, step);
  }, delay);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}
