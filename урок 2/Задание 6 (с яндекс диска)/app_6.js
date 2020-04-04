"use strict";

let deposit = prompt('В ведите сумму которую вы хотите положить на счет.');
let deposit1 = '';

for (;;){
	if (isNaN(deposit) == true || deposit == null){
		alert('Вы ввели не коректное число');
		break

	} else if (deposit1 = deposit.substring(deposit.length - 1)) {
		if (deposit1 === 1){
			deposit1 = 'рубль';
		} else if (deposit1 != 0 && deposit1 <= 4) {
			deposit1 = 'рубля';
		} else {
			deposit1 = 'рублей';
		}
		alert(`Ваша сумма в ${deposit} ${deposit1} успешно зачислена.`);
		break
	}
}


