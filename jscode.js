var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var phonenumber = document.getElementById("phonenumber");
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");
var confirmpassword_error = document.getElementById("confirmpassword_error");
var phonenumber_error = document.getElementById("phonenumber_error");
var lastname_error = document.getElementById("lastname_error");
var firstname_error = document.getElementById("firstname_error");
function validateForm(){
	if(firstname.value.length < 1){
		firstname_error.style.display = "block";
		firstname.focus();
		firstname.style.outline ="none";
		firstname.style.border ="solid 2px red";
		return false;
	}
	
	else if(firstname.value.length > 1){
		firstname_error.style.display = "none";
		firstname.focus();
		firstname.style.border ="solid 2px green";
	}

	
	if(lastname.value.length < 1){
		lastname_error.style.display = "block";
		lastname.focus();
		lastname.style.outline ="none";
		lastname.style.border ="solid 2px red";
		return false;
	}
	
	else if(lastname.value.length > 1){
		lastname_error.style.display = "none";
		lastname.focus();
		lastname.style.border ="solid 2px green";
	}
	
	if(email.value.length < 1){
		email_error.style.display = "block";
		email.focus();
		email.style.outline ="none";
		email.style.border ="solid 2px red";
		return false;
	}
	
	else if(email.value.length > 5){
		email_error.style.display = "none";
		email.focus();
		email.style.border ="solid 2px green";
	}
	
	if(phonenumber.value.length < 10){
		phonenumber_error.style.display = "block";
		phonenumber.focus();
		phonenumber.style.outline ="none";
		phonenumber.style.border ="solid 2px red";
		return false;
	}
	
	else if(phonenumber.value.length > 10){
		phonenumber_error.style.display = "none";
		phonenumber.focus();
		phonenumber.style.border ="solid 2px green";
	}
	
	if(password.value.length < 8){
		password_error.style.display = "block";
		password.focus();
		password.style.outline ="none";
		password.style.border ="solid 2px red";
   		return false;
	}
	
	else if(password.value.length >= 8){
		password_error.style.display = "none";
		password.focus();
	    password.style.border ="solid 2px green";
	}
	
	if(password != confirmpassword){
		confirmpassword_error.style.display = "block";
		confirmpassword.focus();
		confirmpassword.style.outline ="none";
		confirmpassword.style.border ="solid 2px red";
		return false;
	}
	
	else if(password == confirmpassword){
		confirmpassword_error.style.display = "none";
		confirmpassword.focus();
		confirmpassword.style.border ="solid 2px green";
	}
}


var confirmpassword =document.getElementById("confirmpassword");
var eyepass =document.getElementById("eyepass");
var eyeicon =document.getElementById("eyeicon");
var password =document.getElementById("password");

function eyeIcon(){
if (password.type == "password"){
    password.type = "text";
    eyeicon.src = "images/eye_open.png";
}
else if(password.type = "password"){
    eyeicon.src = "images/eye_close.png"; 
}
}

function eyePass(){
if (confirmpassword.type == "password"){
    confirmpassword.type = "text";
    eyepass.src = "images/eye_open.png";
}
else if(confirmpassword.type = "password"){
    eyepass.src = "images/eye_close.png"; 
}
}

function validateFormLogIn(){
var emailempty_error =document.getElementById("emailempty_error");
var passwordempty_error =document.getElementById("passwordempty_error");
var emaillogin = document.getElementById("emaillogin");
var passwordlogin = document.getElementById("passwordlogin");

    

	if(emaillogin.value.length < 1){
		emailempty_error.style.display = "block";
		emaillogin.focus();
		emaillogin.style.outline ="none";
		emaillogin.style.border ="solid 2px red";
		return false;
	}
	
	else if(emaillogin.value.length > 1){
		emailempty_error.style.display = "none";
		emaillogin.focus();
		emaillogin.style.border ="solid 2px green";
	}
	
	if(passwordlogin.value.length < 8){
		passwordempty_error.style.display = "block";
		passwordlogin.focus();
		passwordlogin.style.outline ="none";
		passwordlogin.style.border ="solid 2px red";
   		return false;
	}
	
	else if(passwordlogin.value.length > 8){
		passwordempty_error.style.display = "none";
		passwordlogin.focus();
	    passwordlogin.style.border ="solid 2px green";
	}
}

function showPassLogin(){
if (passwordlogin.type == "password"){
    passwordlogin.type = "text";
    eyeicon.src = "images/eye_open.png";
}
else if(passwordlogin.type = "password"){
    eyeicon.src = "images/eye_close.png"; 
}
}
