'use strict';

const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift(); 
    }
};

window.addEventListener('load', () => {
    if (!getCookie('closed')) {
        modal.classList.add('modal_active');
    }
});

close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'closed=true';
});
