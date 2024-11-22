import { ShareScreen } from "../app/components/ShareScreen";
import { SliderScreen } from "../app/components/SliderScreen";
import { ProductsScreen } from "../app/components/ProductsScreen";
import { CategoryScreen } from "../app/components/CategoryScreen";
import { HeroScreen } from "../app/components/HeroScreen";

export default async function Home() {
    return (
        <>
            <HeroScreen />

            <CategoryScreen />

            <ProductsScreen/>

            <SliderScreen />

            <ShareScreen />
        </>
    );
}
