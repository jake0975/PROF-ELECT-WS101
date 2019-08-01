
function login() {
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 if(username == 'admin' && password == 'admin'){
    alert('Welcome! :)');
    window.location.href = "home.html";
 }else{
    alert('Invalid Account');
    window.location.href = "index.html";
 }
 
}