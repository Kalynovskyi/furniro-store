import { Slider } from "./../Plugins/Slider/Slider";
import Button from "../UI/Button";
import { SliderItem } from "../Plugins/Slider/SliderItem";
import { useState } from "react";



export function SliderScreen() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [activeSliderItem, setActiveSliderItem] = useState<number>(0);

    const sliderItems = [
        {
            id: 1,
            title: "Inner Peace",
            category: "Bed Room",
            image: "https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-1.jpg",
            imageAlt: "Bed Room Image",
        },
        {
            id: 2,
            title: "Inner Peace",
            category: "Bed Room",
            image: "https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-2.jpg",
            imageAlt: "Bed Room Image",
        },
        {
            id: 3,
            title: "Inner Peace",
            category: "Bed Room",
            image: "https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-3.jpg",
            imageAlt: "Bed Room Image",
        },
        {
            id: 4,
            title: "Inner Peace",
            category: "Bed Room",
            image: "https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-2.jpg",
            imageAlt: "Bed Room Image",
        },
    ];

    const imageLoaded = () => {
        setIsImageLoaded(true);
    };

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
                        <Slider
                            isImageLoaded={isImageLoaded}
                        >
                            {sliderItems.map((item, index) => (
                                <SliderItem
                                    className={`relative min-w-full overflow-hidden ${
                                        activeSliderItem === index
                                            ? "active"
                                            : ""
                                    } ${
                                        activeSliderItem > index ? "prev" : ""
                                    } ${
                                        activeSliderItem < index ? "next" : ""
                                    } ${
                                        activeSliderItem !== index
                                            ? "h-2/3"
                                            : ""
                                    }`}
                                    key={item.id}
                                >
                                    <div className="image">
                                        <img
                                            src={item.image}
                                            alt=""
                                            onLoad={imageLoaded}
                                        />
                                    </div>
                                    <div
                                        className={`content absolute bottom-6 left-6 transition-all duration-300 ${
                                            activeSliderItem !== index
                                                ? "opacity-0"
                                                : ""
                                        }`}
                                    >
                                        <div className="bg-(fffff,.7) p-8">
                                            <p className="text-616161 flex items-center">
                                                {item.id}
                                                <span className="bg-616161 h-px w-6 inline-block mx-2"></span>
                                                {item.category}
                                            </p>
                                            <h5 className="text-28 leading-tight">
                                                {item.title}
                                            </h5>
                                        </div>
                                    </div>
                                </SliderItem>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}
