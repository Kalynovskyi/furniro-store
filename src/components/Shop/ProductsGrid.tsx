"use client";

import React, { useRef } from "react";
import Button from "../UI/Button";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import productsSorting from "@/utils/productsSorting";
import productsGridMarkup from "@/utils/productsGridMarkup";
import { filterChange } from "@/redux/features/shop-filter/filterSlice";

export function ProductsGrid(props: ProductsGridProps) {
    const dispatcher = useAppDispatch();
    const filter: ShopFilterState = useAppSelector((state) => state.filterReducer);

    const productsShown = filter.productsAmount;

    const initialProductsAmount = useRef(productsShown);

    /*Check on necessary values*/
    if (productsShown === undefined) throw new Error("Variable productsShown is undefined");

    /*Handle pagination*/
    const handleShowMore = () => {
        dispatcher(filterChange({ productsAmount: productsShown + initialProductsAmount.current!}));
    };

    /*Get sorted products*/
    const Products = productsSorting(filter, props.products)!;
    
    /*Create product grid markup */
    const productsGrid = productsGridMarkup(Products, productsShown);

    return (
        <>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 auto-rows-max">
                {productsGrid}
            </div>
            <div
                className={`text-center mb-16 ${
                    productsShown < Products.length ? "mt-8" : ""
                }`}
            >
                {productsShown < Products.length && (
                    <Button
                        onClick={handleShowMore}
                        className="bg-transparent border border-solid border-brand-color text-brand-color py-3"
                    >
                        Show More
                    </Button>
                )}
            </div>
        </>
    );
}
