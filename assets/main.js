let employeeList = document.querySelector(".list-section");
let addBtn = document.querySelector('#form');
let taBle = document.createElement("table");  
employeeList.appendChild(taBle);
let tableAdded = document.querySelector("table");
//create empty array localstorage
if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
}
tableAdded.innerHTML = `
           <tr>
           <th>Personal number</th>
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
    let inputId=document.querySelector("#empId").value;
    let basket = JSON.parse(localStorage.getItem("basket"));
    let result = basket.find(object => object.id === inputId);
    if (result === undefined) {
      let listData = {
        userS: inputSalary,
        userN: inputName,
        userS: inputSurname,        
        id: inputId,
      };
      basket.push(listData);
      tableAdded.innerHTML += `
    <tr  >
    <td> <input id="content-id" value="${inputId}" disabled type="text"> </td>
    <td> <input id="content-name" value="${inputName}" disabled type="text"> </td>
    <td><input id="content-surname" value="${inputSurname}" type="text" disabled ></td>
    <td> <input  id="content-salary" type="number" value="${inputSalary}" disabled ></td>
    <td><button class="delete-btn" onClick="employeeDelete(event)" >Delete</button> </td>
    <td><button class="edit-btn" onClick="employeeEdit(event)" >Edit</button> </td>
    </tr> 
   `      
    } 
    else {
      alert("This user already exist");
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    
    
})

let employeeDelete=(event)=>{
 let basketarr = JSON.parse(localStorage.getItem("basket"));
 let parent =  event.target.parentElement.parentElement; 
  let removedUser=parent.querySelector("#content-id").value;
  let result = basketarr.find((user) => user.id === removedUser);
  let index = basketarr.indexOf(result);
  if (index > -1) {
    // only splice array when item is found
    basketarr.splice(index, 1); // 2nd parameter means remove one item only
  };
  parent.remove();
  localStorage.setItem("basket", JSON.stringify(basketarr));
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