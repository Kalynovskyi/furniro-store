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
    paginationType: string;
}

interface ProductsPaginationProps {
    products: Product[];
    productsShown: number;
    paginationType: string;
}

interface ShopFilterProps {
    products: Product[];
    productsShown: number;
    allProductsAmount: number;
}

interface ShopFilterState {
    productsAmount?: number;
    minPrice?: number | null;
    maxPrice?: number| null;
    rating?: number| null;
    sizes?: string | null | undefined;
    colors?: string | null | undefined;
    categories?: Array<string> | null | undefined;
    tags?: string | null | undefined;
    sort?: string;
}

interface PaginationState {
    page: number;
}