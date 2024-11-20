"use client";

import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { pageChange } from "@/redux/features/shop-pagination/paginationSlice";
import { filterChange } from "@/redux/features/shop-filter/filterSlice";
import Button from "../UI/Button";

export function ProductsPagination(props: ProductsPaginationProps) {
    const dispatcher = useAppDispatch();
    const products = props.products;
    const productsShown = props.productsShown;
    const productsPagination = props.paginationType;

    const initialProductsAmount = useRef(productsShown);

    const pagination: PaginationState = useAppSelector(
        (state) => state.paginationReducer
    );

    /*Handle pagination*/
    const handleShowMore = () => {
        dispatcher(
            filterChange({
                productsAmount: productsShown + initialProductsAmount.current!,
            })
        );
    };

    const handlePaginationClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        const value = event.currentTarget.id;
        const currentPage = pagination.page

        if (value === "next") {
            dispatcher(pageChange(currentPage + 1))
        } else if (value === "prev") {
            dispatcher(pageChange(currentPage - 1))
        } else {
            dispatcher(pageChange(+value))
        }
    };

    const numericPaginationMarkup = () => {
        const pages = Math.ceil(products.length / productsShown);
        const buttons = [];

        for (let index: number = 1; index <= pages; index++) {
            buttons.push(
                <Button
                    key={index}
                    id={index.toString()}
                    className={`w-[3.75rem] h-[3.75rem] px-0 py-0 rounded-lg 
                            ${
                                index === pagination.page
                                    ? ""
                                    : "bg-secondary-bg-color text-black"
                            }`}
                    onClick={handlePaginationClick}
                >
                    {index}
                </Button>
            );
        }

        if (pagination.page < pages) {
            buttons.push(
                <Button
                    key={pages + 1}
                    className="h-[3.75rem] py-0 rounded-lg !px-7 bg-secondary-bg-color text-black"
                    id="next"
                    onClick={handlePaginationClick}
                >
                    Next
                </Button>
            );
        }

        if (pagination.page > 1) {
            buttons.unshift(
                <Button
                    key={0}
                    className="h-[3.75rem] py-0 rounded-lg !px-7 bg-secondary-bg-color text-black"
                    id="prev"
                    onClick={handlePaginationClick}
                >
                    Prev
                </Button>
            );
        }

        return buttons;
    };

    const paginationMarkup = () => {
        if (productsPagination === "numeric") {
            return <ul className="space-x-[2.375rem]">{numericPaginationMarkup()}</ul>;
        } else {
            return (
                <Button
                    onClick={handleShowMore}
                    className="bg-transparent border border-solid border-brand-color text-brand-color py-3"
                >
                    Show More
                </Button>
            );
        }
    };

    return (
        <div
            className={`text-center mb-16 ${
                productsShown < products.length ? "mt-8" : ""
            }`}
        >
            {productsShown < products.length && paginationMarkup()}
        </div>
    );
}
