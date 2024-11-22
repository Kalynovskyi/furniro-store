import { ProductsGrid } from "../../components/Shop/ProductsGrid";
import getAllProducts from "@/Libs/getAllProducts";

export async function ProductsScreen() {
    const productsData: Promise<Product[]> = getAllProducts();

    const Products = await productsData;

    return (
        <section className="container 2xl w-full mx-auto">
            <div className="mx-5">
                <h3 className="text-40 font-semibold leading-tight text-center mb-8">
                    Our Products
                </h3>

                <ProductsGrid products={Products} paginationType='lazy'/>
            </div>
        </section>
    );
}
