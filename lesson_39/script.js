// Анимация на setTimeout();
// const btn     = document.querySelector('.btn'),
//       box     = document.querySelector('.box'),
//       wrapper = document.querySelector('.wrapper');

// let position = 0,
//     startAni,
//     reversAni;

// // 1 version  
// // function revAniFunc() {
// // clearInterval(startAni);
// // reversAni = setInterval(() => {
// //   if (position >= 1) {
// //     position--;
// //     box.style.left = `${position}px`;
// //     box.style.top = `${position}px`;
// //     console.log('work revAniFunc');
// //   } else {
// //     clearInterval(reversAni);
// //     console.log('end revAniFunc');
// //   }
// // }, 10);
// // }

// // 1 version
// // function aniFunc() {
// // clearInterval(reversAni);
// // startAni = setInterval(() => {
// //   if (position >= 302) {
// //     clearInterval(startAni);
// //     console.log('end aniFunc');
// //   } else {
// //     box.style.left = `${position}px`;
// //     box.style.top = `${position}px`;
// //     position++;
// //     console.log('work aniFunc');
// //   }
// // }, 10);
// // }

// // 2 version
// function aniFunc() {
//   clearInterval(reversAni);

//   startAni = setTimeout(() => { 
//     if (position == 302) {
//       clearInterval(startAni);
//       console.log('end aniFunc');
//     } else {
//       box.style.left = `${position}px`;
//       box.style.top = `${position}px`;

//       setTimeout(aniFunc, 5);
//       position++;
//       console.log('work aniFunc');
//     }
//   }, 5);
// }

// // 2 version
// function revAniFunc() {
//   clearInterval(startAni);

//   reversAni = setTimeout(() => {
//     if (position >= 1) {
//       box.style.left = `${position}px`;
//       box.style.top = `${position}px`;

//       position--;
//       setTimeout(revAniFunc, 5);
//       console.log('work revAniFunc');
//     } else {
//       clearInterval(reversAni);
//       console.log('end revAniFunc');
//     }
//   }, 5);
// }

// btn.addEventListener('click', aniFunc);
// box.addEventListener('click', revAniFunc);
// wrapper.addEventListener('click', (e) => {
//   const target = e.target;
//   if(target && target == wrapper) {
//     clearInterval(reversAni);
//     clearInterval(startAni);
//     console.log('Stop');
//   }
// });


// Анимация c requestAnimationFrame
const btn = document.querySelector('.btn'),
      boxContainer = document.querySelector('.box'),
      wrapperContainer = document.querySelector('.wrapper');

let position = 0,
    animationIdStart,
    animationIdRevers;

function aniFunc() {
  cancelAnimationFrame(animationIdRevers);
  boxContainer.style.left = `${position}px`;
  boxContainer.style.top = `${position}px`;
  position++;
  console.log('work aniFunc');

  if (position < 298) {
    animationIdStart = requestAnimationFrame(aniFunc);
  } else {
    console.log('end aniFunc');
  }
}

function revAniFunc() {
  cancelAnimationFrame(animationIdStart);
  boxContainer.style.left = `${position}px`;
  boxContainer.style.top = `${position}px`;
  position--;

  if (position >= 2) {
    console.log('work revAniFunc');
    animationIdRevers = requestAnimationFrame(revAniFunc);
  } else {
    console.log('end revAniFunc');
  }
}

btn.addEventListener('click', () => requestAnimationFrame(aniFunc));
boxContainer.addEventListener('click', () => requestAnimationFrame(revAniFunc));

wrapperContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target == wrapperContainer) {
    cancelAnimationFrame(animationIdStart);
    cancelAnimationFrame(animationIdRevers);
    console.log('Stop');
  }
});