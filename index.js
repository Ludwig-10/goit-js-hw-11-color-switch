
const  colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const startBtn = document.querySelector('button[data-action="start"');
   const stopBtn = document.querySelector('button[data-action="stop"');


  function setRandomColor () {
    const timerId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);

    startBtn.removeEventListener('click', setRandomColor);
    startBtn.disabled = true;
  
    stopBtn.addEventListener('click', () => {
      clearInterval(timerId);
      startBtn.addEventListener('click', setRandomColor);
      startBtn.disabled = false;
    });
  }
  
  startBtn.addEventListener('click', setRandomColor);


