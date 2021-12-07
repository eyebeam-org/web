<script>
	// # # # # # # # # # # # # #
	//
	//  CLOCK
	//
	// # # # # # # # # # # # # #

	// __ STORES
	import { activeCity } from '$lib/stores.js';

	const API_KEY = 'a9b67d6b5ed093b28c410750ef6a70cd';

	let newYorkTime;
	let currentWeather = {
		nyc: {
			description: '',
			temperature: ''
		}
	};

	const updateTime = () => {
		let d = new Date();
		newYorkTime = new Intl.DateTimeFormat('en-US', {
			timeZone: 'America/New_York',
			hour: 'numeric',
			minute: 'numeric'
		}).format(d);
	};

	setInterval(updateTime, 10000);
	updateTime();

	const updateWeather = () => {
		// NEW YORK
		fetch('https://api.openweathermap.org/data/2.5/weather?q=new york&appid=' + API_KEY)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data)
				currentWeather['nyc'].description = data.weather[0].description;
				currentWeather['nyc'].temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);
			});
	};

	updateWeather();
</script>

<div class="clock">
	{#if $activeCity.name}
		<span>It’s {newYorkTime} and {currentWeather['nyc'].description} in {$activeCity.name}</span>
	{/if}
</div>

<style lang="scss">
	@import '../../variables.scss';

	.clock {
		font-size: $font-size-extra-small;
		color: $white;

		a {
			color: $white;
			text-decoration: none;
		}
	}
</style>
