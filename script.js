
const nav = () => {
    const menuCheckbox = document.getElementById("menu_checkbox");
    const menuOpen     = document.getElementById("menu_open");
    const menuClose    = document.getElementById("menu_close");
    
    menuCheckbox.addEventListener('click', (e) => {
        if (e.target.checked) {
            menuOpen.style.display  = "none";
            menuClose.style.display = "block";
        } else {
            menuClose.style.display = "none";
            menuOpen.style.display  = "block";
        }
    });
}

nav();

// var width = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

// console.log({width});

// if (width > 600) {
//     menuClose.style.display = "none";
//     menuOpen.style.display  = "nonw";
// }