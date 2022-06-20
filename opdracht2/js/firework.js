const maxAaantal = 3;
let huidigeAantal = 0;

const minButtons = document.querySelectorAll(' .controle button:first-of-type'),
	plusButtons = document.querySelectorAll('.controle  button:last-of-type'),
	arrow = document.querySelectorAll('#mobile-menu img');
	// setItem = document.querySelectorAll('.firework-input div');

minButtons.forEach((minButton) => {
	minButton.addEventListener('click', eentjeErAf);
});

function eentjeErAf() {
	let deParent = this.closest('li');
	let deOutput = deParent.querySelector('output');

	if (parseInt(deOutput.textContent) > 0) {
		deOutput.textContent = parseInt(deOutput.textContent) - 1;

		huidigeAantal--;
	}

	arrowChild = deParent.querySelector('img');
	setItem.forEach((drop) => {
		drop.removeChild(arrowChild);
	});
}

plusButtons.forEach((plusButton) => {
	plusButton.addEventListener('click', eentjeErBij);
});

function eentjeErBij() {
	if (huidigeAantal < 3) {
		let deParent = this.closest('aside');
		let deOutput = deParent.querySelector('output');
		deOutput.textContent = parseInt(deOutput.textContent) + 1;

		huidigeAantal++;
	}

	let deParent = this.closest('li');
	let deOutput = deParent.querySelector('img');

	let newImg = new Image();

	setItem.forEach((drop) => {
		newImg.src = deOutput.src;
		newImg.classList.add('fw-set');
		drop.appendChild(newImg);
	});
}
