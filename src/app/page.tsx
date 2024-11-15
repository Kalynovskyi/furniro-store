"use server";

import { ShareScreen } from "../app/components/ShareScreen";
import { SliderScreen } from "../app/components/SliderScreen";
import { ProductsScreen } from "../app/components/ProductsScreen";
import { CategoryScreen } from "../app/components/CategoryScreen";
import { HeroScreen } from "../app/components/HeroScreen";

import getAllProducts from "@/Libs/getAllProducts";

export default async function Home() {
    const productsData: Promise<Product[]> = getAllProducts();

    const Products = await productsData;

    return (
        <>
            <HeroScreen />

            <CategoryScreen />

            <ProductsScreen products={Products} />

            <SliderScreen />

            <ShareScreen />
        </>
    );
}
