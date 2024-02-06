let button = document.querySelectorAll('.calc-button');
let result = document.querySelector('.screen');
let total = 0;
let previousOperator;
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        screen(button[i].innerHTML)
    }, false);
}

function mathWork(value) {
    if (result.innerHTML === "0") {
        total = 0;
    }
    const previousInteger = parseFloat(result.innerHTML);
    if (total === 0) {
        total = previousInteger;
    } else {
        equalOperation(previousInteger);
    }

    previousOperator = value;
    result.innerHTML = "0";
}


function equalOperation(previousInteger) {
    if (previousOperator === "+") {
        total += previousInteger;
    } else if (previousOperator === "-") {
        total -= previousInteger;
    } else if (previousOperator === "×") {
        total *= previousInteger;
    } else {
        total /= previousInteger;
    }
}
function screen(value) {
    switch (value) {
        case 'C':
            result.innerHTML = '0';
            total = 0;
            break;
        case '←':
            if (result.innerHTML.length === 1) {
                result.innerHTML = '0';
            } else {
                result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1)
            };
            break;
        case '÷':
        case '×':
        case '-':
        case '+':
            mathWork(value);
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            equalOperation(parseFloat(result.innerHTML));
            previousOperator = null;
            result.innerHTML = +total;
            total = 0;
            break;
        case '.':
            result.innerHTML += value;
            break;
        default:
            if (result.innerHTML === '0') {
                result.innerHTML = value;
            } else {
                result.innerHTML += value;
            };

    }
}

