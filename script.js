const menu = document.querySelector('.toggle');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');
menu.addEventListener('click', function(){
    modal.classList.toggle('modal-display');
    container.classList.toggle('hide-container');
    menu.classList.toggle('close-modal');
})