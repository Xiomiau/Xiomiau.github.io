const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('wheel', (evt) => {
evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});