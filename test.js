function showMessage(from, text) {
	from = '*' + from + '*'; // немного украсим "from"

	alert(from + ': ' + text);
}

let from = 'Аня';

showMessage(from, 'Привет'); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
alert(from); // Аня
