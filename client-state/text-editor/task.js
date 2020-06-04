'use strict';

const editor = document.getElementById('editor');
const button = document.getElementById('button');

editor.addEventListener('input', (e) => {
    e.preventDefault();
    localStorage.setItem('text', editor.value);
});

editor.value = localStorage.getItem('text');

button.addEventListener('click', (e) => {
    e.preventDefault();
    editor.value = '';
    localStorage.removeItem('text');
});
