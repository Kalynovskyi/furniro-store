"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import productsSorting from "@/utils/productsSorting";
import productsGridMarkup from "@/utils/productsGridMarkup";
import { ProductsPagination } from "./ProductsPagination";

export function ProductsGrid(props: ProductsGridProps) {
    const filter: ShopFilterState = useAppSelector((state) => state.filterReducer);
    const pagination: PaginationState = useAppSelector((state) => state.paginationReducer);

    /*Check on necessary values*/
    if (filter.productsAmount === undefined) throw new Error("Amount of products is undefined");

    /*Get sorted products*/
    const Products = productsSorting(filter, props.products)!;
    
    /*Create product grid markup */
    const productsGrid = productsGridMarkup(Products, filter, pagination.page);
    
    return (
        <>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 auto-rows-max">
                {productsGrid}
            </div>
            <ProductsPagination products={Products} productsShown={filter.productsAmount} paginationType={props.paginationType}/>
        </>
    );
}
