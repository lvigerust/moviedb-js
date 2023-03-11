let getTimeSince = function (date) {
	if (typeof date !== 'object') {
		date = new Date(date);
	}

	let seconds = Math.floor((new Date() - date) / 1000);
	let days = Math.floor(seconds / 86400);

	return days;
};

let getTimeUntil = function (date) {
	if (typeof date !== 'object') {
		date = new Date(date);
	}
	const timeLeft = date - new Date();
	let days = timeLeft / (1000 * 60 * 60 * 24);

	days = days.toFixed(2);

	return days;
};

let getAirDate = function (date) {
	if (typeof date !== 'object') {
		date = new Date(date);
	}
	const weekday = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
	let dayOfWeek = weekday[date.getDay()];

	return dayOfWeek;
};

export function dynamicCTA(data) {
	let show, movie;

	let CTA = 'Not set';

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
		let next_episode_is_final = false;

		if (show.next_episode) {
			if (show.next_episode.episode_number === last_season.episode_count) {
				next_episode_is_final = true;
			}
		}

		if (active) {
			if (show.next_episode_to_air) {
				next_episode = show.next_episode_to_air;
				days_until_episode = getTimeUntil(next_episode.air_date);
				next_episode_day = getAirDate(next_episode.air_date);
			}

			if (days_until_episode > days_since_episode) {
				CTA = 'Episode ' + last_episode.episode_number + ' ute nå ';
			} else if (next_episode) {
				if ((next_episode_is_final = true)) {
					if (days_until_episode < 1) {
						CTA = 'Sesongfinale i morgen';
					} else CTA = 'Sesongfinalen kommer ' + next_episode_day;
				} else if (days_until_episode > 1) {
					CTA = 'Ny episode i morgen';
				} else CTA = 'Episode ' + next_episode.episode_number + ' kommer ' + next_episode_day;
			}

			if (last_episode.episode_number === last_season.episode_count && days_since_episode > 10) {
				CTA = 'Se hele sesong ' + last_season.season_number + ' nå';
			} else if (last_episode.episode_number === last_season.episode_count) {
				CTA = 'Se sesongfinalen';
			}
		} else {
			if (miniSeries === true) {
				CTA = 'Miniserie';
			} else if (show.tagline) {
				CTA = show.tagline;
			} else CTA = 'Strøm hele serien  nå';
		}

		return CTA.toUpperCase();
	} else if (data.title) {
		movie = data;

		CTA = movie.tagline;

		return CTA;
	}
}
