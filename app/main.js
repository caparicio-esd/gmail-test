const messages = document.querySelectorAll('.message');
const content = document.querySelector('.content');

messages.forEach(message => {
    message.onclick = () => {
        content.classList.add('opened');
    }
});

content.onclick = () => {
    content.classList.remove('opened');
}

const searchMenu = document.querySelector('.search_menu');
const smToggle = searchMenu.querySelector('.search_menu_toggle');
const smMenu = searchMenu.querySelector('.search_menu');

smToggle.onclick = () => {
    smMenu.classList.toggle('opened');
}
