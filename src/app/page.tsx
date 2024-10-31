
import { ShareScreen } from "../components/Home/ShareScreen";
import { SliderScreen } from "../components/Home/SliderScreen";
import { ProductsScreen } from "../components/Home/ProductsScreen";
import { CategoryScreen } from "../components/Home/CategoryScreen";
import { HeroScreen } from "../components/Home/HeroScreen";
import Products from "../../products.json";

export default function Home() {
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
