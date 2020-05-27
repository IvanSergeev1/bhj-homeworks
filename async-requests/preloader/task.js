'use strict';

const items = document.getElementById('items');
const img = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        const text = JSON.parse(xhr.responseText);
        const valutes = text.response.Valute;
        for (let valute in valutes) {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
              <div class="item__code">${valutes[valute].CharCode}</div>
              <div class="item__value">${valutes[valute].Value}</div>
              <div class="item__currency">${valutes[valute].Name}</div>
            `;
            items.appendChild(item);
        }
        img.classList.remove('loader_active');
    }; 
};
