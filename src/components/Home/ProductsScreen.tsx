import { useState } from "react";
import { Product } from "../../components/Shop/Product";
import Button from "../UI/Button";

export function ProductsScreen(props: ProductsScreenProps) {
    const productsShown = 8;
    const [productsAmount, setProductsAmount] = useState(productsShown);
    const Products = props.products;

    const handleShowMore = () => {
        setProductsAmount(productsAmount + productsShown);
    };

    const getProducts = (Products: Product[]) => {
        const content = [];

        for (let index: number = 0; index < Products.length; index++) {
            if (index < productsAmount) {
                content.push(
                    <Product
                        key={Products[index].id}
                        productData={Products[index]}
                    ></Product>
                );
            }
        }

        return content;
    };

    return (
        <section className="container 2xl w-full mx-auto">
            <div className="mx-5">
                <h3 className="text-40 font-semibold leading-tight text-center mb-8">
                    Our Products
                </h3>

                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 auto-rows-max">
                    {getProducts(Products)}
                </div>
                <div
                    className={`text-center mb-16 ${
                        productsAmount < Products.length ? "mt-8" : ""
                    }`}
                >
                    {productsAmount < Products.length && (
                        <Button
                            onClick={handleShowMore}
                            className="bg-transparent border border-solid border-brand-color text-brand-color py-3"
                        >
                            Show More
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}
