import { ProductsScreen } from "./../components/Home/ProductsScreen";
import { CategoryScreen } from "./../components/Home/CategoryScreen";
import { HeroScreen } from "./../components/Home/HeroScreen";
import Products from "../../products.json";
import Button from "../components/UI/Button";

const Home = () => {
    return (
        <>
            <HeroScreen />

            <CategoryScreen />

            <ProductsScreen products={Products} />

            <section className="py-11 bg-FCF8F3">
                <div className="container 2xl w-full  ">
                    <div className="mx-5 grid grid-cols-12 gap-10">
                        <div className="col-span-12 md:col-span-5">
                            <h3 className="text-40 font-semibold leading-tight mb-2">
                                50+ Beautiful rooms inspiration
                            </h3>
                            <p className="subtitle font-normal text-lg mb-6">
                                Our designer already made a lot of beautiful
                                prototipe of rooms that inspire you
                            </p>
                            <Button className="py-3">Explore More</Button>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="slider">
                                <div className="slider-item">
                                    <div className="image">
                                        <img src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
