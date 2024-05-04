const form = document.querySelector("form #login");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    const authenticated = authentication(email, password);
    if (authenticated) {
        window.alert("You are loged in");
        window.location.href= "index.html";
    }
    else {
        window.alert("wrong cridentials")
    }
})

function authentication(email, password) {
    if(password === "password" && email === "muthamakelvinmutuku@gmail.com"){
        return true;
    }
    else{
        return false;
    }
}