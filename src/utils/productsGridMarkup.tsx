import { Product } from "@/components/Shop/Product";

export default function productsGridMarkup(Products: Product[], filter: ShopFilterState, page: number = 1, ) {
	const content = [];
	const indexStart = page > 1 ? (page - 1) * filter.productsAmount! + 1 : page - 1;

	for (let index: number = indexStart; index <= Products.length; index++) {
		if (index < filter.productsAmount! + indexStart) {
			if (Products[index] === undefined) return content;
			content.push(
				<Product
					key={Products[index].id}
					productData={Products[index]}
				></Product>
			);
		}
	}

	return content;
}
