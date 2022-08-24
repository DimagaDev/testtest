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

function map(f, a) {
	var result = []; // Создаём новый массив
	var i; // Объявляем переменную
	for (i = 0; i != a.length; i++) result[i] = f(a[i]);
	return result;
}
var f = function (x) {
	return x * x * x;
};
var numbers = [0, 1, 2, 5, 10];
var cube = map(f, numbers);
console.log(cube);
