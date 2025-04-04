const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

humb.addEventListener('click',() => {
    humb.classlist.toggle('active');
    mobile_menu.classlist.toggle('active');
});
