"use client";

import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { pageChange } from "@/redux/features/shop-pagination/paginationSlice";
import { filterAdding } from "@/redux/features/shop-filter/filterSlice";
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
            filterAdding({
                productsAmount: productsShown + initialProductsAmount.current!,
            })
        );
    };

    const handlePaginationClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        const value = event.currentTarget.id;
        const currentPage = pagination.page;

        if (value === "next") {
            dispatcher(pageChange(currentPage + 1));
        } else if (value === "prev") {
            dispatcher(pageChange(currentPage - 1));
        } else {
            dispatcher(pageChange(+value));
        }
    };

    const numericPaginationMarkup = () => {
        const pages = Math.ceil(products.length / productsShown);
        let pagesLimit = pages;
        let arePagesLimited = false;
        const currentPage = pagination.page;
        let pageIndexStart = 1;
        const buttons = [];

        if (pages === Infinity) return;

        if (pages > 3) {
            arePagesLimited = true;
            pagesLimit = 3;
        }

        if (arePagesLimited) {
            if (currentPage > 1 && currentPage !== pages) {
                pageIndexStart = currentPage - 1;
            } else if (currentPage == pages) {
                pageIndexStart = currentPage - 2;
            }
        }

        for (
            let index: number = pageIndexStart;
            index <= pageIndexStart + pagesLimit - 1;
            index++
        ) {
            buttons.push(
                <li key={index}>
                    <Button
                        id={index.toString()}
                        className={`w-8 h-8  sm:w-[3.75rem] sm:h-[3.75rem] !px-0 !py-0 rounded-lg 
                            ${
                                index === currentPage
                                    ? ""
                                    : "bg-secondary-bg-color text-black"
                            }`}
                        onClick={handlePaginationClick}
                    >
                        {index}
                    </Button>
                </li>
            );
        }

        if (arePagesLimited && currentPage < pages - 1) {
            if (currentPage < pages + 2) {
                buttons.push(<li key={pages + '1'}>...</li>);
            }

            buttons.push(
                <li key={pages}>
                    <Button
                        id={pages.toString()}
                        className={`w-8 h-8 sm:w-[3.75rem] sm:h-[3.75rem] !px-0 !py-0 rounded-lg 
                    ${
                        pages === currentPage
                            ? ""
                            : "bg-secondary-bg-color text-black"
                    }`}
                        onClick={handlePaginationClick}
                    >
                        {pages}
                    </Button>
                </li>
            );
        }

        if (arePagesLimited && currentPage >= 3) {
            if (currentPage > 3) {
                buttons.unshift(<li key={pages + '0'}>...</li>);
            }

            buttons.unshift(
                <li key={1}>
                    <Button
                        id={"1"}
                        className={`w-8 h-8 sm:w-[3.75rem] sm:h-[3.75rem] !px-0 !py-0 rounded-lg 
                    ${
                        1 === currentPage
                            ? ""
                            : "bg-secondary-bg-color text-black"
                    }`}
                        onClick={handlePaginationClick}
                    >
                        {1}
                    </Button>
                </li>
            );
        }

        if (currentPage < pages) {
            buttons.push(
                <li key={pages + 1}>
                    <Button
                        className=" h-[3.75rem] py-0 rounded-lg !px-7 bg-secondary-bg-color text-black max-sm:hidden"
                        id="next"
                        onClick={handlePaginationClick}
                    >
                        Next
                    </Button>
                </li>
            );
        }

        if (currentPage > 1) {
            buttons.unshift(
                <li key={0}>
                    <Button
                        
                        className="h-[3.75rem] py-0 rounded-lg !px-7 bg-secondary-bg-color text-black max-sm:hidden"
                        id="prev"
                        onClick={handlePaginationClick}
                    >
                        Prev
                    </Button>
                </li>
            );
        }

        return buttons;
    };

    const paginationMarkup = () => {
        if (productsPagination === "numeric") {
            return (
                <ul className="space-x-4 md:space-x-[2.375rem] flex items-center justify-center">
                    {numericPaginationMarkup()}
                </ul>
            );
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
