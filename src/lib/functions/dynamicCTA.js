import { getAirDate, getTimeSince, getTimeUntil } from '$functions';

function dateToSentence(date) {
	if (typeof date !== 'object') {
		date = new Date(date);
	}

	const months = [
		'Januar',
		'Februar',
		'Mars',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Desember'
	];

	let day = date.getDate();
	let month = months[date.getMonth()];
	let year = date.getFullYear();
	return `${day}. ${month}`;
}

export function dynamicCTA(data) {
	let show, movie;

	let CTA = 'Not set';

	// TV Show Call to Action
	if (data.name) {
		show = data;

		let active = show.in_production;
		let miniSeries;
		if (show.type === 'Miniseries') {
			miniSeries = true;
		}

		let last_season = show.seasons.slice(-1)[0];
		let last_episode = show.last_episode_to_air;
		let days_since_episode = getTimeSince(last_episode.air_date);

		let next_episode;
		let days_until_episode;
		let next_episode_day;
		let next_episode_is_final;

		if (active) {
			CTA = show.tagline;
			// Sjekk om neste episode finnes
			if (show.next_episode_to_air) {
				next_episode = show.next_episode_to_air;
				days_until_episode = getTimeUntil(next_episode.air_date);
				next_episode_day = getAirDate(next_episode.air_date);
				if (next_episode.episode_number === last_season.episode_count) {
					next_episode_is_final = true;
				}
			}

			// Sjekk om dager til neste episode er større enn dager siden forrige episode
			if (days_until_episode > days_since_episode) {
				CTA = `Episode ${last_episode.episode_number} ute nå`;
			} else if (next_episode) {
				if (next_episode_is_final === true && days_until_episode < 1) {
					CTA = `Sesongfinalen kommer i morgen`;
					if (days_until_episode < 0) {
						CTA = 'Se sesongfinalen i dag';
					}
				} else {
					if (days_until_episode > 6) {
						CTA = `Episode ${next_episode.episode_number} kommer ${dateToSentence(
							next_episode.air_date
						)}`;
					} else CTA = `Episode ${next_episode.episode_number} kommer ${next_episode_day}`;
				}
			}

			if (last_episode.episode_number === last_season.episode_count && days_since_episode > 10) {
				CTA = `Se sesong ${last_season.season_number}`;
			} else if (last_episode.episode_number === last_season.episode_count) {
				CTA = 'Se sesongfinalen';
			}
		} else {
			if (miniSeries === true) {
				CTA = 'Miniserie';
			} else if (show.tagline) {
				CTA = show.tagline;
			} else CTA = 'Strøm hele serien';
		}
		return CTA.toUpperCase();
	}

	// Movies Call to Action
	else if (data.title) {
		movie = data;

		CTA = movie.tagline;

		return CTA;
	}
}
