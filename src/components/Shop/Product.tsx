import { Overlay } from "./../UI/Overlay";
import Button from "../UI/Button";
import Image from "next/image";

export function Product(props: ProductProps) {
    const product = props.productData;
    const imgSrc = product.images || "";

    return (
        <div
            className={`relative group/overlay md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col`}
        >
            <Image
                width={500}
                height={500}
                className={`w-full`}
                src={imgSrc[0]}
                alt={product.title}
            />
            <div className="px-4 pt-4 pb-3 bg-F4F5F7 space-y-2 flex-1">
                <h5 className="text-2xl font-semibold leading-tight text-3A3A3A">
                    {product.title}
                </h5>
                <p className="text-base leading-normal text-898989">
                    {product.subtitle}
                </p>
                <p className="text-xl font-semibold leading-normal text-3A3A3A">
                    $ {product.price}
                </p>
            </div>

            <Overlay className="flex flex-col justify-center items-center">
                <Button className="bg-white text-brand-color">
                    Add to cart
                </Button>
                <div className="text-white space-x-5 mt-6">
                    <a
                        href="#"
                        className="inline-flex items-center hover:text-brand-color group transition-all duration-300"
                    >
                        <svg
                            className="fill-white group-hover:fill-brand-color transition-all duration-300"
                            width="16"
                            height="16"
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 9.66671C9.47467 9.66671 9 9.87337 8.644 10.2047L3.94 7.46671C3.97333 7.31337 4 7.16004 4 7.00004C4 6.84004 3.97333 6.68671 3.94 6.53337L8.64 3.79337C9 4.12671 9.47333 4.33337 10 4.33337C11.1067 4.33337 12 3.44004 12 2.33337C12 1.22671 11.1067 0.333374 10 0.333374C8.89333 0.333374 8 1.22671 8 2.33337C8 2.49337 8.02667 2.64671 8.06 2.80004L3.36 5.54004C3 5.20671 2.52667 5.00004 2 5.00004C0.893333 5.00004 0 5.89337 0 7.00004C0 8.10671 0.893333 9.00004 2 9.00004C2.52667 9.00004 3 8.79337 3.36 8.46004L8.05867 11.2054C8.02112 11.3563 8.00143 11.5112 8 11.6667C8 12.0623 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5145C9.60009 13.6658 10.0022 13.7054 10.3902 13.6283C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0569C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5359 11.44 10.2235 11.1111 10.0038C10.7822 9.784 10.3956 9.66671 10 9.66671Z" />
                        </svg>
                        <span className="pl-1">Share</span>
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center hover:text-brand-color group transition-all duration-300"
                    >
                        <svg
                            className="stroke-white group-hover:stroke-brand-color transition-all duration-300"
                            width="16"
                            height="16"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z"
                                strokeWidth="1.8"
                            />
                        </svg>
                        <span className="pl-1">Like</span>
                    </a>
                </div>
            </Overlay>
        </div>
    );
}
