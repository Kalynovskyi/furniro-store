export default function productsSorting(filter: ShopFilterState, products: Product[]) {

	const searchProducts = (products: Product[], filter: ShopFilterState) => {
		const searchValue = filter.searchValue;
		const filteredProducts = [];
		if (searchValue === undefined) return;

		for (let index = 0; index < products.length; index++) {
			const title = products[index].title.toLowerCase();
			const tags = products[index].tags?.toString();

			if (title.includes(searchValue.toLowerCase()) || tags!.includes(searchValue.toLowerCase())) {
				filteredProducts.push(products[index]);
			}
		}

		return filteredProducts;
	};

	const filterProductsByAttr = (products: Product[], filter: ShopFilterState, attr: string) => {
		const filteredProducts = [];
		const filterAttr = filter[attr as keyof ShopFilterState];

		for (let index = 0; index < products.length; index++) {
			const productAttr = products[index][attr as keyof Product];

			if (Array.isArray(filterAttr) && Array.isArray(productAttr)) {
				const isProductInAttr = productAttr?.some((item) => typeof item === "string" && filterAttr!.includes(item));

				if (isProductInAttr) {
					filteredProducts.push(products[index]);
				}
			}
		}

		return filteredProducts;
	};

	let filteredProducts = products;

	if (filter.searchValue?.length !== undefined && filter.searchValue.length > 2) {
		filteredProducts = searchProducts(products, filter)!;
	}

    if (filter.minPrice !== null) {
		filteredProducts = filteredProducts.filter((product) => ( product.price! >= filter.minPrice!));
	}

    if (filter.maxPrice !== null) {
		filteredProducts = filteredProducts.filter((product) => ( product.price! <= filter.maxPrice!));
	}

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
        switch (filter.sort) {
            case "min-price":
                filteredProducts = filteredProducts.sort((a, b) => a.price! - b.price!);
                break;
            case "max-price":
                filteredProducts = filteredProducts.sort((a, b) => b.price! - a.price!);
                break;
            case "min-ratings":
                filteredProducts = filteredProducts.sort((a, b) => a.rating! - b.rating!);
                break;
            case "max-ratings":
                filteredProducts = filteredProducts.sort((a, b) => b.rating! - a.rating!);
                break;
            default:
                break;
        }
	}

	return filteredProducts;
}
