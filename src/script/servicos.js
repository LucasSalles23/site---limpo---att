    document.addEventListener('DOMContentLoaded', function() {
        const saibaMaisLinks = document.querySelectorAll('.saiba-mais');
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.close');

        saibaMaisLinks.forEach((link, index) => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                modals[index].style.display = 'flex';
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
            });
        });

        window.addEventListener('click', function(event) {
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });