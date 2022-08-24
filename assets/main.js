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
           <th><button class="sort-btn" >Sort</button></th>
           <th><button class="filter-btn" >Filter</button></th>
           </tr>
           

`
addBtn.addEventListener("submit", () => {
    let inputName = document.querySelector("#name").value;
    let inputSurname = document.querySelector("#surname").value;
    let inputSalary = document.querySelector("#salary").value;
    tableAdded.innerHTML += `
    <tr  >
    <td> <input id="content-name" value="${inputName}" disabled type="text"> </td>
    <td><input id="content-surname" value="${inputSurname}" type="text" disabled ></td>
    <td> <input  id="content-salary" type="number" value="${inputSalary}" disabled ></td>
    <td><button class="delete-btn" onClick="employeeDelete(event)" >Delete</button> </td>
    <td><button class="edit-btn" onClick="employeeEdit(event)" >Edit</button> </td>
    </tr> 
   `

})

let employeeDelete=(event)=>{
  event.target.parentElement.parentElement.remove();
}
let employeeEdit=(event)=>{
   let parent=event.target.parentElement.parentElement;
   inputList=parent.querySelectorAll("input");
   inputList.forEach(input => {
    let disabledInp=input.getAttribute("disabled"); 
    if (disabledInp != "" && disabledInp == null) {
        input.setAttribute("disabled", "disabled");
      } else {
        input.removeAttribute("disabled");
      }   
   });
   
}