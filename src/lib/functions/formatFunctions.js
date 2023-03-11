export function dateToSentence(date) {
	if (typeof date !== 'object') {
		date = new Date(date);
	}

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let day = date.getDate();
	let month = months[date.getMonth()];
	let year = date.getFullYear();
	return `${month} ${day}, ${year}`;
}

export function getTimeUntil(date) {
	if (typeof date !== 'object') {
		date = new Date(date);
	}
	const timeLeft = date - new Date();
	let days = timeLeft / (1000 * 60 * 60 * 24);

	days = days.toFixed(2);

	return days;
}

export function getAirDate(date) {
	if (typeof date !== 'object') {
		date = new Date(date);
	}
	const weekday = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
	let dayOfWeek = weekday[date.getDay()];

	return dayOfWeek;
}

export function getRuntime(minutes) {
	let h = Math.floor(minutes / 60);
	let m = minutes % 60;

	if (h >= 1) {
		if (m != 0) {
			return (h + 'h ' + m + 'm').toString();
		} else {
			return (h + 'h').toString();
		}
	} else return (m + 'm').toString();
}

export function dynamicSort(property) {
	let sortOrder = 1;
	if (property[0] === '-') {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a, b) {
		let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		return result * sortOrder;
	};
}

export function slugify(string) {
	let slug = string
		.split(/\s+|\W+/)
		.filter((word) => word.trim() !== '')
		.join('-')
		.toLowerCase();
	return slug;
}
