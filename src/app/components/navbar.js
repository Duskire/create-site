"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react";

export default function Navbar(user, current_page) {
    return (
        <nav className="relative rounded-lg z-30 top-2 mx-auto overflow-hidden w-fit h-16 bg-primary-700 border-b-2 border-r-2 border-accent-500">
            <div className="flex items-center justify-center p-2">
                <ul className="flex flex-row text-2xl">
                    <li>
                        <Link href="/" className="inline-block py-2 px-5 text-center rounded text-text-200 hover:text-text-600" id="home-button" value="Home">Home</Link>
                    </li>
                    <li>
                        <Link href="/#projects" className="inline-block py-2 px-5 text-center rounded border-r-2 text-text-200 hover:text-text-600" id="projects-button" value="Projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/about" className="inline-block py-2 px-5 text-center rounded text-text-200 hover:text-text-600" id="about-button" value="About">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}