"use client"

import { FilterAttrsList } from "./FilterAttrsList";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { filterAdding } from "@/redux/features/shop-filter/filterSlice";
import { createPortal } from "react-dom";
import { Overlay } from "@/components/UI/Overlay";
import { toggleState } from "@/utils/toggleState";
import Input from "../../../components/UI/input";
import getProductsAttributeCollection from "@/Libs/getProductsAttribute";

export function ShopFilter(props: ShopFilterProps) {
	const [isFilterShown, setIsFilterShown] = useState(false);
	const dispatcher = useAppDispatch();

	const filter: ShopFilterState = useAppSelector((state) => state.filterReducer);

	const handleProductsShownChange = (event: React.FormEvent<HTMLInputElement>) => {
		dispatcher(filterAdding({ productsAmount: +event.currentTarget.value }));
	};

	const handleProductSort = (event: React.FormEvent<HTMLSelectElement>) => {
		dispatcher(filterAdding({ sort: event.currentTarget.value }));
	};

	const handleFilterClick = () => {
		toggleState(isFilterShown, setIsFilterShown);
	};

	const categories = getProductsAttributeCollection(props.products, "categories")!;
	const colors = getProductsAttributeCollection(props.products, "colors")!;
	const sizes = getProductsAttributeCollection(props.products, "sizes")!;
	// const tags = getProductsAttributeCollection(props.products, "tags")!;

	return (
		<>
			<div className="bg-secondary-bg-color py-8">
				<div className="mx-5">
					<div className="container 2xl w-full mx-auto flex justify-between max-md:flex-col max-md:space-y-8">
						<div className="flex items-center max-md:justify-between">
							<div
								className="flex items-center pr-6 md:border-r border-border-color cursor-pointer"
								onClick={handleFilterClick}
							>
								<i className="text-black mr-3">
									<svg
										width="25"
										height="25"
										viewBox="0 0 25 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22.0238 7.14285H8.92857M6.54762 7.14285H2.97619M22.0238 19.0476H8.92857M6.54762 19.0476H2.97619M16.0714 13.0952H2.97619M22.0238 13.0952H18.4524M7.7381 4.7619C8.05383 4.7619 8.35663 4.88733 8.57989 5.11058C8.80315 5.33384 8.92857 5.63664 8.92857 5.95238V8.33333C8.92857 8.64906 8.80315 8.95187 8.57989 9.17512C8.35663 9.39838 8.05383 9.52381 7.7381 9.52381C7.42236 9.52381 7.11956 9.39838 6.8963 9.17512C6.67304 8.95187 6.54762 8.64906 6.54762 8.33333V5.95238C6.54762 5.63664 6.67304 5.33384 6.8963 5.11058C7.11956 4.88733 7.42236 4.7619 7.7381 4.7619V4.7619ZM7.7381 16.6667C8.05383 16.6667 8.35663 16.7921 8.57989 17.0153C8.80315 17.2386 8.92857 17.5414 8.92857 17.8571V20.2381C8.92857 20.5538 8.80315 20.8566 8.57989 21.0799C8.35663 21.3031 8.05383 21.4286 7.7381 21.4286C7.42236 21.4286 7.11956 21.3031 6.8963 21.0799C6.67304 20.8566 6.54762 20.5538 6.54762 20.2381V17.8571C6.54762 17.5414 6.67304 17.2386 6.8963 17.0153C7.11956 16.7921 7.42236 16.6667 7.7381 16.6667ZM17.2619 10.7143C17.5776 10.7143 17.8804 10.8397 18.1037 11.063C18.327 11.2862 18.4524 11.589 18.4524 11.9048V14.2857C18.4524 14.6014 18.327 14.9042 18.1037 15.1275C17.8804 15.3508 17.5776 15.4762 17.2619 15.4762C16.9462 15.4762 16.6434 15.3508 16.4201 15.1275C16.1969 14.9042 16.0714 14.6014 16.0714 14.2857V11.9048C16.0714 11.589 16.1969 11.2862 16.4201 11.063C16.6434 10.8397 16.9462 10.7143 17.2619 10.7143V10.7143Z"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</i>
								<p>Filter</p>
							</div>
							<span className="pl-8">
								Showing 1–{filter.productsAmount} of {props.allProductsAmount} results
							</span>
						</div>
						<div className="flex items-center space-x-7 max-md:justify-between">
							<div>
								<label>
									Show
									<input
										type="number"
										value={filter.productsAmount}
										onChange={handleProductsShownChange}
										min={1}
										max={props.allProductsAmount}
										className="inline ml-4 py-4 px-3 max-w-14 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
									/>
								</label>
							</div>

							<div className="">
								<label>
									Sort by
									<select
										className="ml-4 py-4 px-3 appearance-none"
										onChange={handleProductSort}
									>
										<option value="default">Default</option>
										<option value="min-price">Low price</option>
										<option value="max-price">High price</option>
									</select>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			{isFilterShown &&
				createPortal(
					<div
						id="filter-portal"
						className="fixed w-full h-full top-0 left-0 z-[100] "
					>
						<div className="flex flex-col justify-between bg-white absolute left-0 top-0 z-50 w-full h-full sm:w-[26.063rem] p-5 overflow-y-auto">
							<form action="">
								<fieldset>
									<legend>Filter</legend>
									<div>
										<label htmlFor="search_product">Search</label>
										<Input
											className="block"
											type="text"
											id="search_product"
											placeholder="Search product..."
										/>
									</div>

									<div>
										<label htmlFor="search_product">Price</label>
										<div className="flex">
											<Input
												className="w-1/2"
												id="min-price"
												type="number"
												placeholder="Min price..."
											/>
											<Input
												className="w-1/2"
												id="max-price"
												type="number"
												placeholder="Max price..."
											/>
										</div>
									</div>

									<div>
										<h5>Categories</h5>
										<FilterAttrsList
											attrs={categories}
                                            attrName={'categories'}
                                            filter={filter}
										/>
									</div>

									<div>
										<label htmlFor="products_ratings">Ratings</label>
										<select
											className="block rounded-lg border border-secondary-color py-6 px-7 w-full"
											name="ratings"
											id="products_ratings"
										>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>

									<div>
										<h5>Sizes</h5>
										<FilterAttrsList
											attrs={sizes}
                                            attrName={'sizes'}
                                            filter={filter}
										/>
									</div>

									<div>
										<h5>Colors</h5>
										<FilterAttrsList
											attrs={colors}
                                            attrName={'colors'}
                                            filter={filter}
										/>
									</div>
								</fieldset>
							</form>
						</div>

						<Overlay onClick={handleFilterClick} />
					</div>,
					document.body
				)}
		</>
	);
}
