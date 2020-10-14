const btn     = document.querySelector('.btn'),
      box     = document.querySelector('.box'),
      wrapper = document.querySelector('.wrapper');

let position = 0,
    startAni,
    reversAni;

function aniFunc() {
  // 2 version
  clearInterval(reversAni);

  startAni = setTimeout(() => { 
    if (position == 302) {
      clearInterval(startAni);
      console.log('end aniFunc');
    } else {
      box.style.left = `${position}px`;
      box.style.top = `${position}px`;

      setTimeout(aniFunc, 5);
      position++;
      console.log('work aniFunc');
    }
  }, 5);

  // 1 version
  // clearInterval(reversAni);
  // startAni = setInterval(() => {
  //   if (position >= 302) {
  //     clearInterval(startAni);
  //     console.log('end aniFunc');
  //   } else {
  //     box.style.left = `${position}px`;
  //     box.style.top = `${position}px`;
  //     position++;
  //     console.log('work aniFunc');
  //   }
  // }, 10);
}

function revAniFunc() {
  // 2 version
  clearInterval(startAni);

  reversAni = setTimeout(() => {
    if (position >= 1) {
      box.style.left = `${position}px`;
      box.style.top = `${position}px`;

      position--;
      setTimeout(revAniFunc, 5);
      console.log('work revAniFunc');
    } else {
      clearInterval(reversAni);
      console.log('end revAniFunc');
    }
  }, 5);

  // 1 version
  // clearInterval(startAni);
  // reversAni = setInterval(() => {
  //   if (position >= 1) {
  //     position--;
  //     box.style.left = `${position}px`;
  //     box.style.top = `${position}px`;
  //     console.log('work revAniFunc');
  //   } else {
  //     clearInterval(reversAni);
  //     console.log('end revAniFunc');
  //   }
  // }, 10);
}

btn.addEventListener('click', aniFunc);
box.addEventListener('click', revAniFunc);

wrapper.addEventListener('click', (e) => {
  const target = e.target;
  if(target && target == wrapper) {
    clearInterval(reversAni);
    clearInterval(startAni);
    console.log('Stop');
  }
});