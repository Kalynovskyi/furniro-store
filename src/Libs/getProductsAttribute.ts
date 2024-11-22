export default function getProductsAttributeCollection(products: Product[], productAttr: string) {
    const data: Array<string> = [];

    products.map((product: Product) => {
        const productAttrCollection = product[productAttr as keyof Product]
        if (productAttrCollection === undefined) return;

        if (Array.isArray(productAttrCollection)) {
            productAttrCollection.map((attrValue) => {
                if (typeof attrValue === 'string' && !data.includes(attrValue)) {
                    data.push(attrValue);
                } ;
            })
        }
    })

    return data;
} 