import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import form from './modules/form';
import slider from './modules/slider';
import calc from './modules/calc';
import {showModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => { showModal('.modal', modalTimerId); }, 30000000);
  tabs('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
  timer('.timer', '2021-03-18');
  modal('[data-modal-btn]', '.modal', modalTimerId);
  cards();
  form('.modal');
  slider({
    sliderContainerSelect: '.offer__slider-wrapper',
    prevBtnSelector: '.offer__slider-prev',
    nextBtnSelector: '.offer__slider-next',
    currentNumSelector: '#current', 
    totalNumSelector: '#total', 
    sliderWrapSelector: '.offer__slider-container',
    slidesSelector: '.offer__slide'
  });
  calc();
});