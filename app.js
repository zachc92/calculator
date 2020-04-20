// grab buttons and inputs
const numBtns = document.querySelectorAll('.numBtn');
const opBtns = document.querySelectorAll('.opBtn');
const mathBtn = document.querySelector('#math');

const input = document.querySelector('input');
const inputStore = document.querySelector('.input-group-text');
const clearBtn = document.querySelector('.input-group-append');

// button event listeners
for (const button of numBtns) {
    button.addEventListener('click', inputNumber);
}

for (const button of opBtns) {
    button.addEventListener('click', chooseOperator);
}

mathBtn.addEventListener('click', doMath);

clearBtn.addEventListener('click', () => {
    input.value = '';
    inputStore.innerText ='';
    firstNum = 0;
});

// storage for first number of an equation
let firstNum = 0;
let operator = '';
let arithmeticDone = false;

// first number input function
function inputNumber(e) {
    if(arithmeticDone == true){
        input.value = '';
        arithmeticDone = false;
    }
    let num = parseInt(e.target.innerText);
    
    input.value += num;
}

// function for choosing operator
function chooseOperator(e) {
    if(input.value === ''){
        firstNum = 0;
    } else {
    firstNum = parseInt(input.value);
    }
    operator = e.target.innerText;
    switch(operator){
        case 'X':
            inputStore.innerText = `${firstNum} x`;
            break;
        case '/':
            inputStore.innerText = `${firstNum} /`;
            break;
        case '+':
            inputStore.innerText = `${firstNum} +`
            break;
        case '-':
            inputStore.innerText = `${firstNum} -`
            break;
    }
    ;
    input.value = '';
    console.log(operator);
}

// function for doing math
function doMath(e){
    let total = 0;
    switch(operator){
        case 'X':
            total = firstNum * parseInt(input.value);
            inputStore.innerText = '';
            input.value = total;
            break;
        case '/':
            total = firstNum / parseInt(input.value);
            inputStore.innerText = '';
            input.value = total;
            break;
        case '+':
            total = firstNum + parseInt(input.value);
            inputStore.innerText = '';
            input.value = total;
            break;
        case '-':
            total = firstNum - parseInt(input.value);
            inputStore.innerText = '';
            input.value = total;
            break;
    }
    operator = '';
    arithmeticDone = true;
}