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

    const selectAllCheckbox = document.querySelector('.table-title .title-check');
    const rowCheckboxes = document.querySelectorAll('.table-wrapper .title-check');

    selectAllCheckbox.addEventListener('click', () => {
        const isChecked = selectAllCheckbox.textContent.trim() === 'check_box';
        rowCheckboxes.forEach(checkbox => {
            checkbox.textContent = isChecked ? 'check_box_outline_blank' : 'check_box';
            checkbox.classList.toggle('checked-icon', !isChecked);
            checkbox.closest('.row').classList.toggle('selected-row', !isChecked);
        });
        selectAllCheckbox.textContent = isChecked ? 'check_box_outline_blank' : 'check_box';
        selectAllCheckbox.classList.toggle('checked-icon', !isChecked);
    });

    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            const isChecked = checkbox.textContent.trim() === 'check_box';
            checkbox.textContent = isChecked ? 'check_box_outline_blank' : 'check_box';
            checkbox.classList.toggle('checked-icon', !isChecked);
            checkbox.closest('.row').classList.toggle('selected-row', !isChecked);

            const allChecked = Array.from(rowCheckboxes).every(cb => cb.textContent.trim() === 'check_box');
            selectAllCheckbox.textContent = allChecked ? 'check_box' : 'check_box_outline_blank';
            selectAllCheckbox.classList.toggle('checked-icon', allChecked);
        });
    });

    const exportCsvBtn = document.getElementById('csv-btn');
    const rptBtn = document.getElementById('rpt-btn');
    const customAlert = document.getElementById('custom-alert');
    const closeAlertBtn = document.getElementById('close-alert-btn');

    exportCsvBtn.addEventListener('click', () => {
        customAlert.classList.add('show');
    });

    rptBtn.addEventListener('click', () => {
        customAlert.classList.add('show');
    });

    closeAlertBtn.addEventListener('click', () => {
        customAlert.classList.remove('show');
    });
});