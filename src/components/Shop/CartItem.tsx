import Image from "next/image";
import { createAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/redux/hooks";

const CartItem = (props: ProductProps) => {
    const product = props.productData;
    const imgSrc = product.images || "";
    const dispatch = useAppDispatch();

    const removeFromCart = createAction(
        "cart/cartRemove",
        function prepare(product: Product) {
            return {
                payload: product,
            };
        }
    );

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
    };

    return (
        <li className="flex items-center w-full">
            <div>
                <Image
                    src={imgSrc[0]}
                    alt={product.title}
                    width={105}
                    height={105}
                    className="rounded-lg w-[6.563rem] h-[6.563rem]"
                ></Image>
            </div>
            <div className="grow mx-8 flex flex-col">
                <h6 className="mb-2">{product.title}</h6>
                <span>
                    1 x{" "}
                    <span className="text-brand-color">${product.price}</span>
                </span>
            </div>
            <div
                className="justify-self-end cursor-pointer hover:opacity-80 transition-all duration-300"
                onClick={handleRemoveFromCart}
            >
                <i className="text-secondary-color">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z"
                            fill="currentColor"
                        />
                    </svg>
                </i>
            </div>
        </li>
    );
};

export default CartItem;
