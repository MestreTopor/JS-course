function slider() {
  // Start slider
  const getZero = num => num <= 9 ? `0${num}` : num;
  
  const sliderContainer = document.querySelector('.offer__slider-wrapper'),
    prevBtn = document.querySelector('.offer__slider-prev'),
    nextBtn = document.querySelector('.offer__slider-next'),
    currentNum = document.querySelector('#current'),
    totalNum = document.querySelector('#total'),
    sliderWrapper = sliderContainer.querySelector('.offer__slider-container'),
    slides = sliderContainer.querySelectorAll('.offer__slide');

  function setSliderWindow() {
    let getWidth = 0,
      currentN = slides.length > 0 ? 1 : 0,
      totalN = 0,
      slidePos = currentN;

    if (!currentN) {
      return false;
    }

    slides.forEach((item) => {
      getWidth += item.offsetWidth;
      totalN++;
    });

    function setPosition(num) {
      currentNum.textContent = getZero(num);
      totalNum.textContent = getZero(totalN);
    }
    setPosition(currentN);

    //Added css and animation for slider
    const slideWrapperCss = `
        display: flex;
        position: relative;
        width: ${getWidth}px;
        transition: all .5s ease-in-out;
      `,
      slideW = slides[0].offsetWidth;

    sliderContainer.style.cssText = `
  overflow: hidden;
  position: relative;
`;
    //--------------------

    function setSlide(position = -((slideW * slidePos) - slideW)) {
      sliderWrapper.style.cssText = `
  ${slideWrapperCss}
  left: ${position}px
`;
    }
    setSlide(0);

    // Create dots

    function getDots() {
      function clickDots(positionN) {
        return function (event) {
          event.preventDefault();
          slidePos = positionN;
          setDots(slidePos);
          setPosition(slidePos);

          setSlide();
        };
      }

      const dotContainer = document.createElement('ul');
      let dot;
      dotContainer.classList.add('carousel-indicators');

      let positionNum;
      for (let i = 0; i < slides.length; i++) {
        positionNum = i + 1;
        dot = document.createElement('li');
        dot.setAttribute('data-slide-dot', positionNum);
        dot.classList.add('dot');
        dotContainer.append(dot);

        dot.addEventListener('click', clickDots(positionNum));
      }

      sliderContainer.append(dotContainer);
    }

    getDots();

    function setDots(slidePos) {
      document.querySelectorAll('.carousel-indicators .dot').forEach((element) => {
        if (element.getAttribute('data-slide-dot') == slidePos) {
          element.classList.add('active');
        } else {
          if (element.classList.contains('active')) {
            element.classList.remove('active');
          }
        }
      });
    }
    setDots(slidePos);
    // End Create dots

    nextBtn.addEventListener('click', e => {
      e.preventDefault();

      if (slidePos >= totalN) {
        slidePos = 1;
        setSlide(0);
      } else {
        slidePos++;
        setSlide();
      }

      setPosition(slidePos);
      setDots(slidePos);
    });

    prevBtn.addEventListener('click', e => {
      e.preventDefault();

      if (slidePos <= 1) {
        slidePos = totalN;
        setPosition(totalN);
      } else {
        slidePos--;
        setPosition(slidePos);
      }

      setSlide();
      setDots(slidePos);
    });
  }
  setSliderWindow();
  // End slider
}
module.exports = slider;
