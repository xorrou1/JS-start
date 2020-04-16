'use strict';

/* let cardButton = document.querySelector('.cart-list__button-one');
//переход на страницу корзины
cardButton.addEventListener("click", function (event){
	document.location.href = "shoppingCart.html";
}); */


let basketBtns = document.querySelectorAll('.btn');

basketBtns.forEach(function (ff) {
	ff.addEventListener('click', function (event) {
		let id = event.target.dataset.id;
		let price = event.target.dataset.price;
		let name = event.target.dataset.name;
		let pictures = event.target.dataset.src;
		basket.addProduct({ id: id, price: price, name: name })
	})
});
console.log(addProduct);
/* let basket = {
	products: {},

	
	

	/addProduct(product){
		this.addProductToObject(product);
      this.renderProductInBasket(product);
	},

	addProductToObject(product){
		if (this.products[product.id] == undefined) {
			this.products[product.id] = {
				 price: product.price,
				 name: product.name,
				 count: 1
			}
	  } else {
			this.products[product.id].count++;
	  }
	},
 
	 
}  */