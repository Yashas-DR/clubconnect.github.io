const submitForm=document.getElementById('registerData');

const memberOfClub = window.localStorage.getItem("members");
let member = memberOfClub ? JSON.parse(memberOfClub)  : [];


function addEventTask(x){
    if(x){
        member.push(x);
        window.localStorage.setItem("members", JSON.stringify(member));
        showNotification('register successfully ');
        window.open('memberLogin.html');
        console.log(member);
        return;
    }
    showNotification('something wrong');
}



function insertArray(obj){
    const member={
        name:obj.name,
        event:obj.event,
        college:obj.college,
        year:obj.year,
        branch:obj.branch,
        password:obj.password,
         id:Date.now(),
         mobile:obj.mobile,
         email:obj.email,
        
         
    
     }
   addEventTask(member);
  
    //  console.log(task);
}


submitForm.addEventListener('click',function(){
    const email=document.getElementById('email').value;
   
    const name=document.getElementById('name').value;
    const college=document.getElementById('college').value;
    const year=document.getElementById('year').value;
    const branch=document.getElementById('branch').value;
    const password=document.getElementById('Password').value;
    const mobile=document.getElementById('mobile').value;
    if(name == "" || college=="" || year == ""  || branch == ""  || mobile == "" || password==""){
        showNotification('box can not be empty');
        
        return;
    }
    
   
    let obj={
      
        name,
        college,
        year,
        branch,
        password,
        mobile,
        email,
       
}
console.log(obj);
insertArray(obj);

})




function showNotification(e){
    alert(e);
}

function login(){
window.open('memberLogin.html');
}

function register(){
window.open('memberRegister.html');
}