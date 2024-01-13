const feedback=document.getElementById('feedback');

const financeManagements = window.localStorage.getItem("feedback");
let finance= financeManagements ? JSON.parse(financeManagements)  : [];


function addEventTask(x){
    if(x){
        finance.push(x);
        window.localStorage.setItem("feedback", JSON.stringify(finance));
        showNotification('register successfully ');
      
        console.log(finance);
        return;
    }
    showNotification('something wrong');
}



function insertArray(obj){
    const finance={
         
         name:obj.name,
         college:obj.college,
         mobile:obj.mobile,
         email:obj.email,
         msg:obj.msg

     }
   addEventTask(finance);
  
    //  console.log(task);
}


feedback.addEventListener('click',function(){
   
    const email=document.getElementById('email').value;
    const name=document.getElementById('name').value;
    const college=document.getElementById('college').value;
    const mobile=document.getElementById('mobile').value;
    const msg=document.getElementById('msg').value;
    
    if(msg == ""  || name == "" || college==""  || mobile == "" || email==""){
        showNotification('box can not be empty');
        return;
    }
    
   
    let obj={
       
        name,
        college,
      
      email,
      msg,
        mobile,
       
       
}
console.log(obj);
insertArray(obj);

})




function showNotification(e){
    alert(e);
}