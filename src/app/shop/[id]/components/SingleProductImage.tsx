"use client";

import { useState } from "react";
import Image from "next/image";

const SingleProductImage = (props: { product: Product }) => {
	const [activeImage, setActiveImage] = useState(0);
	const product = props.product;
	const images = product.images;
	const productImages = [];

	const handleImagePaginationClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setActiveImage(+event.currentTarget.id);
	};

	if (images!.length > 1) {
		productImages.push(
			<div className="flex w-full">
				<ul className="space-y-8">
					{images?.map((item, index) => (
						<li key={index}>
							<Image
								src={item}
								alt={product.title}
								width={76}
								height={80}
								className="w-[4.75rem] h-[5rem] rounded-lg cursor-pointer"
								id={index.toString()}
								onClick={handleImagePaginationClick}
							></Image>
						</li>
					))}
				</ul>
				<div className="pl-8 w-full">
					<Image
						src={images![activeImage]}
						alt={product.title}
						width={423}
						height={500}
						className="rounded-lg w-full"
					></Image>
				</div>
			</div>
		);
	}
	return <>{productImages}</>;
};

export default SingleProductImage;
