/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');


/*-------------------------------- Variables --------------------------------*/
let currentNumber = '';
let previousNumber = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
      
    });
  });

  calculator.addEventListener('click', (event) => {
    const clicked = event.target;

    if (clicked.classList.contains('number')) {
        currentNumber += clicked.innerText;
        document.querySelector('.display').innerText = currentNumber;
    } else if (clicked.classList.contains('operator')) {
        if (clicked.innerText === 'C') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            document.querySelector('.display').innerText = '0';
        } else {
            operator = clicked.innerText;
            previousNumber = currentNumber;
            currentNumber = '';
        }
    } else if (clicked.classList.contains('equals')) {
        if (previousNumber && currentNumber && operator) {
            const result = calculate(Number(previousNumber), Number(currentNumber), operator);
            document.querySelector('.display').innerText = result;
            previousNumber = result; 
            currentNumber = '';
            operator = '';
        }
    }
});
/*-------------------------------- Functions --------------------------------*/
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return num2;
    }
}