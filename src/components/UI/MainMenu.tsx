"use client";

import Image from "next/image";

import Logo from "../../../public/assets/images/logo.svg";
import Account from "../../../public/assets/images/account-alert-outline.svg";
import Search from "../../../public/assets/images/akar-icons_search.svg";
import Heart from "../../../public/assets/images/akar-icons_heart.svg";
import Cart from "../../../public/assets/images/hopping-cart-outlined.svg";
import { useEffect, useState } from "react";
import useResize from "@/hooks/useResize";
import { Overlay } from "./../UI/Overlay";
import Link from "next/link";

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
    }, [width]);

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
                <div className="logo md:flex-1 max-md:flex-grow">
                    <Link href="/">
                        <Image
                            width={Logo.width}
                            height={Logo.height}
                            src={"/assets/images/logo.svg"}
                            alt="Main logo"
                        />
                    </Link>
                </div>

                <div className="max-md:order-3 max-md:flex max-md:justify-end md:flex-1">
                    <div
                        className={`
                                ${
                                    isMobileScreen
                                        ? "absolute w-2/4 h-screen top-0 right-5 bg-white z-40 transition-all duration-300"
                                        : ""
                                }
                                ${
                                    isMobileMenuShown
                                        ? "opacity-1"
                                        : "invisible opacity-0"
                                }
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
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/Shop">Shop</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Overlay
                        onClick={handleMobileMenuToggle}
                        className={` w-svw h-svh -left-5 ${
                            isMobileScreen && isMobileMenuShown
                                ? "opacity-1 visible"
                                : "opacity-0 invisible"
                        }`}
                    />

                    <div
                        className="relative z-50 w-[50px] h-[50px] rounded-full bg-gray-100 flex flex-col justify-center items-center space-y-1 cursor-pointer md:hidden"
                        onClick={handleMobileMenuToggle}
                    >
                        <div className="w-2/4 h-[1px] bg-black"></div>
                        <div className="w-2/4 h-[1px] bg-black"></div>
                        <div className="w-2/4 h-[1px] bg-black"></div>
                    </div>
                </div>

                <div className="icons md:flex-1">
                    <ul className="flex justify-end">
                        <li className="mr-10">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.3333 14V8.16669H25.6666V15.1667H23.3333M23.3333 19.8334H25.6666V17.5H23.3333M11.6666 15.1667C14.7816 15.1667 21 16.73 21 19.8334V23.3334H2.33331V19.8334C2.33331 16.73 8.55165 15.1667 11.6666 15.1667ZM11.6666 4.66669C12.9043 4.66669 14.0913 5.15835 14.9665 6.03352C15.8416 6.90869 16.3333 8.09568 16.3333 9.33335C16.3333 10.571 15.8416 11.758 14.9665 12.6332C14.0913 13.5084 12.9043 14 11.6666 14C10.429 14 9.24198 13.5084 8.36682 12.6332C7.49164 11.758 6.99998 10.571 6.99998 9.33335C6.99998 8.09568 7.49164 6.90869 8.36682 6.03352C9.24198 5.15835 10.429 4.66669 11.6666 4.66669ZM11.6666 17.3834C8.20165 17.3834 4.54998 19.0867 4.54998 19.8334V21.1167H18.7833V19.8334C18.7833 19.0867 15.1316 17.3834 11.6666 17.3834ZM11.6666 6.88335C11.0169 6.88335 10.3937 7.14148 9.93424 7.60094C9.47477 8.06041 9.21665 8.68357 9.21665 9.33335C9.21665 9.98313 9.47477 10.6063 9.93424 11.0658C10.3937 11.5252 11.0169 11.7834 11.6666 11.7834C12.3164 11.7834 12.9396 11.5252 13.3991 11.0658C13.8585 10.6063 14.1166 9.98313 14.1166 9.33335C14.1166 8.68357 13.8585 8.06041 13.3991 7.60094C12.9396 7.14148 12.3164 6.88335 11.6666 6.88335Z"
                                    fill="black"
                                />
                            </svg>

                            {/* <Image
                                width={Account.width}
                                height={Account.height}
                                src={Account}
                                alt="Account icon"
                            /> */}
                        </li>
                        <li className="mr-10 max-md:z-50 max-md:text-white max-md:fixed max-md:bottom-5 max-md:left-5 max-md:w-[50px] max-md:h-[50px] max-md:rounded-full max-md:bg-brand-color max-md:opacity-80 max-md:flex max-md:justify-center max-md:items-center ">
                            {/* <Image
                                width={Search.width}
                                height={Search.height}
                                src={Search}
                                alt="Search icon"
                            /> */}
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.5 24.5L19.2663 19.257M22.1666 12.25C22.1666 14.88 21.1219 17.4024 19.2621 19.2621C17.4024 21.1219 14.88 22.1666 12.25 22.1666C9.61992 22.1666 7.09757 21.1219 5.23784 19.2621C3.3781 17.4024 2.33331 14.88 2.33331 12.25C2.33331 9.61992 3.3781 7.09757 5.23784 5.23784C7.09757 3.3781 9.61992 2.33331 12.25 2.33331C14.88 2.33331 17.4024 3.3781 19.2621 5.23784C21.1219 7.09757 22.1666 9.61992 22.1666 12.25V12.25Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </li>
                        <li className="mr-10">
                            {/* <Image
                                width={Heart.width}
                                height={Heart.height}
                                src={Heart}
                                alt="Likes icon"
                            /> */}
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.16668 3.5C4.94551 3.5 2.33334 6.08533 2.33334 9.275C2.33334 11.8498 3.35418 17.9608 13.4027 24.1383C13.5827 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973 24.1383C24.6458 17.9608 25.6667 11.8498 25.6667 9.275C25.6667 6.08533 23.0545 3.5 19.8333 3.5C16.6122 3.5 14 7 14 7C14 7 11.3878 3.5 8.16668 3.5Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </li>
                        <li className="max-md:z-50 max-md:text-white max-md:fixed max-md:bottom-5 max-md:right-5 max-md:w-[50px] max-md:h-[50px] max-md:rounded-full max-md:bg-brand-color max-md:opacity-80 max-md:flex max-md:justify-center max-md:items-center ">
                            {/* <Image
                                width={Cart.width}
                                height={Cart.height}
                                src={Cart}
                                alt="Cart icon"
                            /> */}
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
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    );
};

export default MainMenu;
