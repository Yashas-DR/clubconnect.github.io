const memberLogin = window.localStorage.getItem("registerStudent");
let login= JSON.parse(memberLogin);

function memberLogin(){
    const email=document.getElementById('exampleInputEmail1');
    const password=document.getElementById('exampleInputPassword1')
    
     if(email==""  || password==""){
        showNotification('password or email is empty')
     return;
    }else{
       const logins=login.find((x)=>{
        return email == x.password;
       })
       
       console.log("member login" , logins)
    }

}

function showNotification(e){
    alert(e);
}