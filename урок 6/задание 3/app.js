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
		let price =event.target.dataset.price;
		let name = event.target.dataset.name;
		let src = event.target.dataset.src;
		basket.addProduct({ id: id, price: price, name: name, src: src })
	})
});
let basket = {
	products: {},

	
	

	addProduct(product) {
		this.renderProductInBasket(product);
 	},


	renderProductInBasket(product) {
		let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
		if (productExist) {
			 productExist.textContent++;
			 return;
		}
		let productRow = `
				<div class="cart-list__product">
					<a href="product.html" class="cart-list__product_image"><img src="${product.src}" alt="tee-shirt"></a>
						<div class="cart-list__product_data">
							<a href="product.html"><h3>${product.name}</h3></a>
								<div class="star-rating">
									<img src="img/promo/star-rating.png" alt="star-rating">    
								</div>
						<span>1 x ${product.price}</span>
				</div>
				<input type="image" src="img/promo/arrow_cancel.png" alt="arrow_cancel">
			</div>
		`;
		
		let tbody = document.querySelector('.cart-list');
		tbody.insertAdjacentHTML("afterBegin", productRow);
  },
 
	 
}  