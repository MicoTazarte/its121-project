// Toggle Mobile Menu
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// Sticky Navbar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) { 
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Dropdown Toggle (Single Click to Open, Second Click to Navigate)
document.addEventListener("DOMContentLoaded", function () {
    let dropdownParent = document.querySelector(".dropdown-parent > a");
    let dropdown = document.querySelector(".dropdown");

    dropdownParent.addEventListener("click", function (event) {
        if (!dropdown.classList.contains("show")) {
            event.preventDefault(); // Prevent navigation on first click
            dropdown.classList.add("show"); // Show the dropdown
        } else {
            window.location.href = dropdownParent.href; // Navigate on second click
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownParent.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});

// Toggle Dropdown for Mobile
function toggleDropdown(element) {
  const dropdown = element.nextElementSibling;
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  element.parentElement.classList.toggle('active'); // Toggle the 'active' class
}

// Lightbox Functionality
let currentImageIndex = 0;
let galleryImages = [];

function openLightbox(img) {
  galleryImages = Array.from(document.querySelectorAll(".image-gallery img"));
  currentImageIndex = galleryImages.indexOf(img);

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;

  // Hide navbar and disable scrolling
  document.getElementById("navbar").style.display = "none";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";

  // Show navbar and enable scrolling
  document.getElementById("navbar").style.display = "block";
  document.body.style.overflow = "auto";
}

// Function to navigate to next image
function nextImage() {
  if (galleryImages.length === 0) return;
  
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length; // Loop back to first image
  document.getElementById("lightbox-img").src = galleryImages[currentImageIndex].src;
}

// Function to navigate to previous image
function prevImage() {
  if (galleryImages.length === 0) return;
  
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length; // Loop to last image
  document.getElementById("lightbox-img").src = galleryImages[currentImageIndex].src;
}

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function (event) {
  if (event.target === this) {
    closeLightbox();
  }
});

// Keyboard navigation (Arrow keys for next/prev and Escape to close)
document.addEventListener("keydown", function (event) {
  if (document.getElementById("lightbox").style.display === "flex") {
    if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  }
});
