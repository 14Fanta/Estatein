const headerLinks = document.querySelectorAll('.header_menu-link')
const headerLink = 'header_menu-link'

const HREF = Array.from(headerLinks).some(
	link => link.getAttribute('href') === '/',
)

const elCorrect = [...headerLinks].filter(
	link => link.getAttribute('href') === '/',
)

addEventListener('click',  e  => {
  if (e.target.classList.contains('.header_menu-link')) {
    e.preventDefault()
    Array.from(headerLinks).forEach(e => e.setAttribute('href', '#'))
    e.target.setAttribute('href', '/')
  }

})
