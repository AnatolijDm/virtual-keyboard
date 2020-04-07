let textArea = document.createElement('textarea');
textArea.id = 'text';
textArea.rows = '8';
textArea.cols = '60';
document.body.appendChild(textArea);

let keyboard = document.createElement('div');
keyboard.id = 'keys';
document.body.appendChild(keyboard);

let arrayEn = ['81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '123', '125', '65', '83', '68', '70', '71', '72', '74', '75', '76', '58', '34', '47', '90', '88', '67', '86', '66', '78', '77', '60', '62', '63', 'Space', '48'];
let arrayRu = ['1049', '1062', '1059', '1050', '1045', '1053', '1043', '1064', '1065', '1047', '1061', '1066', '1060', '1067', '1042', '1040', '1055', '1056', '1054', '1051', '1044', '1046', '1069', '47', '1071', '1063', '1057', '1052', '1048', '1058', '1068', '1041', '1070', '63', 'Пробел', '1025'];

function numberKeyCreate(arr = arrayRu) {
        for (let i = 48; i < 58; i++) {
            let keyNumber = document.createElement('button');
            keyNumber.className = 'number-keys';
            keyboard.appendChild(keyNumber);
            keyNumber.innerHTML = String.fromCharCode(i);
        }
        createChar(45);

    keyNumber = document.createElement('button');
    keyNumber.className = 'number-keys';
    keyboard.appendChild(keyNumber);
    keyNumber.innerHTML = String.fromCharCode(61);

    let keyBackspace = document.createElement('button');
    keyBackspace.className = 'number-keys key-backspace';
    keyboard.appendChild(keyBackspace);
    keyBackspace.innerHTML = 'Backspace';

    let keyTab = document.createElement('button');
    keyTab.className = 'number-keys key-tab';
    keyboard.appendChild(keyTab);
    keyTab.innerHTML = 'Tab';

    function createChar(num) {
        let keyChar = document.createElement('button');
        keyChar.className = 'number-keys';
        keyboard.appendChild(keyChar);
        keyChar.innerHTML = String.fromCharCode(num);
    }

    
    createChar(arr[0]);
    createChar(arr[1]);
    createChar(arr[2]);
    createChar(arr[3]);
    createChar(arr[4]);
    createChar(arr[5]);
    createChar(arr[6]);
    createChar(arr[7]);
    createChar(arr[8]);
    createChar(arr[9]);
    createChar(arr[10]);
    createChar(arr[11]);

    let keyDel = document.createElement('button');
    keyDel.className = 'number-keys key-del';
    keyboard.appendChild(keyDel);
    keyDel.innerHTML = 'Del';

    let keyCaps = document.createElement('button');
    keyCaps.className= 'number-keys key-caps';
    keyboard.appendChild(keyCaps);
    keyCaps.innerHTML = 'Caps Lock';

    createChar(arr[12]);
    createChar(arr[13]);
    createChar(arr[14]);
    createChar(arr[15]);
    createChar(arr[16]);
    createChar(arr[17]);
    createChar(arr[18]);
    createChar(arr[19]);
    createChar(arr[20]);
    createChar(arr[21]);
    createChar(arr[22]);

    let keyEnter = document.createElement('button');
    keyEnter.className = 'number-keys key-enter';
    keyboard.appendChild(keyEnter);
    keyEnter.innerHTML = 'Enter';

    let keyShift = document.createElement('button');
    keyShift.className = 'number-keys key-shift';
    keyboard.appendChild(keyShift);
    keyShift.innerHTML = 'Shift';

    
    createChar(arr[23]);
    createChar(arr[24]);
    createChar(arr[25]);
    createChar(arr[26]);
    createChar(arr[27]);
    createChar(arr[28]);
    createChar(arr[29]);
    createChar(arr[30]);
    createChar(arr[31]);
    createChar(arr[32]);
    createChar(arr[33]);

    let keyUp = document.createElement('button');
    keyUp.className = 'number-keys key-up';
    keyboard.appendChild(keyUp);
    keyUp.innerHTML = 'up';

    keyShift = document.createElement('button');
    keyShift.className = 'number-keys';
    keyboard.appendChild(keyShift);
    keyShift.innerHTML = 'Shift';

    let keyCtr = document.createElement('button');
    keyCtr.className = 'number-keys key-ctr';
    keyboard.appendChild(keyCtr);
    keyCtr.innerHTML = 'Ctrl';

    let keyWin = document.createElement('button');
    keyWin.className = 'number-keys';
    keyboard.appendChild(keyWin);
    keyWin.innerHTML = 'Win';

    let keyAlt = document.createElement('button');
    keyAlt.className = 'number-keys';
    keyboard.appendChild(keyAlt);
    keyAlt.innerHTML = 'Alt';

    let keySpace = document.createElement('button');
    keySpace.className = 'number-keys key-space';
    keyboard.appendChild(keySpace);
    keySpace.innerHTML = arr[34];

    keyAlt = document.createElement('button');
    keyAlt.className = 'number-keys';
    keyboard.appendChild(keyAlt);
    keyAlt.innerHTML = 'Alt';

    keyCtr = document.createElement('button');
    keyCtr.className = 'number-keys';
    keyboard.appendChild(keyCtr);
    keyCtr.innerHTML = 'Ctrl';

    let keyLeft = document.createElement('button');
    keyLeft.className = 'number-keys key-left';
    keyboard.appendChild(keyLeft);
    keyLeft.innerHTML = 'left';

    let keyDown = document.createElement('button');
    keyDown.className = 'number-keys key-down';
    keyboard.appendChild(keyDown);
    keyDown.innerHTML = 'down';

    let keyRight = document.createElement('button');
    keyRight.className = 'number-keys key-right';
    keyboard.appendChild(keyRight);
    keyRight.innerHTML = 'right';

}

numberKeyCreate(arrayRu);