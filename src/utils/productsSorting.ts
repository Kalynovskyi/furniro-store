export default function productsSorting(filter: ShopFilterState, products: Product[]){
    if (filter.sort !== 'default') {
        if (filter.sort === 'min-price') {
            return products.sort((a, b) => a.price! - b.price!);
        } else if (filter.sort === 'max-price') {
            return products.sort((a, b) => b.price! - a.price!);
        }
    } else {
        return products;
    }
}
