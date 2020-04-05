let textArea = document.createElement('textarea');
textArea.id = 'text';
textArea.rows = '15';
textArea.cols = '130';
document.body.appendChild(textArea);

let keyboard = document.createElement('div');
keyboard.id = 'keys';
document.body.appendChild(keyboard);

function numberKeyCreate() {
    for (let i = 48; i < 58; i++) {
        let keyNumber = document.createElement('button');
        keyNumber.className = 'number-keys';
        keyboard.appendChild(keyNumber);
        keyNumber.innerHTML = String.fromCharCode(i);
    }

    keyNumber = document.createElement('button');
    keyNumber.className = 'number-keys';
    keyboard.appendChild(keyNumber);
    keyNumber.innerHTML = String.fromCharCode(45);

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

    createChar('81');
    createChar('87');
    createChar('69');
    createChar('82');
    createChar('84');
    createChar('89');
    createChar('85');
    createChar('73');
    createChar('79');
    createChar('80');
    createChar('123');
    createChar('125');

    let keyDel = document.createElement('button');
    keyDel.className = 'number-keys key-del';
    keyboard.appendChild(keyDel);
    keyDel.innerHTML = 'Del';

    let keyCaps = document.createElement('button');
    keyCaps.className= 'number-keys key-caps';
    keyboard.appendChild(keyCaps);
    keyCaps.innerHTML = 'Caps Lock';

    createChar('65');
    createChar('83');
    createChar('68');
    createChar('70');
    createChar('71');
    createChar('72');
    createChar('74');
    createChar('75');
    createChar('76');
    createChar('58');
    createChar('34');

    let keyEnter = document.createElement('button');
    keyEnter.className = 'number-keys key-enter';
    keyboard.appendChild(keyEnter);
    keyEnter.innerHTML = 'Enter';

    let keyShift = document.createElement('button');
    keyShift.className = 'number-keys key-shift';
    keyboard.appendChild(keyShift);
    keyShift.innerHTML = 'Shift';

    createChar('47');
    createChar('90');
    createChar('88');
    createChar('67');
    createChar('86');
    createChar('66');
    createChar('78');
    createChar('77');
    createChar('60');
    createChar('62');
    createChar('63');

    let keyUp = document.createElement('button');
    keyUp.className = 'number-keys key-up';
    keyboard.appendChild(keyUp);

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
    keySpace.innerHTML = 'Space';

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

    let keyDown = document.createElement('button');
    keyDown.className = 'number-keys key-down';
    keyboard.appendChild(keyDown);

    let keyRight = document.createElement('button');
    keyRight.className = 'number-keys key-right';
    keyboard.appendChild(keyRight);

}

numberKeyCreate();