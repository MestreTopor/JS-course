// Start Modal
function showModal(modalSelector, timerId) {
  if(timerId) {
    clearTimeout(timerId);
  }
  
  document.querySelector(modalSelector).style.display = "block";
  document.body.style.overflow = "hidden";

  // eventModal();
}

function hideModal(modalSelector) {
  document.querySelector(modalSelector).style.display = "";
  document.body.style.overflow = "";
}
// ---------------------

function modal(trigerSelector, modalSelector, timerId) {
  const modalBtns = document.querySelectorAll(trigerSelector),
        modalWindow = document.querySelector(modalSelector);

  // function eventModal() {
    const btnsClose = e => {
      e = e.target;
      if (e && e.getAttribute('data-modal-close') == "" || e == modalWindow) {
        // dropEvents();
        hideModal(modalSelector);
      }
    };

    const escClose = e => {
      e = e.code;
      if (e == 'Escape') {
        // dropEvents();
        hideModal(modalSelector);
      }
    };

    // function dropEvents() {
    //   hideModal();
    //   modalWindow.removeEventListener('click', btnsClose);
    //   document.removeEventListener('keydown', escClose);
    // }

    modalWindow.addEventListener('click', btnsClose);
    document.addEventListener('keydown', escClose);
  // }

  // const timerModal = setTimeout(() => {
  //   showModal(modalSelector, timerId);
  // }, 8000);

  function addEventModal() {
    modalBtns.forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();
        showModal(modalSelector, timerId);
      });
    });
  }

  addEventModal();

  const scrollModal = e => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal(modalSelector, timerId);
      window.removeEventListener('scroll', scrollModal);
    }
  };
  window.addEventListener('scroll', scrollModal);
}
export default modal;
export {showModal};
export {hideModal};
// End Modal