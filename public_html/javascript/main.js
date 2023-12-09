document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach((faq) => {
        const faqIcon = faq.querySelector('.faq-icon');

        faq.addEventListener('click', () => {
            const isOpen = faq.getAttribute('data-open') === 'true';

            faq.setAttribute('data-open', isOpen ? 'false' : 'true');
            faqIcon.src = isOpen ? 'assets/icon-plus.svg' : 'assets/icon-minus.svg';
        });
    });
});
