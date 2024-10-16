import { Product } from "../../components/Shop/Product";

export function ProductsScreen(props: ProductsScreenProps) {
    const Products = props.products;

    const getProducts = (Products: Product[]) => {
        const content = [];

        for (let index: number = 0; index < 8; index++) {
            if (index < 8) {
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
        <div className="container 2xl w-[calc(100%-(1.25rem*2))] mx-5">
            <h3 className="text-40 font-semibold leading-tight text-center mb-8">
                Our Products
            </h3>

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 auto-rows-max">
                {getProducts(Products)}
            </div>
        </div>
    );
}
