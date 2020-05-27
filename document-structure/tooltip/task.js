'use strict';

const body = document.querySelector('body');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
body.appendChild(tooltip);

document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('has-tooltip')) {
        tooltip.innerText = e.target.getAttribute('title');
        tooltip.style.top = (Number(e.target.getBoundingClientRect().top) + 17) + 'px';
        tooltip.style.left = e.target.getBoundingClientRect().left + 'px';
        tooltip.classList.toggle('tooltip_active');
    }
});
