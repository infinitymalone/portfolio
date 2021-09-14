const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.Fcontainer');
const container2 = document.querySelector('#about-me');


open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

// open.addEventListener('click', () => container2.classList.add('show-nav'));
// close.addEventListener('click', () => container2.classList.remove('show-nav'));