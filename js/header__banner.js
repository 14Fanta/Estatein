const header__banner = document.querySelector('.header__banner');

const headerBannerOpen = () => {
  header__banner.classList.add('header__banner--open');
}

setTimeout(headerBannerOpen, 3000);

addEventListener('click', ({ target }) => {
	if (target.classList.contains('header__banner--close')) {
		header__banner.classList.remove('header__banner--open');
	}
})