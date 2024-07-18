document.addEventListener('DOMContentLoaded', function() {
    const scrollToElements = document.querySelectorAll('.scroll-to');

    scrollToElements.forEach(element => {
        element.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
