let grid_view = document.getElementById("grid_view");
let list_view = document.getElementById("list_view");

//console.log(grid_view);
let directory_grid = document.querySelector(".directory-grid")



grid_view.addEventListener("click", () => {

    directory_grid.style.gridTemplate = "1fr 1fr 1fr 1fr/ 1fr 1fr";
    grid_view.style.backgroundColor = "var(--orange)"
    list_view.style.backgroundColor = "var(--blue)"
});

list_view.addEventListener("click", () =>{

    directory_grid.style.gridTemplate = "repeat(7, 1fr)/ 1fr";
    grid_view.style.backgroundColor = "var(--blue)"
    list_view.style.backgroundColor = "var(--orange)"

});