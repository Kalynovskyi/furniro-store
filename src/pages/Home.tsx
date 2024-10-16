import { ProductsScreen } from "./../components/Home/ProductsScreen";
import { CategoryScreen } from "./../components/Home/CategoryScreen";
import { HeroScreen } from "./../components/Home/HeroScreen";
import Products from "../../products.json";


const Home = () => {
    // Products.map((product: Product) => {
    //     console.log(product.categories);
    // });



    return (
        <>
            <HeroScreen />

            <CategoryScreen />

            <ProductsScreen products={Products} />
        </>
    );
};

export default Home;
