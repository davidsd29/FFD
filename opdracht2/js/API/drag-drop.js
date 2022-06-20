// Vending machine items
const items = document.querySelectorAll('.selector img'),
	displayItemIMG = document.querySelector('.display-item img'),
	displayName = document.getElementById('display-item-name'),
	getItem = document.querySelector('.order button'),
	grabItem = document.querySelector('.grab div')


// Error handeling
const errorMessage = document.querySelector('.order p');

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

		setTimeout( () => {
			displayName.removeAttribute('value');
			errorMessage.textContent = '';
		}, 2000);
	}

	else {
		displayName.removeAttribute('value');
		displayItemIMG.classList.add('loding');

		items.forEach((item) => {
			if (displayItemIMG.src == item.src) {
				displayItemIMG.src = item.src;
				item.classList.add('falling');
				item.addEventListener(
				'animationend',
				() => {
					item.classList.remove('falling');
				},
				{ once: true }
			);

				displayItemIMG.src = 'img/loading.gif';

				setTimeout( () => {
					let newImg = new Image();

					newImg.src = item.src;
					displayItemIMG.src = '';
					displayItemIMG.classList.add('d-none');
					newImg.classList.add('fw-draggable');
					newImg.setAttribute('draggable', 'true');
					grabItem.appendChild(newImg);

					// Drag & drop
					const arrow = document.querySelectorAll('.grab img'), // = new IMG(arrow)
						fwContainers = document.querySelectorAll('.fw-dragdrop');


					arrow.forEach((draggable) => {
						draggable.addEventListener('dragstart', () => {
							draggable.classList.add('dragging');
						});

						draggable.addEventListener('dragend', () => {
							draggable.classList.remove('dragging');
						});
					});

					fwContainers.forEach((container) => {
						container.addEventListener('dragover', (e) => {
							e.preventDefault();

							// afterElement is de return of the function getDragAfterElement
							const afterElement = getDragAfterElement(
									container,
									e.clientY
								), // Y positon of th emouse on the screen
								draggable = document.querySelector('.dragging');

							if (afterElement == null) {
								container.appendChild(draggable);
								draggable.classList.add('fw-set');
							} else {
								container.insertBefore(draggable, afterElement);
								draggable.classList.add('fw-set');
							}
						});
					});

					// y is the position of the mouse where de draggable ellements has to drop
					function getDragAfterElement(container, y) {
						// convert to an array to do array operations on it
						const draggableElements = [
							...container.querySelectorAll(
								'.fw-draggable:not(.dragging)'
							),
						];

						// Function = which element is the closets after my drag element
						// reduce() loops through the draggableElements
						return draggableElements.reduce(
							(closets, child) => {
								// child because it's the child of the container
								// with box you see the characteristics of the element
								const box = child.getBoundingClientRect(),
									offset = y - box.top - box.height / 2; // distence from mouse to center of the box

								// no longer hovering > element but close to > element
								if (offset < 0 && offset > closets.offset) {
									//curent offset
									return {
										offset: offset,
										element: child,
									};
								} else {
									return closets;
								}
							},
							{
								offset: Number.NEGATIVE_INFINITY,
							}
						).element; // You want a number as far away of your cursor & always the smallest
					}
				}, 5000);
			}
		});
	}
});
