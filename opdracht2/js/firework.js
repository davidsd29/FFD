const maxAaantal = 3;
let huidigeAantal = 0;

const minButtons = document.querySelectorAll(' li aside button:first-of-type'),
	plusButtons = document.querySelectorAll('li aside button:last-of-type'),
	arrow = document.querySelectorAll('#mobile-menu img');

minButtons.forEach((minButton) => {
	minButton.addEventListener('click', eentjeErAf);
});

function eentjeErAf() {
	const deParent = this.closest('li');
	const deOutput = deParent.querySelector('output');

	if (parseInt(deOutput.textContent) > 0) {
		deOutput.textContent = parseInt(deOutput.textContent) - 1;

		huidigeAantal--;
	}

	const arrowChild = deParent.querySelector('img');
	setItem.forEach((drop) => {
		drop.removeChild(arrowChild);
	});

		setItem.forEach((drop) => {
		if (drop.hasChildNodes()) {
			if (vuurpijl.src = arrow.src)
			{
			drop.removeChild(vuurpijl);
			}
		}
	});
}
}

plusButtons.forEach((plusButton) => {
	plusButton.addEventListener('click', eentjeErBij);
});

function eentjeErBij() {
	if (huidigeAantal < 3) {
		const deParent = this.closest('aside');
		const deOutput = deParent.querySelector('output');
		deOutput.textContent = parseInt(deOutput.textContent) + 1;

		huidigeAantal++;

		if (parseInt(huidigeAantal.innerHTML) === 3) {
			deParent.querySelector("[value='plus']").disabled = true;
		}
	}

	const deParent = this.closest('li');
	const vuurpijl = deParent.querySelector('img');

	const newImg = new Image();

	setItem.forEach((drop) => {
		if (!drop.hasChildNodes()) {
			newImg.src = vuurpijl.src;
			newImg.classList.add('fw-set');
			drop.appendChild(newImg);
		}
	});
}
