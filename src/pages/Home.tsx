import { SliderScreen } from "./../components/Home/SliderScreen";
import { ProductsScreen } from "./../components/Home/ProductsScreen";
import { CategoryScreen } from "./../components/Home/CategoryScreen";
import { HeroScreen } from "./../components/Home/HeroScreen";
import Products from "../../products.json";

const Home = () => {
    return (
        <>
            <HeroScreen />

            <CategoryScreen />

            <ProductsScreen products={Products} />

            <SliderScreen />
        </>
    );
};

export default Home;
