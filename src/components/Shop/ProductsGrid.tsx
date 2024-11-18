"use client";

import React, { useRef } from "react";
import { useAppSelector } from "@/redux/hooks";
import productsSorting from "@/utils/productsSorting";
import productsGridMarkup from "@/utils/productsGridMarkup";
import { ProductsPagination } from "./ProductsPagination";

export function ProductsGrid(props: ProductsGridProps) {
    const filter: ShopFilterState = useAppSelector((state) => state.filterReducer);

    const productsShown = filter.productsAmount;

    /*Check on necessary values*/
    if (productsShown === undefined) throw new Error("Variable productsShown is undefined");

    /*Get sorted products*/
    const Products = productsSorting(filter, props.products)!;
    
    /*Create product grid markup */
    const productsGrid = productsGridMarkup(Products, productsShown);

    return (
        <>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 auto-rows-max">
                {productsGrid}
            </div>
            <ProductsPagination products={Products} productsShown={productsShown} paginationType={props.paginationType}/>
        </>
    );
}
