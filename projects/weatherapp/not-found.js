// Update copyright year automatically
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.site-footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© ${currentYear} George Surridge. All rights reserved.`;
    }
});
