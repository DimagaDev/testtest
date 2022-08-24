const obj = {
	a: 's',
	b: 'h',
};

const sum = (a, b, c, d) => {
	return a + b + c + d;
};

function myFunc(theObject) {
	theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x получает значение "Honda"

myFunc(mycar);
y = mycar.make; // y получает значение "Toyota"
// (свойство было изменено функцией)
