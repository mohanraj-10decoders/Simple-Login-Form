let username = document.getElementById('username');
let password = document.getElementById('password');
let form = document.getElementById('form');
let error = document.getElementById('error');
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];
// ||
span.onclick = function() {
   modal.style.display = "none";
}
form.addEventListener('submit', e => {
    if(!username.value && !password.value){
        error.innerText = 'Username and password required';
        modal.style.display = "block";
        e.preventDefault();
     }
     else if(!username.value.length){
        error.innerText = 'Username is required';
        modal.style.display = "block";
        e.preventDefault();
     }
     else if(!password.value.length){
        error.innerText = 'Password is required';
        modal.style.display = "block";
        e.preventDefault();
     }
     else if(username.value != 'User1'){
        error.innerText = "User doesn't exist";
        modal.style.display = "block";
        e.preventDefault();
     }
     else if(password.value != "pwd12345"){
        error.innerText = 'Incorrect password';
        modal.style.display = "block";
        e.preventDefault();
     }
})