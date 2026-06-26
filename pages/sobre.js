const profileImages = [
    'me.png',
    'me-2.jpg'
];

let indexImg = 0;

export function initSlideShow() {
    changeImage();

    setInterval(changeImage, 3000);
}

function changeImage() {
    const profilePhoto = document.querySelector("#profile-photo");

    indexImg = (indexImg + 1) % profileImages.length; 

    const path = `../assets/${profileImages[indexImg]}`;

    profilePhoto.style.transition = 'opacity 0.4s ease';
    profilePhoto.style.opacity = '0';

    setTimeout(() => {
        profilePhoto.src = path; 

        void profilePhoto.offsetHeight; 

        profilePhoto.style.opacity = '1';
    }, 400)
}    

