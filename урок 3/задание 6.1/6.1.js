'use strict';

let iteration = Number(prompt('В ведите количесво повтрений'));

function pyramid() {

	let rr = [];

	for( let i = 0 ; i < iteration ; i++){
		rr.push('*');
		console.log(rr);
	}

};

pyramid();