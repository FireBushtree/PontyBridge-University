(function () {
  var topNavbar = document.querySelector('#topNavbar')
  var navbarBuger = document.querySelector('#navbarBuger')

  navbarBuger.addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active')
      topNavbar.classList.remove('is-active')
    } else {
      this.classList.add('is-active')
      topNavbar.classList.add('is-active')
    }

  })
})()