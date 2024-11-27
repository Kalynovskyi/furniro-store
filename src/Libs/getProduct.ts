import getAllProducts from "./getAllProducts";

export default async function getProduct(productId: string) {
    try {
        const products = await getAllProducts();
        const product = products.filter((item: Product) => (item.id === +productId ));

        return product[0];

    } catch (error) {
        console.log(error);
    }
} 