'use strict';

const reveals = document.querySelectorAll('.reveal');

function displayReveal() {
    for (let reveal of reveals) {
        if (reveal.getBoundingClientRect().top < window.innerHeight && reveal.getBoundingClientRect().top > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    }
};

document.addEventListener('scroll', displayReveal);
