export default function productsSorting(filter: ShopFilterState, products: Product[]) {

	const filterProductsByAttr = (products: Product[], filter: ShopFilterState, attr: string) => {
		const filteredProducts = [];
		const filterAttr = filter[attr as keyof ShopFilterState];

		for (let index = 0; index < products.length; index++) {
			const productAttr = products[index][attr as keyof Product];

			if (Array.isArray(filterAttr) && Array.isArray(productAttr)) {
				const isProductInAttr = productAttr?.some((item) => typeof item === "string" &&  filterAttr!.includes(item));

				if (isProductInAttr) {
					filteredProducts.push(products[index]);
				}
			}
		}

		return filteredProducts;
	};

	let filteredProducts = products;

	if (filter.categories?.length !== undefined && filter.categories.length > 0) {
		filteredProducts = filterProductsByAttr(filteredProducts, filter, "categories");
	}

	if (filter.sizes?.length !== undefined && filter.sizes.length > 0) {
		filteredProducts = filterProductsByAttr(filteredProducts, filter, "sizes");
	}

    if (filter.colors?.length !== undefined && filter.colors.length > 0) {
		filteredProducts = filterProductsByAttr(filteredProducts, filter, "colors");
	}

	if (filter.sort !== "default") {
		if (filter.sort === "min-price") {
			filteredProducts = products.sort((a, b) => a.price! - b.price!);
		} else if (filter.sort === "max-price") {
			filteredProducts = products.sort((a, b) => b.price! - a.price!);
		}
	}

	return filteredProducts;
}
