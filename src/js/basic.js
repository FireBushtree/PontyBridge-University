var navbar = document.querySelector('#navbar')
var navbarBurger = document.querySelector('#navbarBurger')

navbarBurger.addEventListener('click', function () {
  if (navbar.classList.contains('is-active')) {
    navbar.classList.remove('is-active')
  } else {
    navbar.classList.add('is-active')
  }
})
