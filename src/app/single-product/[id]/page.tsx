import getProduct from "@/Libs/getProduct";

export default async function Page({params}: PageParams) {

    const productData = await params; 

    const product = await getProduct(productData.id);


    return <div>My slug is: {productData.id}</div>;
}
