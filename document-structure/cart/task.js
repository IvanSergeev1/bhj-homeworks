'use strict';

const products = document.querySelector('.products');
const basket = document.querySelector('.cart__products');

let quantity;
let id;
let item;
let image;

products.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('product__quantity-control')) {
        quantity = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (e.target.classList.contains('product__quantity-control_inc')) {
            quantity.textContent++;
        } else if (e.target.classList.contains('product__quantity-control_dec')) {
            quantity.textContent--;
            if (quantity.textContent < 1) {
                quantity.textContent = 1;
            }
        }
    }

    if (e.target.classList.contains('product__add')) {
        id = e.target.closest('.product').dataset.id;
        item = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
        image = e.target.closest('.product').querySelector('.product__image').getAttribute('src');

        if (basket.children.length !== 0 && basket.querySelector(`[data-id="${id}"]`)) {
            basket.querySelector(`[data-id="${id}"]`).querySelector('.cart__product-count').textContent = Number(basket.querySelector(`[data-id="${id}"]`).querySelector('.cart__product-count').textContent) + Number(item);
        } else {
            basket.innerHTML += `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${image}">
            <div class="cart__product-count">${item}</div>
            </div>`;
        }
    }
});
