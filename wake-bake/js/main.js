(function () {

  document.addEventListener('click', burgerMenu)
  function burgerMenu(event) {
    const burgerIcon = event.target.closest('.burger-icon')
    const burgerLink = event.target.closest('.nav__link')

    if (!burgerIcon && !burgerLink) return

    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }

})()