"use strict";

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelector(".tab__contents");
const tabContentItems = document.querySelectorAll(".tab__content");

for (let tab of Array.from(tabs)) {
    tab.addEventListener("click", function() {
        tab.parentElement.querySelector(".tab_active").classList.remove("tab_active");
        tab.classList.add("tab_active");
        tabContents.querySelector(".tab__content_active").classList.remove("tab__content_active");
        let index = Array.from(tabs).indexOf(tab);
        Array.from(tabContentItems)[index].classList.add("tab__content_active");
    })
} 
