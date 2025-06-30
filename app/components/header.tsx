import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full py-4 flex flex-row flex-nowrap justify-between mx-auto items-center px-4 sm:px-6">
            <Link
                className="text-base-content text-lg font-medium flex flex-row flex-nowrap justify-center items-center gap-x-2 pr-1.5 leading-none rounded-lg hover:text-primary transition-colors duration-300"
                href="/"
            >
                <Image
                    src="/apple-touch-icon.png"
                    alt="Phone Number Generator Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                />
                <h1 className="italic">Phone Number Generator</h1>
            </Link>
        </header>
    );
} 