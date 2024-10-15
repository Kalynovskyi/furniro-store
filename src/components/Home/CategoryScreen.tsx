export function CategoryScreen() {
    return (
        <div className="container 2xl grid grid-cols-12 text-center py-50">
            <div className="col-start-2 col-end-12">
                <h3 className="text-32 font-semibold">Browse The Range</h3>
                <p className="text-xl pb-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="sm:flex space-x-5">
                    <a href="" className="group ">
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/category-screen-dining.jpg"
                                alt="Category Dining"
                            />
                            <div className="w-full h-full absolute top-0 overlay transition-all duration-300 opacity-0 bg-3A3A3A group-hover:opacity-70"></div>
                        </div>

                        <h4 className="mt-8 transition-all duration-300 group-hover:text-brand-color">
                            Dining
                        </h4>
                    </a>
                    <a href="" className="group">
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/category-screen-living.jpg"
                                alt="Category Living"
                            />
                            <div className="w-full h-full absolute top-0 overlay transition-all duration-300 opacity-0 bg-3A3A3A group-hover:opacity-70"></div>
                        </div>
                        <h4 className="mt-8 transition-all duration-300 group-hover:text-brand-color">
                            Living
                        </h4>
                    </a>
                    <a href="" className="group ">
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src="https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/category-screen-bedroom.jpg"
                                alt="Category Bedroom"
                            />
                            <div className="w-full h-full absolute top-0 overlay transition-all duration-300 opacity-0 bg-3A3A3A group-hover:opacity-70"></div>
                        </div>
                        <h4 className="mt-8 transition-all duration-300 group-hover:text-brand-color">
                            Bedroom
                        </h4>
                    </a>
                </div>
            </div>
        </div>
    );
}
