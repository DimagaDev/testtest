function showMessage(from, text) {
	from = '*' + from + '*'; // немного украсим "from"

	alert(from + ': ' + text);
}

let from = 'Аня';

showMessage(from, 'Привет'); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
alert(from); // Аня

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('А родители разрешили?');
	}
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
	alert('Доступ получен');
} else {
	alert('Доступ закрыт');
}
