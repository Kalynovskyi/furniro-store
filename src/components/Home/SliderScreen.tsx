import Button from "../UI/Button";

export function SliderScreen() {

    const handleNextClick = () => {

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
                        <div className="slider relative">
                            <div className="slider-stage flex space-x-6">
                                <div className="slider-item relative min-w-full">
                                    <div className="image">
                                        <img
                                            src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content absolute bottom-6 left-6">
                                        <div className="bg-(fffff,.7) p-8">
                                            <p className="text-616161 flex items-center">
                                                01{" "}
                                                <span className="bg-616161 h-px w-6 inline-block mx-2"></span>{" "}
                                                Bed Room
                                            </p>
                                            <h5 className="text-28 leading-tight">
                                                Inner Peace
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-item relative min-w-full">
                                    <div className="image">
                                        <img
                                            src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content absolute bottom-6 left-6">
                                        <div className="bg-(fffff,.7) p-8">
                                            <p className="text-616161 flex items-center">
                                                01{" "}
                                                <span className="bg-616161 h-px w-6 inline-block mx-2"></span>{" "}
                                                Bed Room
                                            </p>
                                            <h5 className="text-28 leading-tight">
                                                Inner Peace
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-item relative min-w-full">
                                    <div className="image">
                                        <img
                                            src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content absolute bottom-6 left-6">
                                        <div className="bg-(fffff,.7) p-8">
                                            <p className="text-616161 flex items-center">
                                                01{" "}
                                                <span className="bg-616161 h-px w-6 inline-block mx-2"></span>{" "}
                                                Bed Room
                                            </p>
                                            <h5 className="text-28 leading-tight">
                                                Inner Peace
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-item relative min-w-full">
                                    <div className="image">
                                        <img
                                            src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/home-slider-image-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content absolute bottom-6 left-6">
                                        <div className="bg-(fffff,.7) p-8">
                                            <p className="text-616161 flex items-center">
                                                01{" "}
                                                <span className="bg-616161 h-px w-6 inline-block mx-2"></span>{" "}
                                                Bed Room
                                            </p>
                                            <h5 className="text-28 leading-tight">
                                                Inner Peace
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-nav-arrows">
                                <div className="next bg-brand-color cursor-pointer absolute top-1/2 right-0" onClick={handleNextClick}>
                                    Next
                                </div>
                                <div className="prev bg-brand-color cursor-pointer absolute top-1/2 left-0"  onClick={handlePrevClick}>
                                    Prev
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
