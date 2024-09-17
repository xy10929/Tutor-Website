// toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle')
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items')

  // add/remove active class for .mobile-menu-items
  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active')
  })
})

// change navber background on scroll
// window -> browser window
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar')

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll')
  } else {
    navbar.classList.remove('navbar-scroll')
  }
})
