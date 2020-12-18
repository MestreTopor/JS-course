function calc() {
  // Start calculate
  const calcCont    = document.querySelector('.calculating'),
        femaleBtn   = document.querySelector('#female'),
        maleBtn     = document.querySelector('#male'),
        heightInput = document.querySelector('#height'),
        weightInput = document.querySelector('#weight'),
        ageInput    = document.querySelector('#age'),
        dataPerson  = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item'),
        actItems    = document.querySelectorAll('.calculating__choose_big .calculating__choose-item'),
        calcResult  = document.querySelector('.calculating__result span'),
        calcChose = '.calculating__choose-item',
        activeClass = 'calculating__choose-item_active';

  function runCalc() {

    function getActivity() {
      let active;
      actItems.forEach(item => {
        if (item.classList.contains('calculating__choose-item_active')) {
          active = +item.getAttribute('data-active');
          return;
        }
      });
      return active;
    }

    function setCalc () {
      const height   = +heightInput.value,
            weight   = +weightInput.value,
            age      = +ageInput.value;

      let bmr        = 447.6, // Default for female
          totalCalloric = "_ _ _ _";

      if (height != "" && weight != "" && age != "" && !isNaN(height) && !isNaN(weight) && !isNaN(age)) {
        if (femaleBtn.classList.contains(activeClass)) {
          bmr = bmr * getActivity();
          totalCalloric = bmr + (weightInput.value * 9.2) + (heightInput.value * 3.1) - (ageInput.value * 4.3);
          // BMR = 447,6 + (9,2 × вес в кг) + (3,1 × рост в см) – (4,3 × возраст в годах).
        }
        else if(maleBtn.classList.contains(activeClass)) {
          bmr = 88.36 * getActivity();
          totalCalloric = bmr + (weightInput.value * 13.4) + (heightInput.value * 4.8) - (ageInput.value * 5.7);
          // BMR = 88,36 + (13,4 × вес в кг) + (4,8 × рост в см) – (5,7 × возраст в годах).
        }
        calcResult.textContent = parseInt(totalCalloric);
      } else {
        calcResult.textContent = totalCalloric;
      }
      
    }

    setCalc();

    function clearActiveClass(element, activeClass) {
      element.forEach(item => {
          item.classList.remove(activeClass);
      });
    }

    function addActiveClass(element, activeClass) {
      element.classList.add(activeClass);
    }

    const setBtn = (elements) => (e) => {
      e.preventDefault();
      
      clearActiveClass(elements, activeClass);
      elements.forEach(item => {
        addActiveClass(e.target, activeClass);
        setCalc();
      });
    };

    const setInput = e => {
      e.preventDefault();
      setCalc();
      e = e.target;
      if(isNaN(+e.value) && !/\d/.test(e.value)) {
        e.style.cssText = `
          box-shadow: 0 4px 15px rgb(255 0 0 / 99%);
        `;
        calcResult.textContent = "_ _ _ _";
      } else {
        e.style.boxShadow = '';
      }
    };

    const chooseActive = document.querySelector('#gender').querySelectorAll(calcChose);
    femaleBtn.addEventListener('click', setBtn(chooseActive));
    maleBtn.addEventListener('click', setBtn(chooseActive));

    dataPerson.forEach(item => {
      item.addEventListener('input', setInput);
    });

    actItems.forEach(item => {
      item.addEventListener('click', setBtn(actItems));
    });

    // console.log(gender());
  }
  runCalc();
  // End calculate
}
module.exports = calc;