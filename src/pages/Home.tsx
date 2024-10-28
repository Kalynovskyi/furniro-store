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

                <div className="grid grid-cols-12 grid-rows-2 gap-4">
                    <div className="row-span-1 col-span-2 self-end">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-1.jpg" alt="" />
                    </div>
                    <div className="row-start-1 col-span-3 col-start-3 self-end">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-2.jpg" alt="" />
                    </div>
                    <div className="col-start-1 col-span-3 row-start-2 self-start">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-3.jpg" alt="" />
                    </div>
                    <div className="col-start-4 col-span-2 row-start-2 row-span-1 self-start">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-4.jpg" alt="" />
                    </div>
                    <div className="col-start-6 col-span-2 row-span-2 self-center">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-5.jpg" alt="" />
                    </div>
                    <div className="col-start-8 col-span-2 row-span-1 self-end">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-6.jpg" alt="" />
                    </div>
                    <div className="col-start-8 col-span-1 row-start-2 row-span-1 self-start">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-7.jpg" alt="" />
                    </div>
                    <div className="col-start-10 col-span-3 row-span-1 self-end">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-8.jpg" alt="" />
                    </div>
                    <div className="col-start-9 col-span-2 row-span-1 self-start">
                        <img className="w-full" src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-share-screen-9.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
