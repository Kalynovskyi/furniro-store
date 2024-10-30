import Image from "next/image";

export function ShareScreen() {
    return (
        <section className="pt-[4.18rem] pb-12">
            <div className="heading text-center">
                <p className="subtitle font-medium tracking-widest">
                    Share your setup with
                </p>

                <h3 className="text-40 font-semibold leading-tight text-center mb-8">
                    #FurniroFurniture
                </h3>
            </div>

            <div className="grid grid-cols-[repeat(24,minmax(0,1fr))] auto-rows-auto gap-4 relative left-[-5vw] w-[110vw]">
                <div className="col-start-1 col-span-4 self-end row-start-1 row-span-1">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-1.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-5 col-span-6  row-start-1 row-span-1 self-end">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-2.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-1 col-span-5 row-start-2 row-span-1 self-start">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-3.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-6 col-span-5 row-start-2 row-span-1  self-start">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-4.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-11 col-span-4 row-start-1 row-span-2 self-center">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-5.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-16 col-span-4 row-start-1 row-span-1 self-end">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-6.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-16 col-span-3 row-start-2 row-span-1  self-start">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-7.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-20 col-span-6 row-start-1 row-span-1 self-end">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-8.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-19 col-span-5 row-start-2 row-span-1 self-start">
                    <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src="/assets/images/home-share-screen-9.jpg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}
