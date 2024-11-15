import { FeatureSection } from './../../components/UI/FeatureSection';
import { PageHeader } from "./../../components/UI/PageHeader";
import { ShopFilter } from "./components/ShopFilter";
import { ProductsGrid } from "@/components/Shop/ProductsGrid";
import getAllProducts from "@/Libs/getAllProducts";

export default async function Page() {
    const productsData: Promise<Product[]> = getAllProducts();

    const Products = await productsData;

    return (
        <>
            <PageHeader pageName="Shop" />

            <ShopFilter />

            <section className="container 2xl w-full mx-auto pt-[3.938rem]">
                <div className="mx-5">
                    <ProductsGrid products={Products}></ProductsGrid>
                </div>
            </section>

            <FeatureSection    />
        </>
    );
}
