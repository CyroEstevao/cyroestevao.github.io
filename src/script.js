const menu = document.getElementById("menu");
const action = document.getElementById("navItems");

menu.addEventListener("click", ()=>{
    handleMenu();
})

function handleMenu(){
    alert("hey");
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}