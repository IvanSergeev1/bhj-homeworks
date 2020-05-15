const links = document.querySelectorAll(".menu__link");

for (let link of Array.from(links)) {
    link.onclick = function() {
        if (link.parentElement.querySelector(".menu_sub").classList.contains("menu_active")) {
            link.parentElement.querySelector(".menu_sub").classList.remove("menu_active");
            return false;
        } 
        
        if (link.parentElement.querySelector(".menu_sub")) {
            if (link.closest(".menu_main").querySelector(".menu_active")) {
                link.closest(".menu_main").querySelector(".menu_active").classList.remove("menu_active");
            }
            link.parentElement.querySelector(".menu_sub").classList.add("menu_active");
            return false;
        }
    }
}
