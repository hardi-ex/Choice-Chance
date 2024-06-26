const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.game-container');
const result = document.querySelector('.result');
const imgEl = document.querySelector('.img');

function createPromise(delay, isActive = true) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) resolve('🥃');
      else reject('🖕');
    }, delay);
  });
  return promise;
}

let timeoutId;

startBtn.addEventListener('click', () => {
  clearTimeout(timeoutId);

  const promises = [];

  result.classList.remove('result-lose');
  result.classList.remove('result-win');
  result.classList.add('result');

  result.textContent = '...';

  startBtn.disabled = true;

  for (let i = 0; i < 3; i++) {
    container.children[i].textContent = '';
    const p1 = createPromise((i + 1) * 250, Math.random() > 0.3);
    p1.then(smile => {
      container.children[i].textContent = smile;
    }).catch(smile => {
      container.children[i].textContent = smile;
    });
    promises.push(p1);
  }

  Promise.allSettled(promises).then(arr => {
    const smiles = arr.map(obj => obj.value || obj.reason);
    // const isWinner = smiles.every(el => el === '🤑');
    const isWinner = !smiles.includes('🖕');
    if (isWinner) {
      result.classList.add('result-win');
      result.classList.remove('result');
      result.textContent = `Drink!`;
    } else {
      result.classList.add('result-lose');
      result.classList.remove('result');
      result.textContent = 'Home';
    }
    startBtn.disabled = false;
  });

  timeoutId = setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      container.children[i].textContent = '';
    }
    result.classList.add('result');
    result.classList.remove('result-lose');
    result.classList.remove('result-win');
    result.textContent = 'Result';
  }, 5000);
});
