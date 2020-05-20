'use strict';

const book = document.getElementById('book');
const buttons = document.querySelectorAll('.font-size');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        book.querySelector('.font-size_active').classList.remove('font-size_active');
        button.classList.add('font-size_active');
        if (button.classList.contains('font-size_small')) {
            book.className = 'book book_fs-small';
        } else if (button.classList.contains('font-size_big')) {
            book.className = 'book book_fs-big';
        } else {
            book.className = 'book';
        }
    });
}
