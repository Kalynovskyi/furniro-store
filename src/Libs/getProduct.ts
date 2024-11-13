export default async function getProduct(productId: string) {
    try {
        const res = await fetch('https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/products.json')
    
        if (!res.ok) throw new Error('failed to fetch products');
        const data = await res.json();

        const product = data.filter((item: Product) => (item.id === +productId ));

        return product;

    } catch (error) {
        console.log(error);
    }
} 