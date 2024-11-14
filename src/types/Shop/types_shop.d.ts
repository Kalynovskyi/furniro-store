interface Product {
    id?: number;
    title: string;
    subtitle?: string;
    price?: number;
    rating?: number;
    description?: string;
    sizes?: Array<string>;
    colors?: Array<string>;
    images?: Array<string> | undefined;
    sku?: string;
    categories?: Array<string>;
    tags?: Array<string>;
    reviews?: Array<Review>;
}

interface CartProduct {
    product: Product;
    quantity: number;
}

interface Review {
    user?: string;
    rating?: number;
    comment?: string;
}

interface ProductProps {
    productData: Product;
}

interface ProductsGridProps {
    products: Product[];
}
