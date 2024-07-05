function showMenu() {
	let menu = document.getElementById('menu')
	let menuNav = document.getElementById('menu-nav')

	if (menuNav.style.display == 'none') {
		menuNav.style.display = 'block'
	} else {
		menuNav.style.display = 'none'
	}
}