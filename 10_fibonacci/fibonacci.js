const fibonacci = function (x) {
	if (x <= 0)
		return ("OOPS");
	else if (x == 0)
		return (0);
	else if (x == 1 || x == 2)
		return (1);
	else if (typeof x === "string")
		x = +x;
	let result = 1;
	let n = 1;
	let nU = 0;
	for (let i = 2; i < x; i++) {
		nU = n;
		n = result;
		result = n + nU;
	}
	return (result);
};

// Do not edit below this line
module.exports = fibonacci;
