function form() {
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
  
  // end modal 
  // Start form
  const forms   = document.querySelectorAll('form'),
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
        if(!data.ok) {
          throw data;
        } else {
          console.log(data);
          showThanksModal(message.success);
          form.reset();                                                 
          statusMessage.remove();
        } 
      })
      .catch(data => {
        console.log(data.statusText);
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
}
module.exports = form;