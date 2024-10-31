"use client";

import Image from "next/image";

import Logo from "../../../public/assets/images/logo.svg";
import Account from "../../../public/assets/images/account-alert-outline.svg";
import Search from "../../../public/assets/images/akar-icons_search.svg";
import Heart from "../../../public/assets/images/akar-icons_heart.svg";
import Cart from "../../../public/assets/images/hopping-cart-outlined.svg";
import { useEffect, useState } from "react";
import useResize from "@/hooks/useResize";

const MainMenu = () => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    const [width, height] = useResize();

    useEffect(() => {
        if (width < 768) {
            setIsMobileScreen(true);
            setIsMobileMenuShown(false);
        } else {
            setIsMobileScreen(false);
            setIsMobileMenuShown(true);
        }
    }, []);

    const handleMobileMenuToggle = () => {

        if (isMobileMenuShown) {
            setIsMobileMenuShown(false);
        } else {
            setIsMobileMenuShown(true);
        }
    };

    return (
        <div className="container 2xl py-30 mx-5 md:mx-auto relative">
            <nav className="flex justify-between items-center w-[calc(100%-40px)] md:w-full">
                <div className="logo">
                    <a href="/">
                        <Image
                            width={Logo.width}
                            height={Logo.height}
                            src={"/assets/images/logo.svg"}
                            alt="Main logo"
                        />
                    </a>
                </div>

                <div className="order-3 md:-order-none">
                    <div
                        className={`
                                ${
                                    isMobileScreen
                                        ? "absolute w-2/4 h-screen top-0 right-5 bg-white z-40"
                                        : ""
                                }
                                ${isMobileMenuShown ? "" : "hidden"}
                        `}
                    >
                        <ul
                            className={`flex  ${
                                isMobileScreen
                                    ? "flex-col space-y-6 items-end mt-[110px] mr-5"
                                    : "justify-center space-x-75 "
                            }`}
                        >
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/Shop">Shop</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="relative z-50 w-[50px] h-[50px] rounded-full bg-gray-100 flex flex-col justify-center items-center space-y-1 cursor-pointer md:hidden"
                        onClick={handleMobileMenuToggle}
                    >
                        <div className="w-2/4 h-[1px] bg-black"></div>
                        <div className="w-2/4 h-[1px] bg-black"></div>
                        <div className="w-2/4 h-[1px] bg-black"></div>
                    </div>
                </div>

                <div className="icons ">
                    <ul className="flex space-x-45">
                        <li>
                            <Image
                                width={Account.width}
                                height={Account.height}
                                src={Account}
                                alt="Account icon"
                            />
                        </li>
                        <li>
                            <Image
                                width={Search.width}
                                height={Search.height}
                                src={Search}
                                alt="Search icon"
                            />
                        </li>
                        <li>
                            <Image
                                width={Heart.width}
                                height={Heart.height}
                                src={Heart}
                                alt="Likes icon"
                            />
                        </li>
                        <li>
                            <Image
                                width={Cart.width}
                                height={Cart.height}
                                src={Cart}
                                alt="Cart icon"
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default MainMenu;
