'use client'

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string
};

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <footer className="w-full pt-12 pb-10 border-t border-border-color">
            <div className="container 2xl pb-12 border-b border-border-color">
                <div className="mx-5 grid grid-cols-12">
                    <div className="col-span-12 md:col-span-3 pb-12 md:pb-0">
                        <h2 className="font-bold text-2xl mb-[3.125rem]">
                            Funiro.
                        </h2>
                        <p className="text-[#9F9F9F] font-light">
                            400 University Drive Suite 200 Coral Gables,
                            <br />
                            FL 33134 USA
                        </p>
                    </div>
                    <div className="col-span-12 md:col-start-5 md:col-span-2 pb-12 md:pb-0">
                        <h5 className="mb-[3.125rem] text-[#9F9F9F] font-light">
                            Links
                        </h5>
                        <ul className="space-y-12">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-color transition-colors duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-color transition-colors duration-300"
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-color transition-colors duration-300"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-color transition-colors duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-2 pb-12 md:pb-0">
                        <h5 className="mb-[3.125rem] text-[#9F9F9F] font-light">
                            Help
                        </h5>
                        <ul className="space-y-12">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-color transition-colors duration-300"
                                >
                                    Payment Options
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-color transition-colors duration-300"
                                >
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-color transition-colors duration-300"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <h5 className="mb-[3.125rem] text-[#9F9F9F] font-light">
                            Newsletter
                        </h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email" className=" w-full flex">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email Address"
                                    {...register("email", { required: true })}
                                    className="w-full flex-grow border-b border-black placeholder-shown:text-ellipsis"
                                />
                                
                                <button
                                    type="submit"
                                    className="border-b border-black ml-[0.688rem]"
                                >
                                    SUBSCRIBE
                                </button>
                            </label>
                            {errors.email && <span>This field is required</span>}
                        </form>
                    </div>
                </div>
            </div>

            <div className="mx-5 md:mx-auto container  2xl pt-[2.188rem]">
                <p className="font-extralight">
                    2023 furino. All rights reverved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
