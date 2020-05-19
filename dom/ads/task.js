'use strict';

function changeRotator() {
    const rotator = document.querySelector('.rotator__case_active');
    rotator.classList.remove('rotator__case_active');
    if (rotator.nextElementSibling) {
        rotator.nextElementSibling.classList.add('rotator__case_active');
    } else {
        rotator.parentElement.querySelector('.rotator__case').classList.add('rotator__case_active');
    }
    const activeRotator = document.querySelector('.rotator__case_active');
    activeRotator.style.color = activeRotator.dataset.color;
}

setInterval(changeRotator, 1000);
