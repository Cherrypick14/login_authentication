function validateForm(){
    var username = document.myForm.username.value;
    var password = document.myForm.password.value;

    if(username==null || username==""){
        alert("username can't be blank");
        return false;
    } else
    if(password.length<9){
        alert("password must be atleast 9 characters long");
        return false;
    }
}