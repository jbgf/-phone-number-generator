import React from 'react';
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full py-4 flex flex-row flex-nowrap justify-between mx-auto items-center px-4 sm:px-6">
            <Link
                className="text-base-content text-lg font-medium flex flex-row flex-nowrap justify-center gap-x-1.5 pr-1.5 leading-none rounded-lg hover:text-primary transition-colors duration-300"
                href="/"
            >
                <h1 className="italic">Phone Number Generator</h1>
            </Link>
        </header>
    );
} 