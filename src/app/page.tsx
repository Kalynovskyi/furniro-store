"use server"

import { ShareScreen } from "../components/Home/ShareScreen";
import { SliderScreen } from "../components/Home/SliderScreen";
import { ProductsScreen } from "../components/Home/ProductsScreen";
import { CategoryScreen } from "../components/Home/CategoryScreen";
import { HeroScreen } from "../components/Home/HeroScreen";

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
