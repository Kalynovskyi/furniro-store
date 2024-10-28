export function SliderNavButtons(props: SliderData) {
    const handleNextSlideClick = () => {
        if (props.toSlide)
            props.toSlide(props.activeSlide, props.activeSlide + 1);
    };

    const handlePrevSlideClick = () => {
        if (props.toSlide)
            props.toSlide(props.activeSlide, props.activeSlide - 1);
    };

    if (!props.itemsAmount) throw new Error("Unable to render slider navigation buttons due to undefined slider items amount");

    return (
        <div className="slider-nav-arrows">
            {props.activeSlide !== props.itemsAmount - 1 && (
                <div
                    className="next flex items-center justify-center bg-white w-12 h-12 rounded-full cursor-pointer absolute top-1/2 right-0 shadow-md"
                    onClick={handleNextSlideClick}
                >
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.00006 1L8.00006 8L1.00006 15"
                            stroke="#B88E2F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
            {props.activeSlide !== 0 && (
                <div
                    className="next flex items-center justify-center bg-white w-12 h-12 rounded-full cursor-pointer absolute top-1/2 left-0 shadow-md"
                    onClick={handlePrevSlideClick}
                >
                    <svg
                        className="rotate-180"
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.00006 1L8.00006 8L1.00006 15"
                            stroke="#B88E2F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}
