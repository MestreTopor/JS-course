// Start Modal
function modal() {
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
}
module.exports = modal;
// End Modal