let lang = 'en';
let capsLock = 'off';
let win = 'off';
let text;
let addTextArea = document.querySelector('#text');
const someKeysArray = ['Shift', 'Alt', 'Ctrl', 'up', 'left', 'right', 'down'];

document.querySelector('#keys').addEventListener('click', (e) => {
    if (capsLock === 'off') {
        text = e.target.innerHTML.toLowerCase();
    } else if (capsLock === 'on') {
        text = e.target.innerHTML.toUpperCase();
    }

    e.target.style.animation = 'pressKey 2s';
    e.target.style.animation = 'pressKeyBack 2s';

    if (e.target.innerHTML === 'Caps Lock' && capsLock === 'off') {
        e.target.style.animation = 'pressKey 2s';
        e.target.style.background = 'rgb(152, 153, 228)';
        text = '';
        capsLock = 'on';
    } else if (e.target.innerHTML === 'Caps Lock' && capsLock === 'on') {
        e.target.style.animation = 'pressKeyBack 2s';
        e.target.style.background = 'white';
        text = '';
        capsLock = 'off';
    }
    if (e.target.innerHTML === 'Win' && win === 'off') {
        e.target.style.animation = 'pressKey 2s';
        e.target.style.background = 'rgb(152, 153, 228)';
        text = '';
        document.querySelector('.number-keys:nth-child(1)').innerHTML = String.fromCharCode(35);
        document.querySelector('.number-keys:nth-child(2)').innerHTML = String.fromCharCode(33);
        document.querySelector('.number-keys:nth-child(3)').innerHTML = String.fromCharCode(34);
        document.querySelector('.number-keys:nth-child(4)').innerHTML = String.fromCharCode(35);
        document.querySelector('.number-keys:nth-child(5)').innerHTML = String.fromCharCode(59);
        document.querySelector('.number-keys:nth-child(6)').innerHTML = String.fromCharCode(37);
        document.querySelector('.number-keys:nth-child(7)').innerHTML = String.fromCharCode(33);
        document.querySelector('.number-keys:nth-child(8)').innerHTML = String.fromCharCode(94);
        document.querySelector('.number-keys:nth-child(9)').innerHTML = String.fromCharCode(38);
        document.querySelector('.number-keys:nth-child(10)').innerHTML = String.fromCharCode(42);
        document.querySelector('.number-keys:nth-child(11)').innerHTML = String.fromCharCode(40);
        document.querySelector('.number-keys:nth-child(12)').innerHTML = String.fromCharCode(41);
        win = 'on';
    } else if (e.target.innerHTML === 'Win' && win === 'on') {
        e.target.style.animation = 'pressKeyBack 2s';
        e.target.style.background = 'white';
        text = '';
        document.querySelector('.number-keys:nth-child(1)').innerHTML = String.fromCharCode(48);
        document.querySelector('.number-keys:nth-child(2)').innerHTML = String.fromCharCode(49);
        document.querySelector('.number-keys:nth-child(3)').innerHTML = String.fromCharCode(50);
        document.querySelector('.number-keys:nth-child(4)').innerHTML = String.fromCharCode(51);
        document.querySelector('.number-keys:nth-child(5)').innerHTML = String.fromCharCode(52);
        document.querySelector('.number-keys:nth-child(6)').innerHTML = String.fromCharCode(53);
        document.querySelector('.number-keys:nth-child(7)').innerHTML = String.fromCharCode(54);
        document.querySelector('.number-keys:nth-child(8)').innerHTML = String.fromCharCode(55);
        document.querySelector('.number-keys:nth-child(9)').innerHTML = String.fromCharCode(56);
        document.querySelector('.number-keys:nth-child(10)').innerHTML = String.fromCharCode(57);
        document.querySelector('.number-keys:nth-child(11)').innerHTML = String.fromCharCode(45);
        document.querySelector('.number-keys:nth-child(12)').innerHTML = String.fromCharCode(61);
        win = 'off';
    }

    if (e.target.innerHTML === 'Backspace') {
        let textAr =  addTextArea.innerHTML;
        let res = textAr.toString().split('');
        res.splice(res.length - 1, 1)
        addTextArea.innerHTML = res.join('');
        text = '';
    }
    if (e.target.innerHTML === 'Tab') {
        text = '    ';
    }
    for(let i = 0; i < 8; i++) {
        if (e.target.innerHTML === someKeysArray[i]) {
            text = '';
        }
    }
    if (e.target.innerHTML === 'Del') {
        let textAre =  addTextArea.innerHTML;
        let ress = textAre.toString().split('');
        ress.splice(0, 1);
        addTextArea.innerHTML = ress.join('');
        text = '';
    }
    if (e.target.innerHTML === 'Space' || e.target.innerHTML === 'Пробел') {
        text = ' ';
    }
    if (e.target.innerHTML === 'Enter') {
        text = '\n';
    }
    addTextArea.innerHTML = addTextArea.innerHTML + text;
})