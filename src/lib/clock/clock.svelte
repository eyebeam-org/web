<script>
	// # # # # # # # # # # # # #
	//
	//  CLOCK
	//
	// # # # # # # # # # # # # #
	// __ IMPORT
	import { has, inRange } from 'lodash';
	import { fade } from 'svelte/transition';

	// __ STORES
	import { activeCity } from '$lib/stores.js';

	const API_KEY = 'a9b67d6b5ed093b28c410750ef6a70cd';

	let currentTime;
	let currentWeather = {
		description: '',
		temperature: 0
	};
	let showClock = false;

	const updateTime = () => {
		let d = new Date();
		if ($activeCity.timezone) {
			currentTime = new Intl.DateTimeFormat('en-US', {
				timeZone: $activeCity.timezone,
				hour: 'numeric',
				minute: 'numeric'
			}).format(d);
		}
	};

	setInterval(updateTime, 10000);
	updateTime();

	const weatherCodeToDescription = (id) => {
		if (inRange(id, 200, 299)) return 'stormy';
		if (inRange(id, 300, 599)) return 'rainy';
		if (inRange(id, 600, 699)) return 'snowy';
		if (id == 701 || id == 711) return 'misty';
		if (id == 721 || id == 731) return 'hazy';
		if (id == 741) return 'foggy';
		if (inRange(id, 801, 899)) return 'cloudy';
		return 'clear';
	};

	const updateWeather = (city, country) => {
		showClock = false;
		// NEW YORK
		if (city) {
			fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY)
				.then((response) => response.json())
				.then((data) => {
					if (has(data, 'weather[0].description')) {
						currentWeather.description = weatherCodeToDescription(data.weather[0].id);
						currentWeather.temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);
						showClock = true;
					}
				});
		}
	};

	$: {
		updateTime();
		updateWeather($activeCity.name);
	}
</script>

<div class="clock">
	{#if showClock && $activeCity.name}
		<span in:fade>It’s {currentTime} and {currentWeather.description} in {$activeCity.name}</span>
	{/if}
</div>

<style lang="scss">
	@import '../../variables.scss';

	.clock {
		font-size: $font-size-extra-small;
		color: var(--background-color);

		a {
			color: var(--background-color);
			text-decoration: none;
		}
	}
</style>
