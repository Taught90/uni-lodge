const smallscreen = document.querySelector(".smallscreen");
const listmenu = document.querySelector(".menu");
const navlinks = document.querySelectorAll(".nav-links");
const dropdownlinks = document.querySelector("dropdown-links");

smallscreen.addEventListener("click", () => {
    smallscreen.classList.toggle("active");
    listmenu.classList.toggle("active");
});
navlinks.forEach(n => n.addEventListener("click", () => {
    smallscreen.classList.remove("active");
    listmenu.classList.remove("active");
}));

