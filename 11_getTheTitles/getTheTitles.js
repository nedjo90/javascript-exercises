/* const books = [
	{
		title: 'Book',
		author: 'Name'
	},
	{
		title: 'Book2',
		author: 'Name2'
	}
] */

const getTheTitles = function (obj) {
	const myArray = [];
	for (let i = 0; i < obj.length; i++) {
		myArray[i] = obj[i].title;
		//console.log(obj[i].title);
	}
	//console.log(myArray);
	return myArray;
}

//getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
