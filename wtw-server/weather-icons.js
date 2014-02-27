var wi = (function () {
	var iconNames = [
		"wi-day-cloudy-gusts",
		"wi-day-cloudy-windy",
		"wi-day-cloudy",
		"wi-day-fog",
		"wi-day-hail",
		"wi-day-lightning",
		"wi-day-rain-mix",
		"wi-day-rain-wind",
		"wi-day-rain",
		"wi-day-showers",
		"wi-day-snow",
		"wi-day-sprinkle",
		"wi-day-sunny-overcast",
		"wi-day-sunny",
		"wi-day-storm-showers",
		"wi-day-thunderstorm",
		"wi-cloudy-gusts",
		"wi-cloudy-windy",
		"wi-cloudy",
		"wi-fog",
		"wi-hail",
		"wi-lightning",
		"wi-rain-mix",
		"wi-rain-wind",
		"wi-rain",
		"wi-showers",
		"wi-snow",
		"wi-sprinkle",
		"wi-storm-showers",
		"wi-thunderstorm",
		"wi-windy",
		"wi-night-alt-cloudy-gusts",
		"wi-night-alt-cloudy-windy",
		"wi-night-alt-hail",
		"wi-night-alt-lightning",
		"wi-night-alt-rain-mix",
		"wi-night-alt-rain-wind",
		"wi-night-alt-rain",
		"wi-night-alt-showers",
		"wi-night-alt-snow",
		"wi-night-alt-sprinkle",
		"wi-night-alt-storm-showers",
		"wi-night-alt-thunderstorm",
		"wi-night-clear",
		"wi-night-cloudy-gusts",
		"wi-night-cloudy-windy",
		"wi-night-cloudy",
		"wi-night-hail",
		"wi-night-lightning",
		"wi-night-rain-mix",
		"wi-night-rain-wind",
		"wi-night-rain",
		"wi-night-showers",
		"wi-night-snow",
		"wi-night-sprinkle",
		"wi-night-storm-showers",
		"wi-night-thunderstorm",
		"wi-celcius",
		"wi-cloud-down",
		"wi-cloud-refresh",
		"wi-cloud-up",
		"wi-cloud",
		"wi-degrees",
		"wi-down-left",
		"wi-down",
		"wi-fahrenheit",
		"wi-horizon-alt",
		"wi-horizon",
		"wi-left",
		"wi-lightning",
		"wi-night-fog",
		"wi-refresh-alt",
		"wi-refresh",
		"wi-right",
		"wi-sprinkles",
		"wi-strong-wind",
		"wi-sunrise",
		"wi-sunset",
		"wi-thermometer-exterior",
		"wi-thermometer-internal",
		"wi-thermometer",
		"wi-tornado",
		"wi-up-right",
		"wi-up",
		"wi-wind-east",
		"wi-wind-north-east",
		"wi-wind-north-west",
		"wi-wind-north",
		"wi-wind-south-east",
		"wi-wind-south-west",
		"wi-wind-south",
		"wi-wind-west"
	    ];
	var iconIds = {};
	return {
		getIconNames: function () {
			return iconNames;
		},
		setIconIds: function (iconIdsIn) {
			iconIds = iconIdsIn;
		},
		getIconId: function (iconName) {
			return iconIds[iconName];
		}
	};
}());

module.exports = wi;