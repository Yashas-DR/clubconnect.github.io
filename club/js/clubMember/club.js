
const members = window.localStorage.getItem("members");
let member= JSON.parse(members);
const lists =document.getElementById('lists');
console.log(member);

function render(money){
    lists.innerHTML="";
money.map((x)=>{
    lists.innerHTML+=
    `
    <tr>
    <th scope="row">${x.name}</th>
    <td>${x.college}</td>
    <td>${x.mobile}</td>
    <td>${x.year}</td>
    <td><a href="mailto:${x.email}">email</a></td>
    
  </tr>
    
    `
})
}

render(member);

