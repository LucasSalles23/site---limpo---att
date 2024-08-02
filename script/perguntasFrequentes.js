document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = question.querySelector('.arrow');

        question.addEventListener('click', function() {
            // Toggle para mostrar ou esconder a resposta
            if (answer.classList.contains('open')) {
                answer.classList.remove('open');
                arrow.classList.remove('open');
            } else {
                answer.classList.add('open');
                arrow.classList.add('open');
            }
        });
    });
});
