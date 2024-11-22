const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle the active class to show/hide nav links
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Counting Animation
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    // Speed control for smooth animation
    const increment = target / 200;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 10); // Adjust speed as needed
    } else {
      counter.innerText = target; // Ensure it lands exactly on the target
    }
  };

  updateCount();
});

// JavaScript to handle carousel sliding
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Function to move carousel
function moveCarousel() {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  carouselWrapper.style.transform = `translateX(-${currentIndex * (items[0].offsetWidth + 30)}px)`;
}

// Function to move left
function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // Go to the last item if we're at the first
  }
  moveCarousel();
}

// Function to move right
function moveRight() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Go to the first item if we're at the last
  }
  moveCarousel();
}

// Add event listeners for arrow buttons (optional)
document.querySelector('.carousel-arrow.left').addEventListener('click', moveLeft);
document.querySelector('.carousel-arrow.right').addEventListener('click', moveRight);

// Auto slide (optional)
setInterval(moveRight, 3000); // Slide every 3 seconds
