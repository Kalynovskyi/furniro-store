import { Product } from "@/components/Shop/Product";

export default function productsGridMarkup(Products: Product[], productsShown:number){
    const content = [];

    for (let index: number = 0; index < Products.length; index++) {
        if (index < productsShown) {
            content.push(
                <Product
                    key={Products[index].id}
                    productData={Products[index]}
                ></Product>
            );
        }
    }

    return content;
};