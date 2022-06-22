const explosions = document.querySelectorAll('.firework div'),
	zerostate = document.getElementById('zerostate'),
	setItem = document.querySelectorAll('.launch-box div');

	let deOutput = document.querySelectorAll('output');
// Launch button
const launchButton = document.getElementById('launch');

document.addEventListener('keyup', (event) => {
	var code = event.code;

	if (code === 'Space' || code === 'Enter') {
		setOff();
	}
});

launchButton.addEventListener('click', setOff);

function setOff() {
	const firework = document.querySelectorAll('.fw-set');

	checkEmpty();
	deOutput = 0
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
}

//menu items
const mobileMenu = document.querySelector('nav'),
	menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
	//get menu

	mobileMenu.classList.toggle('magic');
});

function checkEmpty() {
	const vuurpijl = document.querySelector('.launch-box img');

	setItem.forEach((lauchHole) => {
		if (!lauchHole.contains(vuurpijl)) {
			zerostate.textContent = ' ~ Please choose your firework ~ ';
			setTimeout(() => {
				zerostate.textContent = '';
			}, 2700);
		}
	});
}

console.log(checkEmpty());
