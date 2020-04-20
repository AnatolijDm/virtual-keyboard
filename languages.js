const arrayLangLeft = ['ShiftLeft', 'AltLeft', '41', '57'];
const arrayLangRight = ['ShiftRight', 'AltRight', '54', '59'];
const keyColor = ['rgb(152, 153, 228)', 'white'];
let language = 'ru';

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
        if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            document.addEventListener('keydown', function(event) {
                if(event.code === 'AltLeft' || event.code === 'AltRight') {
                    changeLanguage(arrayEn);
                    language = 'en';
                }
            });
          }
    } else if(language === 'en') {
        if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            document.addEventListener('keydown', function(event) {
                if(event.code === 'AltLeft' || event.code === 'AltRight') {
                    changeLanguage(arrayRu);
                    language = 'ru';
                }
            });
          }
    }
  });