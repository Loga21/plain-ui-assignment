//declaring and initializing an array
const personDetail = [
  {
    name: 'Satinder',
    gender: 'Male',
    city: 'Bombay'
  },
  {
    name: 'Leslie Mac',
    gender: 'Female',
    city: 'Queensland'
  },
  {
    name: 'Andrea ely',
    gender: 'Female',
    city: 'Rio'
  },
  {
    name: 'Amit Sama',
    gender: 'Male',
    city: 'Scouthe'
  }
];

//getting table element with id
let table = document.getElementById('table');

// using array map method for the given array
personDetail.map((item) => {
  // console.log(item);

  // creating a table row element
  let tableRow = document.createElement('tr');
  tableRow.classList.add("table-row");

  // creating a table data elements
  let name = document.createElement('td');
  let gender = document.createElement('td');
  let city = document.createElement('td');

  // creating a button element
  let button = document.createElement('button');

  // getting values and adding a class
  name.textContent = item.name;
  name.classList.add('table-data');
  gender.textContent = item.gender;
  gender.classList.add('table-data');
  city.textContent = item.city;
  city.classList.add('table-data');
  button.textContent = 'Delete';
  button.classList.add('button');

  // appending the child elements
  table.appendChild(tableRow);
  tableRow.appendChild(name);
  tableRow.appendChild(gender);
  tableRow.appendChild(city);
  tableRow.appendChild(button);

  // function for delete button
  button.addEventListener("click", function (event) {
    // console.log(event);
    // creating a class for transition   
    event.path[1].classList.add('transition');

    // function for set time out
    setTimeout(() => {
      event.path[1].remove();
    }, 1000);
  });
});
