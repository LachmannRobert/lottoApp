const scoreArray = [];

const lottoApp = () => {
  
  const btn = document.querySelector('button');

  for (let i = 0; i < 49; i++) {
    const resultDiv = document.querySelector('.result');
    const newBallDiv = document.createElement('div');
    resultDiv.appendChild(newBallDiv);
    newBallDiv.setAttribute('class', 'ball');
    newBallDiv.setAttribute('id', `id${i+1}`)
    newBallDiv.textContent = `${i+1}`;
  };

  const start = () => {
    scoreArray.splice(0);
    btn.textContent = 'Losuję ...';
    for (let i = 0; i < 6; i++) {
      const score = Math.floor(Math.random() * 49 + 1);
      if (!scoreArray.includes(score)) {
        scoreArray.push(score);
        if (scoreArray.includes(49)) {
          scoreArray.push(score);
        };
      } else {
        scoreArray.push(score+1);
      };
    };
    console.log(scoreArray.sort((a,b) => a-b));
    render();
  };

const render = () => {
  setTimeout(() => {
    for (let i = 0; i < scoreArray.length; i++) {
      let id = `id${scoreArray[i]}`;
      let scoreId = document.getElementById(id);
      scoreId.classList.add('active');
    };
    again();
  }, 2500);
};

  const again = () => {
    btn.textContent = 'Losuj ponownie';
    btn.addEventListener('click', reset);
  };
  
  const reset = () => {
    const allBalls = document.querySelectorAll('.ball');
    for (let i = 0; i < allBalls.length; i++) {
      allBalls[i].classList.remove('active');
    };
  };

  btn.textContent = 'Losuj';
  btn.addEventListener('click', start);

};

lottoApp();