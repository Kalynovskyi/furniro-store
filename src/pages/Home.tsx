import { HeroScreen } from "./../components/Home/HeroScreen";
import Products from "../../products.json";

const Home = () => {
    Products.map((product: Product) => {
        console.log(product.categories);
    });

    return (
        <>
            <HeroScreen />

            <div className="container 2xl col-span-12 col-start-1 col-end-12 text-center">
                <h3>Browse The Range</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="flex">
                    <div>
                        <a href="">
                            <img src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/category-screen-dining.jpg" alt="" />
                            <h4>Dining</h4>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/category-screen-living.jpg" alt="" />
                            <h4>Living</h4>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/category-screen-bedroom.jpg" alt="" />
                            <h4>Bedroom</h4>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
