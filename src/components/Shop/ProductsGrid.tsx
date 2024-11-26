"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { filterAdding } from "@/redux/features/shop-filter/filterSlice";
import productsSorting from "@/utils/productsSorting";
import productsGridMarkup from "@/utils/productsGridMarkup";
import { ProductsPagination } from "./ProductsPagination";

export function ProductsGrid(props: ProductsGridProps) {
    const dispatcher = useAppDispatch();
	const filter: ShopFilterState = useAppSelector((state) => state.filterReducer);
	const pagination: PaginationState = useAppSelector((state) => state.paginationReducer);

	/*Check on necessary values*/
	if (filter.productsShown === undefined) throw new Error("Amount of products is undefined");

	/*Get sorted products*/
	const Products = productsSorting(filter, props.products)!;

    dispatcher(filterAdding({ productsAmount: Products.length }));

	/*Create product grid markup */
	const productsGrid = productsGridMarkup(Products, filter, pagination.page);

	return (
		<>
			<div className="space-y-8 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 auto-rows-max">{productsGrid}</div>
			<ProductsPagination
				products={Products}
				productsShown={filter.productsShown}
				paginationType={props.paginationType}
			/>
		</>
	);
}
