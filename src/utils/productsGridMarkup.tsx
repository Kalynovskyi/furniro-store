import { Product } from "@/components/Shop/Product";

export default function productsGridMarkup(
    Products: Product[],
    productsShown: number,
    page: number = 1
) {
    const content = [];
    const indexStart = page > 1 ? (page - 1) * productsShown + 1 : page;

    for (let index: number = indexStart; index <= Products.length; index++) {
        if (index < productsShown + indexStart) {
            if (Products[index] === undefined) return content;

            content.push(
                <Product
                    key={Products[index].id}
                    productData={Products[index]}
                ></Product>
            );
        }
    }

    return content;
}