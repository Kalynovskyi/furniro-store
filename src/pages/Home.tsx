import { CategoryScreen } from "./../components/Home/CategoryScreen";
import { HeroScreen } from "./../components/Home/HeroScreen";
import Products from "../../products.json";
import { Product } from "../components/Shop/Product";

const Home = () => {
    // Products.map((product: Product) => {
    //     console.log(product.categories);
    // });

    return (
        <>
            <HeroScreen />

            <CategoryScreen />

            <div className="container 2xl text-center">
                <h3 className="text-40 font-semibold leading-tight">Our Products</h3>
                {Products.map((product: Product) => (
                    <Product key={product.id} productData={product}/> 
                ))}
            </div>
        </>
    );
};

export default Home;
