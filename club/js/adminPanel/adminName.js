const notification=document.getElementById('notification');
const admin=[
    {
        email:"v@",
        password:"v",
    }
]

window.localStorage.setItem("adminId", JSON.stringify(admin));
const storeId = window.localStorage.getItem("adminId");
let id =JSON.parse(storeId);
// console.log("id: ",id);

// console.log(id);

function validation(obj){
    console.log('hii there',obj)
    if(obj.email== " " || obj.password == "" ){
        showNotification('password or email is wrong');
    }else if(obj.email!= id[0].email || obj.password != id[0].password ){
console.log("email: ",obj.email,"email2: ",id[0].email,"id: ",obj.password, "id2: ",id[0].password)

        showNotification('password or email is wrong');
    }else{
        showNotification('login successfully');
        window.open('admin.html');

    }
}

const adminSubmit=document.getElementById('submitAdmin');
adminSubmit.addEventListener('click',(e)=>{
e.preventDefault();
let email=document.getElementById('exampleInputEmail1').value;
let password=document.getElementById('exampleInputPassword1').value;
let obj={
    email:email,
    password:password

}
validation(obj);
// console.log(obj);


})

function showNotification(e){
notification.innerHTML=e;
}