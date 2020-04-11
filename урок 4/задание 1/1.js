'use strict';

let numeral = Number(prompt('Введи целое число от 0 - 999'));

let numeralSeparation = arrNumeral(numeral);

/**
 * Функуия сначало проводит проверку на правельность ввода:
 * !Number.isInteger(numeral) проверка для орпеделения целого числа\
 * numeral < 0 число должно быть больше 0\
 * numeral > 999 число должно быть меньше 999\
 * Затем число превращается в массив и в случае нехватки разрядов идет добовление.
 * @param {number,string} numeral число введеное пользователем.
 * @returns 
 */
function arrNumeral(numeral){
	if(!Number.isInteger(numeral) || numeral < 0 || numeral > 999){
		alert(`Вы ввели ${numeral}. Значение должно быть целым числом и быть в диапозоне от 0 -999.`);
		return{};
	} else {
		numeral = String(numeral).split();
		if(numeral.length < 2){
			numeral.unshift('0','0');
		} else if (numeral.length < 3){
			numeral.unshift('0');
		} 
			return numeral;
	}
}

function list(units, tens, hundreds){
	this.units = units,
	this.tens = tens,
	this.hundreds = hundreds
}

let list1 = new list(numeralSeparation[2],numeralSeparation[1],numeralSeparation[0]);
console.log(list1);