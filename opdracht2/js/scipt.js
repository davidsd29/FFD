const firework = document.querySelectorAll('.fw-set');
const explosions = document.querySelectorAll('.explosion');

// Launch button
const launchButton = document.getElementById('launch'),
	lont = document.querySelector('.lont');

// launch
launchButton.addEventListener('click', () => {
	lont.classList.add('set-of');

	setTimeout(() => {
		firework.forEach((arrow) => {
			lont.classList.remove('set-of');
			arrow.classList.add('fw-take-off');
			arrow.addEventListener(
				'animationend',
				() => {
					explosions.forEach((explosion) => {
						explosion.classList.add('boem');

						explosion.addEventListener('animationend', () => {
							explosion.classList.remove('boem');
							arrow.classList.remove('fw-take-off');
						});
					});
				},
				{ once: true }
			);
		});
	}, 2700);
});
