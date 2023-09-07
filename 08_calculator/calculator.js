const add = function (a, b) {
	return (a + b);
};

const subtract = function (a, b) {
	return (a - b);
};

const sum = function (a) {
	if (a.length === 0)
		return (0);
	let sum = 0;
	a.forEach(x => sum += x);
	return (sum);
};

const multiply = function (a) {
	let result = 1;
	a.forEach(x => result *= x);
	return (result);
};

const power = function (x,p) {
	result = 1;
	for (let i = 0; i < p; i++)
		result *= x;
	return result;
};

const factorial = function (x) {
	let result = 1;
	for (let i = 1; i <= x; i++)
		result *= i;
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
