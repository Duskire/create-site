"use client"

import { useEffect } from "react";

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

export default function Navbar(user, current_page) {
    return (
        <nav className="absolute justify-center rounded-lg z-2 object-top top-2 inset-x-80 h-16 bg-primary-700 border-b-2 border-r-2 border-accent-500">
            <div className="flex items-center justify-center mx-auto p-2">
                <ul className="flex flex-row text-2xl">
                    <li>
                        <a href="/" className="inline-block py-2 px-5 text-center rounded text-text-200 hover:text-text-600" id="home-button" value="Home">Home</a>
                    </li>
                    <li>
                        <a href="/#projects" className="inline-block py-2 px-5 text-center rounded border-r-2 text-text-200 hover:text-text-600" id="projects-button" value="Projects">Projects</a>
                    </li>
                    <li>
                        <a href="/about" className="inline-block py-2 px-5 text-center rounded text-text-200 hover:text-text-600" id="about-button" value="About">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}