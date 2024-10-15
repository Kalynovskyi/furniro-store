import React from "react";
import Button from "../UI/Button";

export function HeroScreen() {
    return (
        <section className="hero-section bg-hero-screen h-[calc(100vh-100px)] bg-cover bg-no-repeat bg-center flex justify-center">
            <div className="container 2xl grid grid-cols-12 h-full items-center ">
                <div className="col-start-7 col-span-6">
                    <div className="content py-60 px-10 bg-FFF3E3 rounded-md">
                        <p className="subtitle font-semibold tracking-widest">
                            New Arrival
                        </p>
                        <h1 className="text-52 font-bold leading-tight text-brand-color mt-1 mb-5">
                            Discover Our New Collection
                        </h1>
                        <p className="subtitle font-medium text-lg mb-45">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                        <Button>Buy Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
