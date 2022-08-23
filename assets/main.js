let employeeList = document.querySelector(".list-section");
let addBtn = document.querySelector('#form');
let taBle = document.createElement("table");
employeeList.appendChild(taBle);
let tableAdded = document.querySelector("table");
tableAdded.innerHTML = `
           <tr>
           <th>Name</th>
           <th>Surname</th>
           <th>Salary</th>
           </tr>
           

`
addBtn.addEventListener("submit", () => {
    let inputName = document.querySelector("#name").value;
    let inputSurname = document.querySelector("#surname").value;
    let inputSalary = document.querySelector("#salary").value;
    tableAdded.innerHTML += `
    <tr  >
    <td> <input id="content-name" value="${inputName}" disabled type="text"> </td>
    <td><input id="content-surname"value="${inputSurname}"type="text" disabled ></td>
    <td> <input  id="content-salary" type="number" value="${inputSalary}" disabled ></td>
    <td><button class="delete-btn" >Delete</button> </td>
    <td><button class="edit-btn" >Edit</button> </td>
    </tr> 
   `

})