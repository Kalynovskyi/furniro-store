import getProduct from "@/Libs/getProduct";
import Link from "next/link";
import SingleProductImage from "./components/SingleProductImage";

export default async function Page({ params }: PageParams) {
	const productData = await params;
	const product: Product = await getProduct(productData.id);
	const images = product.images;

	const starRating = () => {
		const stars = [];
		const rating = product.rating!;
		const isDecimal = rating % 1 != 0;

		console.log(isDecimal);

		for (let index = 1; index < rating; index++) {
			console.log(index);

			stars.push(
				<li key={index}>
					<i>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
								fill="#FFC700"
							/>
						</svg>
					</i>
				</li>
			);
		}

		if (isDecimal) {
			stars.push(
				<li key={rating + 1}>
					<i>
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g>
								<title>Layer 1</title>
								<path
									d="m10,1l0.06,6.12l0.02,1.79l0.02,3.42l-0.03,3.42l0.02,-0.01l-6.09,3.26l1.13,-6.63l-4.13,-4.62l6,-0.75l3,-6z"
									fill="#FFC700"
									id="svg_1"
								/>
							</g>
						</svg>
					</i>
				</li>
			);
		}

		return <ul className="flex">{stars}</ul>;
	};

	starRating();

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
				<div className="container 2xl w-full mx-auto grid grid-cols-2 gap-[6.563rem]">
					<div className="col-span-1">
						<SingleProductImage product={product} />
					</div>

					<div className="col-span-1 col-start-2 bg-secondary-bg-color">
						<h2 className="text-5xl font-normal">{product.title}</h2>
						<span className="text-secondary-color">${product.price}</span>
						<div>{starRating()}</div>
					</div>
				</div>
			</div>
		</>
	);
}
