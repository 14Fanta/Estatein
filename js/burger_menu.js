const nav = document.querySelector('.header_menu')
const navList = document.querySelector('.header_menu-list')
const contactBtn = document.querySelector('.header_btn-contact')
const crossMenu = document.querySelector('.burger_menu-icon__menu-cross')
const burgerMenu = document.querySelector('.burger_menu-icon__menu-burger')


addEventListener('click', ({ target }) => {
	if (target.matches('.burger_menu')) {
		nav.classList.toggle('header_menu--open')
		navList.classList.toggle('header_menu-list--open')
		contactBtn.classList.toggle('header_btn-contact--open')
		burgerMenu.classList.toggle('burger_menu-icon__menu-burger--close')
		crossMenu.classList.toggle('burger_menu-icon__menu-cross--open')
	}
})
