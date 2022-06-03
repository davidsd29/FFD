

const firework = document.querySelectorAll('.fw-set');

// Launch button
const launchButton = document.getElementById('launch'),
	lont = document.querySelector('.lont');

// launch
launchButton.addEventListener('click', () => {
	lont.classList.toggle('set-of');

	setTimeout(function () {
		firework.forEach((arrow) => {
			arrow.classList.add('fw-take-off');
			arrow.addEventListener(
				'animationend',
				() => {
					arrow.classList.remove('fw-take-off');
				},
				{ once: true }
			);
		});
	}, 2700);
});

