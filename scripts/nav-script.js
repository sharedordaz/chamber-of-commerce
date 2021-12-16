let menu_icon = document.querySelector(".menu");
let nav = document.querySelector("nav");

let letters = document.querySelector(".absolute-grid");
//console.log(letters)
//console.log(menu);
menu_icon.addEventListener("click", show_menu)

function show_menu() {
    if (nav.className === ""){
        nav.className = "display-menu";
        if (letters != null){
            letters.style.top = "130%";
        }
    }
    else{
        nav.className = "";
        if (letters != null){
            letters.style.top = "60%";
        }
    }
    
}