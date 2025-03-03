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
