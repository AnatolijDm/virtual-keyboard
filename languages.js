const arrayLangLeft = ['ShiftLeft', 'AltLeft', '41', '57'];
const arrayLangRight = ['ShiftRight', 'AltRight', '54', '59'];
const keyColor = ['rgb(152, 153, 228)', 'white'];
let language = 'ru';

function onShift(arr, color) {
    if (event.code == arr[0]) {
        document.querySelector(`.number-keys:nth-child(${arr[2]})`).style.background = color;
    }
}

function onAlt(arr, color) {
    if (event.code == arr[1]) {
        document.querySelector(`.number-keys:nth-child(${arr[3]})`).style.background = color;
    }
}

function changeLanguage(num) {
    for (let i = 15; i < 27; i++) {
        document.querySelector(`.number-keys:nth-child(${i})`).innerHTML = String.fromCharCode(num[i - 15]);
    }
    for (let i = 29; i < 40; i++) {
        document.querySelector(`.number-keys:nth-child(${i})`).innerHTML = String.fromCharCode(num[i - 17]);
    }
    for (let i = 43; i < 52; i++) {
        document.querySelector(`.number-keys:nth-child(${i})`).innerHTML = String.fromCharCode(num[i - 19]);
    }
    document.querySelector(`.number-keys:nth-child(58)`).innerHTML = num[34];
}

document.addEventListener('keydown', function(event) {
    if (language === 'ru') {
        onShift(arrayLangLeft, keyColor[0]);
        onShift(arrayLangRight, keyColor[0]);
        document.addEventListener('keydown', function(event) {
            onAlt(arrayLangLeft, keyColor[0]);
            onAlt(arrayLangRight, keyColor[0]);
            changeLanguage(arrayEn);
            language = 'en';
          });
    } else if(language === 'en') {
        onShift(arrayLangLeft, keyColor[0]);
        onShift(arrayLangRight, keyColor[0]);
        document.addEventListener('keydown', function(event) {
            onAlt(arrayLangLeft, keyColor[0]);
            onAlt(arrayLangRight, keyColor[0]);
            changeLanguage(arrayRu);
            language = 'ru';
          });
    }
  });

document.addEventListener('keyup', function(event) {
onShift(arrayLangLeft, keyColor[1]);
onShift(arrayLangRight, keyColor[1]);
});
document.addEventListener('keyup', function(event) {
    onAlt(arrayLangLeft, keyColor[1]);
    onAlt(arrayLangRight, keyColor[1]);
});