const level = document.getElementById("level");
const house_type = document.getElementById("house_type");
const form = document.querySelector("form #login");

level.addEventListener("click", () => {
    if(level.style.marginBottom == '100px'){
        level.style.marginBottom = '30px';
    }
    else{
        level.style.marginBottom = '100px';
    }
})
house_type.addEventListener("click", () => {
    if(house_type.style.marginBottom == '70px'){
        house_type.style.marginBottom = '30px';
    }
    else{
        house_type.style.marginBottom = '70px';
    }
})

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
