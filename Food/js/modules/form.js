import {showModal, hideModal} from './modal';
import {postData} from '../services/services';

function form(modalSelector) {
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
    document.querySelector(modalSelector).append(thanksModal);
    showModal(modalSelector);
    
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.toggle('hide');
      hideModal(modalSelector);
    }, 5000);
  }
  // End form		
}
export default form;