'use strict'

let time;

const widget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const form = document.getElementById('chat-widget__input');

const rudeRobot = [
	'Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 
	'К сожалению, все операторы заняты. Не пишите нам больше', 
	'Мы не будем вам ничего продавать', 
	'Надеемся, это был последний наш разговор', 
	'Добрый день! До свидания!',
	'Пишите по-русски',
	'Оставьте ваш номер, мы вам не перезвоним',
	'Этот диалог бессмысленен'
];

const robotAnswer = () => {
	const index = Math.floor(Math.random() * 8);
	const messageRobot = rudeRobot[index];
	time = `${new Date().getHours()} : ${new Date().getMinutes()}`;
	messages.innerHTML += `
			<div class="message">
				<div class="message__time"> ${time} </div>
				<div class="message__text">
				  ${messageRobot}
				</div>
			</div>
		`;
}

widget.addEventListener('click', () => widget.classList.add('chat-widget_active'));

widget.addEventListener('keydown', (event) => {
	const messageClient = form.value;
	if (event.key === "Enter" && form.value != '') {
		time = `${new Date().getHours()} : ${new Date().getMinutes()}`;
		messages.innerHTML += `
			<div class="message message_client">
				<div class="message__time"> ${time} </div>
				<div class="message__text">
				  ${messageClient}
				</div>
			</div>
		`;
		robotAnswer();
		form.value = '';
	}
});
