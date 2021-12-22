<script>
	// # # # # # # # # # # # # #
	//
	//  CLOCK
	//
	// # # # # # # # # # # # # #

	import has from 'lodash/has.js';

	// __ STORES
	import { activeCity } from '$lib/stores.js';

	const API_KEY = 'a9b67d6b5ed093b28c410750ef6a70cd';

	let currentTime;
	let currentWeather = {
		description: '',
		temperature: 0
	};

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

	const updateWeather = (city, country) => {
		console.log(city + ' ' + country);
		// NEW YORK
		fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (has(data, 'weather[0].description')) {
					currentWeather.description = data.weather[0].description;
					currentWeather.temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);
				}
			});
	};

	$: {
		updateWeather($activeCity.name);
		updateTime();
	}
</script>

<div class="clock">
	{#if $activeCity.name}
		<span>It’s {currentTime} and {currentWeather.description} in {$activeCity.name}</span>
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
