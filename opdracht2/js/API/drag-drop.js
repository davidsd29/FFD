const fwDraggable = document.querySelector('.fw-draggable'),
	fwContainers = document.querySelectorAll('.fw-dragdrop');

// fwDraggable.forEach((draggable) => {
	fwDraggable.addEventListener('dragstart', () => {
		fwDraggable.classList.add('dragging');
	// });

	fwDraggable.addEventListener('dragend', () => {
		fwDraggable.classList.remove('dragging');
	});
});

fwContainers.forEach((container) => {
	container.addEventListener('dragover', (e) => {
		e.preventDefault();

		// afterElement is de return of the function getDragAfterElement
		const afterElement = getDragAfterElement(container, e.clientY), // Y positon of th emouse on the screen
			draggable = document.querySelector('.dragging');

		if (afterElement == null) {
			container.appendChild(fwDraggable);
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
		...container.querySelectorAll('.fw-draggable:not(.dragging)'),
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