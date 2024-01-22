const isActive = false;
const focusedElements = [];

document.querySelectorAll('input').forEach((elem) => {
  elem.addEventListener('focusin', focusIn);
  elem.addEventListener('focusout', focusOut);
});

function focusIn(e) {
  const $nowActive = document.activeElement;
  const classAlphaName = $nowActive.className[0];
  const classNumberName = $nowActive.className.slice(2);

  focusedElements.push([classAlphaName, classNumberName]);

  const $cell = document.getElementById('cellName');
  $cell.innerHTML = `CELL : ${classAlphaName.toUpperCase()}${convertStringToNumber(
    classNumberName
  )}`;

  const $alpha = document.querySelector('.' + classAlphaName);
  $alpha.style.background = '#5094FB';

  const $number = document.querySelector('.' + classNumberName);
  $number.style.background = '#5094FB';
}

function focusOut(e) {
  focusedElements.forEach((el) => {
    const $nowAlpha = document.querySelector('.' + el[0]);

    $nowAlpha.style.background = '#b04883';
    const $number = document.querySelector('.' + el[1]);
    $number.style.background = '#b04883';

    focusedElements.pop();
  });
}

function convertStringToNumber(str) {
  switch (str) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';

    case 'nine':
      return '9';
  }
}
