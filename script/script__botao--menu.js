
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    if (hamburgerButton && menu) {
        hamburgerButton.addEventListener('click', function() {
            menu.classList.toggle('show');
            hamburgerButton.classList.toggle('open');
        });
    }
});
