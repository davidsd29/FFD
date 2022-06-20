const explosions = document.querySelectorAll('.firework div'),
	setItem = document.querySelectorAll('.firework-input div'),
	zerostate = document.getElementById('zerostate');
// Launch button
const launchButton = document.getElementById('launch');

// checkEmpty()
// launch
launchButton.addEventListener('click', () => {
	const firework = document.querySelectorAll('.fw-set');

	checkEmpty();
	firework.forEach((arrow) => {
		arrow.classList.add('fw-take-off');
		arrow.addEventListener(
			'animationend',
			() => {
				explosions.forEach((explosion) => {
					explosion.classList.add('boem');

					explosion.addEventListener('animationend', () => {
						explosion.classList.remove('boem');
						arrow.classList.remove('fw-take-off');
						arrow.remove();
					});
				});
			},
			{ once: true }
		);
	});
});

//menu items
const mobileMenu = document.getElementById('menu-mobile'),
	menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
	//get menu

	mobileMenu.classList.toggle('magic');
});

function checkEmpty() {
	setItem.forEach((item) => {
		if (!item.firstElementChild) {
			zerostate.textContent = ' ~ Please choose your firework ~ ';
			setTimeout(() => {
				zerostate.textContent = '';
			}, 2700);
		}
	});
}
