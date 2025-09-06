// Gallery image filenames (add/remove as needed)
const imageFiles = [
    'MarcusTuning.jpg',
    'HayAdamsRoof.jpg',
    'tuning.jpg',
    'Buddy.jpg',
    'grandAction.jpg',
    'YamFront.jpg',
    'U1 Strings.jpg',
    'HayAdamsSalon.jpg'
];

// Dynamically create image elements
const carouselImagesDiv = document.querySelector('.carousel-images');
carouselImagesDiv.innerHTML = '';
imageFiles.forEach((file, i) => {
    const img = document.createElement('img');
    img.src = `Images/${file}`;
    img.alt = file.replace(/\.[^.]+$/, '').replace(/([A-Z])/g, ' $1').trim();
    img.className = 'carousel-photo' + (i === 0 ? ' active' : '');
    carouselImagesDiv.appendChild(img);
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-photo');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
let carouselInterval;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-photo');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

function nextImage() {
    let next = (currentIndex + 1) % imageFiles.length;
    showImage(next);
}

function prevImage() {
    let prev = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
    showImage(prev);
}

function startCarousel() {
    carouselInterval = setInterval(nextImage, 4000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

rightArrow.addEventListener('click', () => {
    stopCarousel();
    nextImage();
    startCarousel();
});
leftArrow.addEventListener('click', () => {
    stopCarousel();
    prevImage();
    startCarousel();
});

showImage(0);
startCarousel(); 