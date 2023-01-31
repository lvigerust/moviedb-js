let premiereDate;

export function getPremiereDate(air_date) {
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

	premiereDate = new Date(air_date);
	let day = premiereDate.getDate();
	let month = months[premiereDate.getMonth()];
	let year = premiereDate.getFullYear();
	return (premiereDate = `${month} ${day}, ${year}`);
}
