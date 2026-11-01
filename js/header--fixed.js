const header__container = document.querySelector('.header')


addEventListener('scroll', e => {
  if (window.scrollY > 0) {
    header__container.classList.add('header--fixed')
  } else {
    header__container.classList.remove('header--fixed')
  }
})