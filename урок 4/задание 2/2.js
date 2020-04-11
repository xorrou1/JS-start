'use strict';

function product(name,price){
	this.name = name,
	this.price = price
}

product.prototype.make25PercentDiscount = function(){
	this.price *= 0.75;
};

const product1 = new product('honda-civic', 200);
console.log(product1);
product1.make25PercentDiscount();
console.log(product1);


class product_es6 {
	constructor(name,price){
		this.name = name,
		this.price = price
	}

	make25PercentDiscount_es6(){
		this.price *= 0.75;
	}
}

const product2 = new product_es6('ваз-патриот', 150);
console.log(product2);
product2.make25PercentDiscount_es6();
console.log(product2);