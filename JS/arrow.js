document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.stories__shop');

    sections.forEach(section => {
        const leftArrow = section.parentElement.querySelector('.left-arrow');
        const rightArrow = section.parentElement.querySelector('.right-arrow');
        const items = section.querySelectorAll('.arrivals');

        leftArrow.addEventListener('click', (e) => {
            e.preventDefault();
            section.insertBefore(items[items.length - 1], items[0]);
        });

        rightArrow.addEventListener('click', (e) => {
            e.preventDefault();
            section.appendChild(items[0]);
        });
    });
});
