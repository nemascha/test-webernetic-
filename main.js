const btn = document.querySelector('.main-btn');
const modal = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal() {
	modal.classList.add('open-popup');
	console.log(modal.classList)
}

function closeModal() {
  modal.classList.remove('open-popup')
}