var currentnumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

function increment(){
    currentNumber += 1;
    currentnumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentnumberWrapper.style.color = 'red';
    } else {
        currentnumberWrapper.style.color = 'black';
    }
}

function decrement(){
    currentNumber -= 1;
    currentnumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentnumberWrapper.style.color = 'red';
    } else {
        currentnumberWrapper.style.color = 'black';
    }
}
