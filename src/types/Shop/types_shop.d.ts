interface Product {
    id?: number;
    title?: string;
    subtitle?: string;
    price?: number;
    rating?: number;
    description?: string;
    sizes?: Array<string>;
    colors?: Array<string>;
    images?: Array<string>;
    sku?: string;
    categories?: Array<string>;
    tags?: Array<string>;
    reviews?: Array<Review>
}

interface Review {
    user?: string;
    rating?: number;
    comment?: string;
}

interface ProductProps {
    productData: Product
}
