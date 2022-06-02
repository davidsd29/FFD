// Vending machine items
const items = document.querySelectorAll('.selector img'),
	displayItemIMG = document.querySelector('.display-item img'),
	displayName = document.getElementById('display-item-name'),
	getItem = document.getElementById('get-item'),
	grabItem = document.querySelector('.grab div');

const firework = document.querySelectorAll('.fw-set');

// Error handeling
const errorMessage = document.getElementById('error-machine');

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

// display items
items.forEach((item) => {
	item.addEventListener('click', () => {
		displayName.setAttribute('value', item.id);
		displayItemIMG.classList.remove('d-none');
		displayItemIMG.src = item.src;
	});
});

// get item
getItem.addEventListener('click', () => {
	if (displayItemIMG.getAttribute('src') == '') {
		displayName.setAttribute('value', 'error');
		errorMessage.textContent = 'Please select an item';

		setTimeout(function () {
			displayName.removeAttribute('value');
			errorMessage.textContent = '';
		}, 2000);
	} else {
		displayName.removeAttribute('value');
		displayItemIMG.classList.add('loding');

		console.log(displayItemIMG);

		items.forEach((item) => {
			if (displayItemIMG.src == item.src) {
				displayItemIMG.src = item.src;
				item.classList.add('falling');
				displayItemIMG.src = 'img/loading.gif';

				setTimeout(function () {
					let newImg = new Image();

					newImg.src = item.src;
					displayItemIMG.classList.add('d-none');
					newImg.classList.add('fw-draggable');
					grabItem.appendChild(newImg);
				}, 5000);
			}
		});
	}
});
