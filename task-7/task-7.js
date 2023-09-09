//declaring an array object
let userList = [
  {
    name: 'Paresh',
    email: 'paresh@gmail.com'
  },
  {
    name: 'Hardik',
    email: 'hardik@gmail.com'
  }
]

let thead = `
<tr>
  <td>Name</td>
  <td>Email</td>
  <td>Action</td>
</tr>
`
//getting table head by id
document.getElementById('tableHead').innerHTML = thead;

//declaring variable in global scope
var selectedIndex = 0;
var selectedRow = '';
var selectedDeleteRow = '';

//mapping the table row elements
let tbody = userList.map((item, index) => {
  return `<tr>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td><button class="edit-btn" onclick="handleEditRow(${index},this)">Edit</button>
      <button  class="delete-btn" onclick="handleDeleteRow(${index},this)">Delete</button>
    </td>
  </tr>  
  `
}).join("");
document.getElementById('tableBody').innerHTML = tbody;

// function for editing row 
function handleEditRow(index, item) {
  // console.log(a)
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  name.value = userList[index].name;
  email.value = userList[index].email;
  selectedIndex = index;
  selectedRow = item.parentElement.parentElement;
}

// function for deleting row 
function handleDeleteRow(index,item) {
  console.log(index)
  selectedDeleteRow = item.parentElement.parentElement;
  selectedDeleteRow.remove()
}

// function for saving the values 
function handleSaveDetails() {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  // console.log(selectedIndex);
  userList[selectedIndex].name = name.value;
  userList[selectedIndex].email = email.value;
  selectedRow.childNodes[1].innerHTML = name.value;
  selectedRow.childNodes[3].innerHTML = email.value;
}






