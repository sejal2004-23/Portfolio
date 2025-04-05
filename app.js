// Select elements correctly
const hamb = document.querySelector('.hamb'); 
const mobile_menu = document.querySelector('.nav-list ul');
const header = document.querySelector('.header');
const menu_item = document.querySelectorAll('.nav-list ul li a');

// Toggle menu on hamburger click
hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Change header background color on scroll
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Close menu when a menu item is clicked (for mobile)
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamb.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});
