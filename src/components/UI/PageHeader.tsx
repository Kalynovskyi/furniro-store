import React from "react";
import Link from "next/link";

interface PageHeaderProps {
    pageName: string;
}
export function PageHeader(props: PageHeaderProps ) {
    return (
        <header className="pt-[7.563rem] pb-[6.063rem] bg-page-header bg-cover bg-no-repeat bg-center flex justify-center items-center">
            <div>
                <h1 className="text-5xl font-medium leading-[normal] [text-shadow:_0_2px_5px_rgb(0_0_0_/_50%)]">
                    {props.pageName}
                </h1>
                <div className="flex justify-center items-center">
                    <Link className="font-medium" href={"/"}>
                        Home
                    </Link>
                    <i className="px-3">
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z"
                                fill="black"
                            />
                        </svg>
                    </i>
                    <p>{props.pageName}</p>
                </div>
            </div>
        </header>
    );
}
