export default function productsSorting(filter: ShopFilterState, products: Product[]){
    let filteredProducts = products;

    if (filter.categories?.length !== undefined && filter.categories.length > 0) {
        const categorizedProducts = [];
        const filterCategories = filter.categories;
        
        for (let index = 0; index < filteredProducts.length; index++) {
            const productCategories = filteredProducts[index].categories;
            const isProductInCategories = productCategories?.some(item => filterCategories.includes(item));

            if (isProductInCategories) {
                categorizedProducts.push(filteredProducts[index]);
                
            }
        }
        filteredProducts = categorizedProducts;
    }

    if (filter.sort !== 'default') {
        if (filter.sort === 'min-price') {
            filteredProducts = products.sort((a, b) => a.price! - b.price!);
        } else if (filter.sort === 'max-price') {
            filteredProducts = products.sort((a, b) => b.price! - a.price!);
        }
    }

    return filteredProducts;
}
