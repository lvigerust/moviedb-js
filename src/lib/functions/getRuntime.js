export function getRuntime(minutes) {
	let h = Math.floor(minutes / 60);
	let m = minutes % 60;
	return (h + 'h ' + m + 'm').toString();
}
