"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "../UI/Overlay";
import { toggleState } from "@/utils/toggleState";
import { useAppSelector } from "@/redux/hooks";
import CartItem from "./CartItem";
import Button from "../UI/Button";

export function Cart({}) {
    const [isCartShown, setIsCartShown] = useState(false);

    const handleCartClick = () => {
        toggleState(isCartShown, setIsCartShown);
    };

    const cartItems: CartProduct[] = useAppSelector(
        (state) => state.cartReducer
    );

    const getSubtotal = (cartItems: CartProduct[]) => {
        let subtotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            subtotal = subtotal + cartItems[i].product.price!;
        }

        return subtotal;
    };

    return (
        <>
            <div className="cursor-pointer relative" onClick={handleCartClick}>
                <i className="z-20">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.2355 19.1926H8.95234L9.76991 17.5273L23.3543 17.5027C23.8137 17.5027 24.2074 17.1746 24.2894 16.7207L26.1707 6.19062C26.2199 5.91445 26.1461 5.63008 25.9656 5.41406C25.8764 5.30775 25.7652 5.22211 25.6396 5.16309C25.514 5.10407 25.377 5.07308 25.2383 5.07227L7.95702 5.01484L7.80937 4.32031C7.7164 3.87734 7.31718 3.55469 6.86328 3.55469H2.63867C2.38267 3.55469 2.13716 3.65638 1.95614 3.8374C1.77513 4.01841 1.67343 4.26393 1.67343 4.51992C1.67343 4.77592 1.77513 5.02143 1.95614 5.20245C2.13716 5.38346 2.38267 5.48516 2.63867 5.48516H6.08124L6.72656 8.55312L8.31523 16.2449L6.26992 19.5836C6.1637 19.727 6.09972 19.8972 6.08523 20.075C6.07073 20.2528 6.10629 20.4312 6.18788 20.5898C6.35195 20.9152 6.68281 21.1203 7.04921 21.1203H8.7664C8.40032 21.6065 8.20258 22.1988 8.20312 22.8074C8.20312 24.3551 9.46093 25.6129 11.0086 25.6129C12.5562 25.6129 13.8141 24.3551 13.8141 22.8074C13.8141 22.1977 13.6117 21.6043 13.2508 21.1203H17.6559C17.2898 21.6065 17.092 22.1988 17.0926 22.8074C17.0926 24.3551 18.3504 25.6129 19.898 25.6129C21.4457 25.6129 22.7035 24.3551 22.7035 22.8074C22.7035 22.1977 22.5012 21.6043 22.1402 21.1203H25.2383C25.7687 21.1203 26.2035 20.6883 26.2035 20.1551C26.2019 19.8994 26.0993 19.6546 25.9179 19.4743C25.7366 19.294 25.4913 19.1927 25.2355 19.1926ZM8.35898 6.91797L24.1035 6.96992L22.5613 15.6051L10.1937 15.627L8.35898 6.91797ZM11.0086 23.6715C10.5328 23.6715 10.1445 23.2832 10.1445 22.8074C10.1445 22.3316 10.5328 21.9434 11.0086 21.9434C11.4844 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7816 23.2564 11.6196 23.4184C11.4575 23.5805 11.2378 23.6715 11.0086 23.6715ZM19.898 23.6715C19.4223 23.6715 19.034 23.2832 19.034 22.8074C19.034 22.3316 19.4223 21.9434 19.898 21.9434C20.3738 21.9434 20.7621 22.3316 20.7621 22.8074C20.7621 23.0366 20.6711 23.2564 20.509 23.4184C20.347 23.5805 20.1272 23.6715 19.898 23.6715Z"
                            fill="currentColor"
                        />
                    </svg>
                </i>
                {cartItems.length > 0 && (
                    <span className="z-10 absolute bottom-0 right-0 text-xs font-semibold bg-secondary-bg-color rounded-full w-4 h-4 flex items-center justify-center">
                        {cartItems.length}
                    </span>
                )}
            </div>

            {isCartShown &&
                createPortal(
                    <div
                        id="cart-portal"
                        className="fixed w-full h-full top-0 left-0 z-[100]"
                    >
                        <div className="flex flex-col justify-between  bg-white absolute right-0 top-0 z-50 w-full h-full sm:w-[26.063rem] sm:min-h-[46.625rem] sm:max-h-[46.625rem]">
                            <div className="flex items-center">
                                <h5 className="py-[1.625rem] mx-7 border-b border-border-color grow">
                                    Shopping Cart
                                </h5>
                                <div
                                    className="px-10 py-[1.625rem] cursor-pointer"
                                    onClick={handleCartClick}
                                >
                                    <i className="text-secondary-color">
                                        <svg
                                            width="17"
                                            height="19"
                                            viewBox="0 0 17 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.11047 9.6734C6.16563 9.6181 6.23115 9.57424 6.30328 9.5443C6.37542 9.51437 6.45275 9.49896 6.53085 9.49896C6.60894 9.49896 6.68628 9.51437 6.75841 9.5443C6.83055 9.57424 6.89607 9.6181 6.95122 9.6734L8.3121 11.0355L9.67297 9.6734C9.78446 9.56191 9.93568 9.49927 10.0933 9.49927C10.251 9.49927 10.4022 9.56191 10.5137 9.6734C10.6252 9.78489 10.6878 9.9361 10.6878 10.0938C10.6878 10.2514 10.6252 10.4027 10.5137 10.5141L9.15166 11.875L10.5137 13.2359C10.6252 13.3474 10.6878 13.4986 10.6878 13.6563C10.6878 13.8139 10.6252 13.9652 10.5137 14.0766C10.4022 14.1881 10.251 14.2508 10.0933 14.2508C9.93568 14.2508 9.78446 14.1881 9.67297 14.0766L8.3121 12.7146L6.95122 14.0766C6.83973 14.1881 6.68852 14.2508 6.53085 14.2508C6.37318 14.2508 6.22196 14.1881 6.11047 14.0766C5.99898 13.9652 5.93635 13.8139 5.93635 13.6563C5.93635 13.4986 5.99898 13.3474 6.11047 13.2359L7.47253 11.875L6.11047 10.5141C6.05518 10.459 6.01131 10.3935 5.98137 10.3213C5.95144 10.2492 5.93604 10.1719 5.93604 10.0938C5.93604 10.0157 5.95144 9.93834 5.98137 9.86621C6.01131 9.79407 6.05518 9.72855 6.11047 9.6734Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </i>
                                </div>
                            </div>
                            {cartItems.length !== 0 && (
                                <>
                                    <div className="flex flex-col justify-between pt-12 pb-3 px-7 grow overflow-auto">
                                        <ul className="space-y-5 ">
                                            {cartItems.map((item) => (
                                                <CartItem
                                                    productData={item.product}
                                                    key={item.product.id}
                                                ></CartItem>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="grid grid-cols-2 w-full py-5 px-7">
                                        <div className="col-start-1 col-span-1">
                                            Subtotal
                                        </div>
                                        <div className="col-start-2 col-span-1 text-brand-color">
                                            ${getSubtotal(cartItems)}
                                        </div>
                                    </div>
                                </>
                            )}

                            {cartItems.length === 0 && (
                                <div className="flex justify-center items-center">
                                    <h4 className="text-3xl">Cart is empty</h4>
                                </div>
                            )}

                            <div className="py-[1.625rem]  border-t border-border-color">
                                <div className="px-7 space-x-3">
                                    <Button className="px-[1.875rem] py-[0.375rem] rounded-[3.125rem] bg-transparent text-black border border-black hover:bg-brand-color hover:text-white hover:border-brand-color">
                                        Cart
                                    </Button>
                                    <Button className="px-[1.875rem] py-[0.375rem] rounded-[3.125rem] bg-transparent text-black border border-black hover:bg-brand-color hover:text-white hover:border-brand-color">
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <Overlay onClick={handleCartClick} />
                    </div>,
                    document.body
                )}
        </>
    );
}
