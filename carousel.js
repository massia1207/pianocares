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

// Reviews Carousel
const reviewCards = document.querySelectorAll('.review-card');
const reviewLeftArrow = document.querySelector('.review-arrow.left');
const reviewRightArrow = document.querySelector('.review-arrow.right');
const reviewDotsContainer = document.querySelector('.review-dots');
let currentReviewIndex = 0;
let reviewInterval;

// Create dots for reviews
if (reviewDotsContainer && reviewCards.length > 0) {
    reviewCards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'review-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to review ${i + 1}`);
        dot.addEventListener('click', () => {
            stopReviewCarousel();
            showReview(i);
            startReviewCarousel();
        });
        reviewDotsContainer.appendChild(dot);
    });
}

function showReview(index) {
    reviewCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
    const dots = document.querySelectorAll('.review-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentReviewIndex = index;
}

function nextReview() {
    let next = (currentReviewIndex + 1) % reviewCards.length;
    showReview(next);
}

function prevReview() {
    let prev = (currentReviewIndex - 1 + reviewCards.length) % reviewCards.length;
    showReview(prev);
}

function startReviewCarousel() {
    reviewInterval = setInterval(nextReview, 6000);
}

function stopReviewCarousel() {
    clearInterval(reviewInterval);
}

if (reviewRightArrow) {
    reviewRightArrow.addEventListener('click', () => {
        stopReviewCarousel();
        nextReview();
        startReviewCarousel();
    });
}

if (reviewLeftArrow) {
    reviewLeftArrow.addEventListener('click', () => {
        stopReviewCarousel();
        prevReview();
        startReviewCarousel();
    });
}

if (reviewCards.length > 0) {
    showReview(0);
    startReviewCarousel();
}