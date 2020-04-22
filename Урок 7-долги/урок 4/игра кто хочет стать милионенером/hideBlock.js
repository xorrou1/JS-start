let hide = {
	/**
	 * Метод скрывает блок приветсвие после нажатия кнопки старт
	 * 
	 */
	hideBlock(){
		this.greatingElement = document.querySelectorAll('.greating');
		this.greatingElement.forEach(function (Element) {
		Element.style.display = "none";
		})
	},
};