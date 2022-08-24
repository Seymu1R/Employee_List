let employeeList = document.querySelector(".list-section");
let addBtn = document.querySelector('#form');
let tableAdded = document.querySelector("#adedtable");

let filterSalary = document.querySelector("#filter-btn");
let sortName = document.querySelector(".sort-btn");
//create empty array localstorage
if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
}
sortName.addEventListener("click", () => {
    console.log("salam");
    let basketarr = JSON.parse(localStorage.getItem("basket"));
   

    // sort by name   
    let sortedArr =  basketarr.sort((a, b) => {
        const nameA = a.userN.toUpperCase(); // ignore upper and lowercase
        const nameB = b.userN.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });    
    localStorage.setItem("basket", JSON.stringify(sortedArr));
    tableAdded.innerHTML='';
    takeLocal();


})
filterSalary.addEventListener("click",()=>{
    let basketarr = JSON.parse(localStorage.getItem("basket"));
    // sort by value  
    let sortedValue= basketarr.sort((a, b) => b.userSa - a.userSa);
    console.log(sortedValue);
    localStorage.setItem("basket", JSON.stringify(sortedValue));
    tableAdded.innerHTML='';
    takeLocal();
})


addBtn.addEventListener("submit", () => {
    let inputName = document.querySelector("#name").value;
    let inputSurname = document.querySelector("#surname").value;
    let inputSalary = document.querySelector("#salary").value;
    let inputId = document.querySelector("#empId").value;
    let basket = JSON.parse(localStorage.getItem("basket"));
    let result = basket.find(object => object.id === inputId);
    if (result === undefined) {
        let listData = {
            userSa: inputSalary,
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

let employeeDelete = (event) => {
    let basketarr = JSON.parse(localStorage.getItem("basket"));
    let parent = event.target.parentElement.parentElement;
    let removedUser = parent.querySelector("#content-id").value;
    let result = basketarr.find((user) => user.id === removedUser);
    let index = basketarr.indexOf(result);
    if (index > -1) {
        // only splice array when item is found
        basketarr.splice(index, 1); // 2nd parameter means remove one item only
    };
    parent.remove();
    localStorage.setItem("basket", JSON.stringify(basketarr));
}
let employeeEdit = (event) => {
    let parent = event.target.parentElement.parentElement;
    inputList = parent.querySelectorAll("input");
    inputList.forEach(input => {
        let disabledInp = input.getAttribute("disabled");
        if (disabledInp != "" && disabledInp == null) {
            input.setAttribute("disabled", "disabled");
        } else {
            input.removeAttribute("disabled");
        }
    });
}
let takeLocal = () => {
    let basketarr = JSON.parse(localStorage.getItem("basket"));
    basketarr.forEach(user => {
        tableAdded.innerHTML += `
    <tr  >
    <td> <input id="content-id" value="${user.id}" disabled type="text"> </td>
    <td> <input id="content-name" value="${user.userN}" disabled type="text"> </td>
    <td><input id="content-surname" value="${user.userS}" type="text" disabled ></td>
    <td> <input  id="content-salary" type="number" value="${user.userSa}" disabled ></td>
    <td><button class="delete-btn" onClick="employeeDelete(event)" >Delete</button> </td>
    <td><button class="edit-btn" onClick="employeeEdit(event)" >Edit</button> </td>
    </tr> 
   `
    })

}
takeLocal();
