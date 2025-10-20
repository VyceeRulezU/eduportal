document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const mobileNav = document.querySelector('.mobile-nav');
    const contentWrapper = document.querySelector('.content-wrapper');
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('show', isMenuOpen);
        const overlay = contentWrapper.querySelector('.overlay');
        if (isMenuOpen) {
            if (!overlay) {
                const newOverlay = document.createElement('div');
                newOverlay.classList.add('overlay');
                contentWrapper.appendChild(newOverlay);
                newOverlay.addEventListener('click', toggleMenu);
            }
        } else {
            if (overlay) {
                contentWrapper.removeChild(overlay);
            }
        }
    };

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});
