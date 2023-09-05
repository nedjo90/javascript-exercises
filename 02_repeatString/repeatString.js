const repeatString = function (str, nb) {
	if (nb < 0) {
		return ("ERROR");
	}
	let repeatStr = "";
	for (let i = 0; i < nb; i++) {
		repeatStr += str;
	}
	return (repeatStr);
};

// Do not edit below this line
module.exports = repeatString;
