/* jshint node: true */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        cards = require('./modules/cards'),
        formModal = require('./modules/form&modal'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc');
        // others = require('./modules/others');

  tabs();
  timer();
  modal();
  cards();
  formModal();
  slider();
  calc();
});