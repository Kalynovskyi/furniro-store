import { Slider } from "./../Plugins/Slider/Slider";
import Button from "../UI/Button";
import { SliderItem } from "../Plugins/Slider/SliderItem";
import { useState } from "react";

export function SliderScreen() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const imageLoaded = () => {
        setIsImageLoaded(true);
    }

    const handleGetActiveSlide = (activeSlide: number) => {
        console.log(activeSlide);
    }

    return (
        <section className="py-11 bg-FCF8F3">
            <div className="container 2xl w-full  ">
                <div className="mx-5 grid grid-cols-12 gap-10">
                    <div className="col-span-12 md:col-span-4 h-full flex flex-col justify-center">
                        <div className="z-20">
                            <h3 className="text-40 font-semibold leading-tight mb-2">
                                50+ Beautiful rooms inspiration
                            </h3>
                            <p className="subtitle font-normal text-lg mb-6">
                                Our designer already made a lot of beautiful
                                prototipe of rooms that inspire you
                            </p>
                            <Button className="py-3">Explore More</Button>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Slider isImageLoaded={isImageLoaded} getActiveSlide={handleGetActiveSlide}>
                            
                            <SliderItem className="relative min-w-full">
                                <div className="image">
                                    <img
                                        src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-1.jpg"
                                        alt=""
                                        onLoad={imageLoaded}
                                    />
                                </div>
                                <div className="content absolute bottom-6 left-6">
                                    <div className="bg-(fffff,.7) p-8">
                                        <p className="text-616161 flex items-center">
                                            01
                                            <span className="bg-616161 h-px w-6 inline-block mx-2"></span>
                                            Bed Room
                                        </p>
                                        <h5 className="text-28 leading-tight">
                                            Inner Peace
                                        </h5>
                                    </div>
                                </div>
                            </SliderItem>
                            <SliderItem className="relative min-w-full">
                                <div className="image">
                                    <img
                                        src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-2.jpg"
                                        alt=""
                                        onLoad={imageLoaded}
                                    />
                                </div>
                                <div className="content absolute bottom-6 left-6">
                                    <div className="bg-(fffff,.7) p-8">
                                        <p className="text-616161 flex items-center">
                                            01
                                            <span className="bg-616161 h-px w-6 inline-block mx-2"></span>
                                            Bed Room
                                        </p>
                                        <h5 className="text-28 leading-tight">
                                            Inner Peace
                                        </h5>
                                    </div>
                                </div>
                            </SliderItem>
                            <SliderItem className="relative min-w-full">
                                <div className="image">
                                    <img
                                        src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-3.jpg"
                                        alt=""
                                        onLoad={imageLoaded}
                                    />
                                </div>
                                <div className="content absolute bottom-6 left-6">
                                    <div className="bg-(fffff,.7) p-8">
                                        <p className="text-616161 flex items-center">
                                            01
                                            <span className="bg-616161 h-px w-6 inline-block mx-2"></span>
                                            Bed Room
                                        </p>
                                        <h5 className="text-28 leading-tight">
                                            Inner Peace
                                        </h5>
                                    </div>
                                </div>
                            </SliderItem>
                            <SliderItem className="relative min-w-full">
                                <div className="image">
                                    <img
                                        src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-2.jpg"
                                        alt=""
                                        onLoad={imageLoaded}
                                    />
                                </div>
                                <div className="content absolute bottom-6 left-6">
                                    <div className="bg-(fffff,.7) p-8">
                                        <p className="text-616161 flex items-center">
                                            01
                                            <span className="bg-616161 h-px w-6 inline-block mx-2"></span>
                                            Bed Room
                                        </p>
                                        <h5 className="text-28 leading-tight">
                                            Inner Peace
                                        </h5>
                                    </div>
                                </div>
                            </SliderItem>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}
