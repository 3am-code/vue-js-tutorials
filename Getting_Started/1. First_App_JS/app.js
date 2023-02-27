const buttonEL = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');


function addGoal() {
    const enteredValue = inputEl.value;
    const listItemValue = document.createElement('li');
    listItemValue.textContent = enteredValue;
    listEl.appendChild(listItemValue);
    listEl.value = '';
}

buttonEL.addEventListener('click', addGoal)