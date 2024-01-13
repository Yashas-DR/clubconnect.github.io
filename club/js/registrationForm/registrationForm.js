const submitForm=document.getElementById('submitForm');

const financeManagements = window.localStorage.getItem("registerStudent");
let finance= financeManagements ? JSON.parse(financeManagements)  : [];


function addEventTask(x){
    if(x){
        finance.push(x);
        window.localStorage.setItem("registerStudent", JSON.stringify(finance));
        showNotification('register successfully ');
        window.open('event.html');
        console.log(finance);
        return;
    }
    showNotification('something wrong');
}



function insertArray(obj){
    const finance={
        event:obj.event,
         id:Date.now(),
         name:obj.name,
         college:obj.college,
         year:obj.year,
         branch:obj.branch,
         password:obj.password,
         mobile:obj.mobile,
        fee:localStorage.getItem("eventFee")

     }
   addEventTask(finance);
  
    //  console.log(task);
}


submitForm.addEventListener('click',function(){
   
    const event=document.getElementById('event').value;
    const name=document.getElementById('name').value;
    const college=document.getElementById('college').value;
    const year=document.getElementById('year').value;
    const branch=document.getElementById('branch').value;
    const password=document.getElementById('Password').value;
    const mobile=document.getElementById('mobile').value;
    
    if(event == ""  || name == "" || college=="" || year == ""  || branch == ""  || mobile == "" || password=="" || email==""){
        showNotification('box can not be empty');
        return;
    }
    
   
    let obj={
        event,
        name,
        college,
        year,
        branch,
        password,
        mobile,
       
       
}
console.log(obj);
insertArray(obj);

})




function showNotification(e){
    alert(e);
}