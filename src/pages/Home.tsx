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

            <section className="pt-[4.18rem]">
                <div className="heading text-center">
                    <p className="subtitle font-medium tracking-widest">
                        Share your setup with
                    </p>

                    <h3 className="text-40 font-semibold leading-tight text-center mb-8">
                        #FurniroFurniture
                    </h3>
                </div>
            </section>
        </>
    );
};

export default Home;
