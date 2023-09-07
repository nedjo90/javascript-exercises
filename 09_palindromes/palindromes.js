const palindromes = function palindromes(str) {
	let cleanStr = str.replace(/[^a-z0-9]/gi, "");
	cleanStr = cleanStr.toLowerCase();
	let reverted = "";
	let i = cleanStr.length - 1;
	while (i >= 0) {
		reverted += cleanStr[i--];
	}
	return (reverted === cleanStr ? true : false);
};


// Do not edit below this line
module.exports = palindromes;
