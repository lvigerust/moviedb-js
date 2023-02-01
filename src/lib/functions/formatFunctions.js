export function getPremiereDate(first_air_date) {
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

	const premiereDate = new Date(first_air_date);
	let day = premiereDate.getDate();
	let month = months[premiereDate.getMonth()];
	let year = premiereDate.getFullYear();
	return `${month} ${day}, ${year}`;
}

export function getTimeUntil(next_air_date) {
	let today = new Date();
	let air_date = new Date(next_air_date);

	let diff = air_date.getTime() - today.getTime();

	const formatDuration = (ms) => {
		if (ms < 0) ms = -ms;
		const time = {
			day: Math.floor(ms / 86400000)
			// hour: Math.floor(ms / 3600000) % 24
			// minute: Math.floor(ms / 60000) % 60
			// second: Math.floor(ms / 1000) % 60
			// millisecond: Math.floor(ms) % 1000
		};
		return Object.entries(time)
			.filter((val) => val[1] !== 0)
			.map((val) => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
			.join(' and ');
	};
	return formatDuration(diff);
}

export function getRuntime(minutes) {
	let h = Math.floor(minutes / 60);
	let m = minutes % 60;

	if (h < 1) {
		return (m + 'm').toString();
	} else return (h + 'h ' + m + 'm').toString();
}
