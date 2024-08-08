document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Thank you for your interest! Enrollment functionality coming soon.');
        });
    });
});
