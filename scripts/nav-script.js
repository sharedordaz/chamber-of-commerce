let menu_icon = document.querySelector(".menu");
let nav = document.querySelector("nav");
//console.log(menu);
menu_icon.addEventListener("click", show_menu)

function show_menu() {
    if (nav.className === ""){
        nav.className = "display-menu";
    }
    else{
        nav.className = "";
        }
}