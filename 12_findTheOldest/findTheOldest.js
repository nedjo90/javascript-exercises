const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
]
//console.table(people);
const findTheOldest = function (obj) {
	const ordered = obj.sort((a, b) => {
		let aAge;
		let bAge;
		if (!a.yearOfDeath) {
			aAge = ((new Date()).getFullYear()) - a.yearOfBirth;
		}
		else {
			aAge = a.yearOfDeath - a.yearOfBirth;
		}
		if (!b.yearOfDeath) {
			bAge = ((new Date()).getFullYear()) - b.yearOfBirth;
		}
		else {
			bAge = b.yearOfDeath - b.yearOfBirth;
		}
		return (aAge > bAge ? -1 : 1);
	});
	return obj[0];
};
//console.log(findTheOldest(people));
//console.table(people);

// Do not edit below this line
module.exports = findTheOldest;
