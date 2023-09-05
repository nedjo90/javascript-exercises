const sumAll = function (x, y) {
	if (!(Number.isInteger(x) && x >= 0 && Number.isInteger(y) && y >= 0)) {
		return ("ERROR");
	}
	let start;
	let end;
	let sum = 0;
	if (x <= y) {
		start = x;
		end = y;
	}
	else {
		start = y;
		end = x;
	}
	while (start <= end) {
		sum += start;
		start++;
	}
	return (sum);
};

// Do not edit below this line
module.exports = sumAll;
