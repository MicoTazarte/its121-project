function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) { 
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

function toggleDropdown(element) {
  const dropdown = element.nextElementSibling;
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  element.parentElement.classList.toggle('active'); // Toggle the 'active' class
}