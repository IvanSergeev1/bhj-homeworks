'use strict';

const sign = document.getElementById('signin');
const form = document.getElementById('signin__form');
const button = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');

button.addEventListener('click', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.setItem('id', response.user_id);
                welcome.classList.add('welcome_active');
                sign.classList.remove('signin_active');
                id.textContent = response.user_id;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    };
});

window.addEventListener('load', () => {
    if (localStorage.getItem('id')) {
        welcome.classList.add('welcome_active');
        id.textContent = localStorage.getItem('id');
    } else {
        sign.classList.add('signin_active');
    }
});
