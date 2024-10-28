export function SliderDots(props: SliderData) {
    const handleNavDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const nextSlide = target.dataset.slide;
        if (nextSlide === undefined) throw new Error("Next slide is undefined");

        if (props.toSlide) props.toSlide(props.activeSlide, +nextSlide);
    };

    /*Slider dots creation*/
    const createSliderNavDots = () => {
        if (!props.itemsAmount) throw new Error("Unable to create slider dots due to undefined slider items amount");

        const dots = [];
        for (let i = 0; i < props.itemsAmount; i++) {
            dots.push(
                <div
                    key={i}
                    className={`h-[27px] w-[27px] rounded-full cursor-pointer flex items-center justify-center ${
                        props.activeSlide === i
                            ? `border-brand-color border`
                            : ``
                    }`}
                    data-slide={i}
                    onClick={handleNavDotClick}
                >
                    <div
                        className={`h-[11px] w-[11px] rounded-full cursor-pointer ${
                            props.activeSlide === i
                                ? `bg-brand-color `
                                : `bg-[#D8D8D8]`
                        }`}
                        data-slide={i}
                    ></div>
                </div>
            );
        }

        return dots;
    };

    return (
        <div className="slider-nav-dots lg:flex space-x-4 absolute -right-6 bottom-7 translate-x-full hidden">
            {createSliderNavDots()}
        </div>
    );
}
