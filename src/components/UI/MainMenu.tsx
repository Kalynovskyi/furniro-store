import Image from 'next/image'

import Logo from "../../assets/images/logo.svg";
import Account from "../../assets/images/account-alert-outline.svg";
import Search from "../../assets/images/akar-icons_search.svg";
import Heart from "../../assets/images/akar-icons_heart.svg";
import Cart from "../../assets/images/hopping-cart-outlined.svg";

const MainMenu = () => {
    return (
        <>
            <div className="container 2xl py-30 ">
                <nav className="flex justify-between items-center">
                    <div className="logo">
                        <a  href="/"><Image src={Logo} alt="Main logo" /></a>
                    </div>
                    <ul className="flex justify-center space-x-75">
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

                    <div className="icons ">
                        <ul className="flex space-x-45">
                            <li>
                                <Image src={Account} alt="Account icon" />
                            </li>
                            <li>
                                <Image src={Search} alt="Search icon" />
                            </li>
                            <li>
                                <Image src={Heart} alt="Likes icon" />
                            </li>
                            <li>
                                <Image src={Cart} alt="Cart icon" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MainMenu;
