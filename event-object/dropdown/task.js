const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLinks = document.querySelectorAll(".dropdown__link");

dropdownValue.addEventListener("click", function() {
    if (dropdownList.classList.contains("dropdown__list_active")) {
        dropdownList.classList.remove("dropdown__list_active");
    } else {
        dropdownList.classList.add("dropdown__list_active");
    }
});

for (let link of Array.from(dropdownLinks)) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownValue.textContent = link.textContent;
        dropdownList.classList.remove("dropdown__list_active");
    });
}
