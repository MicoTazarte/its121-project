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