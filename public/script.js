const main = async () => {
	const contentEl = document.querySelector('#content');

	const res = await fetch('/products');
	const data = await res.json();

	const products = data.map(createProductsItemHtml);
	const productsHtml = createProductsHtml(products);

	contentEl.innerHTML = productsHtml;
};

const createProductsHtml = (products) => {
	return `
		<div class="products">
			<div class="products__container">
				${products.join('')}
			</div>
		</div>
	`;
}

const createProductsItemHtml = (product) => {
	return `
		<div class="products__item">
			<img
				class="products__item__image"
				src="${product.thumbnail}"
				alt=""
			/>
			<div class="products__item__content">
				<div class="products__item__title">
					${product.title}
				</div>
				<div class="products__item__description">
					${product.description}
				</div>
				<div class="products__item__price">
					$${product.price}
				</div>
			</div>
		</div>
	`;
}

main();