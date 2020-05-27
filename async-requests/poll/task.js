'use strict';

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        const text = JSON.parse(xhr.responseText);
        pollTitle.innerText = text.data.title;
        for (let answer in text.data.answers) {
            pollAnswers.innerHTML += `
              <button class="poll__answer">${text.data.answers[answer]}</button>
            `;
        }
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('poll__answer')) {
                event.preventDefault();
                alert('Спасибо, ваш голос засчитан!');
            }
        });
    }; 
};
