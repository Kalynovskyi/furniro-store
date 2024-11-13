export default async function getAllProducts() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/products.json')
    
        if (!res.ok) throw new Error('failed to fetch products');
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
} 