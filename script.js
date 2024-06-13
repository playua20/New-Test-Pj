document.addEventListener('DOMContentLoaded', () => {
	const localization = document.getElementById('localization');
	const selectedOption = document.getElementById('selected-option');
	const dropdownContent = document.getElementById('dropdown-content');
	const localizationItems = document.querySelectorAll('.localization__item');

	const toggleDropdown = () => {
		dropdownContent.style.display =
			dropdownContent.style.display === 'none' ? 'block' : 'none';
	};

	const closeDropdown = () => {
		dropdownContent.style.display = 'none';
	};

	localization.addEventListener('click', (event) => {
		if (
			!event.target.classList.contains('localization__item') &&
			event.target !== selectedOption
		) {
			toggleDropdown();
		}
	});

	localizationItems.forEach((item) => {
		item.addEventListener('click', (event) => {
			selectedOption.textContent = event.target.textContent;
			closeDropdown();
		});
	});

	document.addEventListener('click', (event) => {
		if (!localization.contains(event.target)) {
			closeDropdown();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeDropdown();
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger');
	const menuItems = document.querySelector(
		'.header__top-bar .menu__left-list-items'
	);

	const closeIcon = document.createElement('div');

	closeIcon.classList.add('menu-close');
	closeIcon.innerHTML = '×';
	menuItems.appendChild(closeIcon);

	hamburger.addEventListener('click', () => {
		menuItems.classList.toggle('menu__left-list-items--show');
	});

	closeIcon.addEventListener('click', () => {
		menuItems.classList.remove('menu__left-list-items--show');
	});

	document.addEventListener('click', (e) => {
		if (!menuItems.contains(e.target) && !hamburger.contains(e.target)) {
			menuItems.classList.remove('menu__left-list-items--show');
		}
	});
});
