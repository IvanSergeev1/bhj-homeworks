const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");

let index = 0;

function changeActive(index) {
    if (sliders.item(index).classList.contains("slider__item_active")) {
        sliders.item(index).classList.remove("slider__item_active"); 
        dots.item(index).classList.remove("slider__dot_active"); 
    } else {
        sliders.item(index).classList.add("slider__item_active");
        dots.item(index).classList.add("slider__dot_active");
    }
}

next.onclick = function() {
    changeActive(index);
    index++;

    if (index >= sliders.length) {
        index = 0;
    }
    
    changeActive(index);
}

prev.onclick = function() {
    changeActive(index);
    index--;

    if (index < 0) {
        index = sliders.length - 1;
    }

    changeActive(index);
}

for (let i = 0; i < dots.length; i++) {
    dots.item(i).onclick = function() {
        changeActive(index);
        changeActive(i);
        index = i;
    }
}
