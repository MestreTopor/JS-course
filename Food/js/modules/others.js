function others() {
  function getZero(num) {
    return num <= 9 ? `0${num}` : num;
  }

  // Start Modal
  const modalBtns = document.querySelectorAll('[data-modal-btn]'),
    modalWindow = document.querySelector('.modal'),
    htmlElement = document.documentElement;

  function eventModal() {
    const btnsClose = e => {
      e = e.target;
      if (e && e.getAttribute('data-modal-close') == "" || e == modalWindow) {
        dropEvents();
      }
    };

    const escClose = e => {
      e = e.code;
      if (e == 'Escape') {
        dropEvents();
      }
    };

    function dropEvents() {
      hideModal();
      modalWindow.removeEventListener('click', btnsClose);
      document.removeEventListener('keydown', escClose);
    }

    modalWindow.addEventListener('click', btnsClose);
    document.addEventListener('keydown', escClose);
  }

  function showModal() {
    // clearTimeout(timerModal);
    // window.removeEventListener('scroll', scrollModal);
    modalWindow.style.display = "block";
    htmlElement.style.overflow = "hidden";

    eventModal();
  }

  function hideModal() {
    modalWindow.style.display = "";
    htmlElement.style.overflow = "";
  }

  function addEventModal() {
    modalBtns.forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();
        showModal();
      });
    });
  }

  addEventModal();

  // const timerModal = setTimeout(() => {
  //   showModal();
  // }, 8000);

  const scrollModal = e => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal();
      window.removeEventListener('scroll', scrollModal);
    }
  };

  window.addEventListener('scroll', scrollModal);
  // End Modal

  // Start form
  const forms = document.querySelectorAll('form'),
    message = {
      loading: 'icons/spinner.svg',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
    };

  forms.forEach(formItem => {
    bindPostData(formItem);
  });

  const postData = async (url, data) => {
    const rest = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await rest;
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.alt = 'Loading';
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        })
        .catch((data) => {
          console.log('Not found');
          console.log(data);
          showThanksModal(message.failure);
          statusMessage.remove();
        })
        .finally(() => console.log('Finish!'));

    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.toggle('hide');

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.insertAdjacentHTML('beforeend', `
      <div class="modal__content">
        <div data-modal-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `);
    modalWindow.append(thanksModal);
    showModal();

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.toggle('hide');
      hideModal();
    }, 5000);
  }
  // End form		


  // Start slider
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
module.exports = others;