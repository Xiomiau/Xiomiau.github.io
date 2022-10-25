const mobileIcon = document.querySelector('.mobileProfile');
const mobileShare = document.querySelector('.share-mobile');

const desktopIcon = document.querySelector('.desktop');
const desktopShare = document.querySelector('.inactive');



mobileIcon.addEventListener('click', shareMobile);
desktopIcon.addEventListener('click', shareDesktop);



function shareMobile () {
    mobileIcon.classList.add('inactive');
    mobileShare.classList.remove('inactive');
}

function shareDesktop () {
    desktopShare.classList.remove('inactive');
}