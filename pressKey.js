const arrayKey = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'keyQ', 'keyW', 'keyE', 'keyR', 'keyT', 'keyY', 'keyU', 'keyI', 'keyO', 'keyP', 'BracketLeft', 'BracketRight', 'Delete', 'CapsLock', 'keyA', 'keyS', 'keyD', 'keyF', 'keyG', 'keyH', 'keyJ', 'keyK', 'keyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'Slash', 'keyZ', 'keyX', 'keyC', 'keyV', 'keyB', 'keyN', 'keyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

function pressKey (arr, color) {
    for (let i = 0; i < 70; i++) {
        if  (event.code === arr[i]) {
            document.querySelector(`.number-keys:nth-child(${i + 1})`).style.background = color;
        }
    }
}



document.addEventListener('keydown', function(event) {
    pressKey (arrayKey, keyColor[0]);
});

document.addEventListener('keyup', function(event) {
    pressKey (arrayKey, keyColor[1]);
});