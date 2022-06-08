const firework = document.querySelectorAll('.fw-dragdrop img');
const explosion = document.querySelectorAll('.explosion');

// Launch button
const launchButton = document.getElementById('launch'),
	lont = document.querySelector('.lont');

// launch
launchButton.addEventListener('click', () => {
	lont.classList.toggle('set-of');

	setTimeout(() => {
		firework.forEach((arrow) => {
			arrow.classList.add('fw-take-off');
			arrow.addEventListener(
				'animationend',
				() => {
					explosion.forEach((boem) => {
						boem.classList.add('boem');
					});
					arrow.classList.remove('fw-take-off');
				},
				{ once: true }
			);
		});
	}, 2700);
});
