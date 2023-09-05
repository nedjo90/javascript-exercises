const convertToCelsius = function (deg) {
	let celsius = (deg - 32) * (5 / 9);
	celsius = (Math.ceil(celsius * 10) / 10);
	return (celsius);
};

const convertToFahrenheit = function (deg) {
	let fahr = (deg * 9 / 5) + 32;
	fahr = (Math.ceil(fahr * 10) / 10);
	return (fahr);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit
};
