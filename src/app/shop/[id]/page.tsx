import getProduct from "@/Libs/getProduct";
import Link from "next/link";

export default async function Page({ params }: PageParams) {
	const productData = await params;
	const product: Product = await getProduct(productData.id);
    const images = product.images;
    console.log(product);

	return (
		<>
			<div className="bg-secondary-bg-color py-8">
				<div className="mx-5">
					<div className="container 2xl w-full mx-auto flex items-center space-x-3">
						<Link
							className=" text-secondary-color"
							href={"/"}
						>
							Home
						</Link>
						<i className="px-3">
							<svg
								width="8"
								height="14"
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z"
									fill="black"
								/>
							</svg>
						</i>
						<Link
							className=" text-secondary-color"
							href={"/shop"}
						>
							Shop
						</Link>
						<i className="px-3">
							<svg
								width="8"
								height="14"
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z"
									fill="black"
								/>
							</svg>
						</i>
						<p className="pl-7 py-2 border-l-2 border-secondary-color">{product.title}</p>
					</div>
				</div>
			</div>

			<div className="mx-5">
				<div className="container 2xl w-full mx-auto flex  ">
                    <div className="w-1/2">
                        {product.images}


                    </div>
                    <div className="w-1/2">
                    </div>
                </div>
			</div>
		</>
	);
}
