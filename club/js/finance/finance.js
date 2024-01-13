
const registerStudent = window.localStorage.getItem("registerStudent");
let finances= JSON.parse(registerStudent);
const list =document.getElementById('list');
console.log(finances);

function render(money){
    list.innerHTML="";
money.map((x)=>{
    list.innerHTML+=
    `
    <tr>
    <th scope="row">${x.name}</th>
    <td>${x.event}</td>
    <td>${localStorage.getItem('eventFee')}</td>
    <td>${x.college}</td>
    
  </tr>
    
    `
})
}

render(finances);


let searchBar=document.getElementById('eventBoxs');

searchBar.addEventListener('keyup',function(event){
    let keyWord=searchBar.value.toLowerCase();
    // console.log(keyWord);
    let filterEvent=finances.filter((x)=>{
    //    x = x.toLowerCase();
    if(x.name.indexOf(keyWord) > -1){
        return x.name.indexOf(keyWord) > -1
    }else if(x.college.indexOf(keyWord) > -1){
        return x.college.indexOf(keyWord) > -1

    }
      
    });
    console.log(filterEvent);

    renderList(filterEvent);

  
   

   
});

