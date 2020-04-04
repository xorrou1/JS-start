'use strict';

/**
 * Функция возведения числа в степень.
 * @param {number} val заданное число. 
 * @param {number} pow  степень.
 *  @returns {number} Возводит val в степень pow.
 */
function power(val, pow){
	return( val ** pow );
}

let val = prompt("задайте число", '');
let pow = prompt("задайте степень, в которую вы хотите возвести число.", '');

check(val, pow);
/**
 * Функця проверки. Следит за тем что бы степень была положительной.
 * @param {number} val 
 * @param {boolean} pow проверяет спень. 
 * @returns {number} Если выдает false подставляет значения 'val' и 'pow' в функцию power 
 */
function check(val, pow){
	return (pow < 1)? alert(`Степень ${pow} не поддерживается, используйте натуральное число`) : alert(power(val, pow));
}
