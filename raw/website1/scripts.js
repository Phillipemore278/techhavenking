// scripts.js

// Basic form validation example
document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});

// scripts.js

let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slider .slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });

    slideIndex = (slideIndex + 1) % slides.length;
}

// Initial display
showSlides();

// Change slide every 5 seconds
setInterval(showSlides, 5000);


// scripts.js

// Popup Advertisement Script
window.onload = function() {
    const popup = document.getElementById('popup');
    const closePopup = document.querySelector('.close-popup');

    // Show the popup after 3 seconds
    setTimeout(function() {
        popup.style.display = 'flex';
    }, 3000);

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
};

