// declaring the array
var resultValuesArray = [];
var inputElementsArray = [];
var resultElementsArray = [];

// getting dom Elements by id 
var dottedBox = document.getElementById('dottedBox');
var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');
var removeAll = document.getElementById('removeAll');
var submit = document.getElementById('submitBtn');
var result = document.getElementById('result');
var lowerCaseBtn = document.getElementById('lowerCaseBtn');
var upperCaseBtn = document.getElementById('upperCaseBtn');

// func for add btn 
addBtn.addEventListener('click', () => {
  let inputBox = document.createElement('input');
  inputBox.setAttribute('type', 'text');
  inputBox.classList.add('input-box');
  inputElementsArray.push(inputBox);
  dottedBox.appendChild(inputBox);

  // getting value from input box 
  inputBox.onchange = (event) => {
    let name = event.target.value;
    resultValuesArray.push(name);
    // console.log(resultValuesArray);
  };
})

// func for remove btn
removeBtn.addEventListener('click', () => {
  let index = inputElementsArray.length;
  // console.log(inputElementsArray);
  resultValuesArray.pop();
  inputElementsArray[index - 1].remove();// to remove the last element
  inputElementsArray.pop();//to remove the last value
  // resultElementsArray[index - 1].remove();
  // resultElementsArray.pop();
})

// func for remove all btn
removeAll.addEventListener('click', () => {
  inputElementsArray.map(item => item.remove());
  resultContainer.remove()
  // resultValuesArray = [];
  // window.location.reload();
})

submit.onclick = () => {
  let values = document.getElementById('resultContainer');
  let resultContainer = `<div>${resultValuesArray.map((item) => `<p>${item}</p>`
  ).join('')}</div>`
  values.innerHTML = resultContainer;
}

lowerCaseBtn.onclick = () => {
  let values = document.getElementById('resultContainer');
  let resultContainer = `<div>${resultValuesArray.map((item) => `<p>${item.toLowerCase()}</p>`).join('')}</div>`
  values.innerHTML = resultContainer;
}

upperCaseBtn.onclick = () => {
  let values = document.getElementById('resultContainer');
  let resultContainer = `<div>${resultValuesArray.map((item) => `<p>${item.toUpperCase()}</p>`).join('')}</div>`
  values.innerHTML = resultContainer;
}



