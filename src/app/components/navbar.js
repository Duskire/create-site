"use client"

import { useEffect } from "react";

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

export default function Navbar(user, current_page) {
    return (
        <nav className="fixed rounded-b-lg w-400px z-2 top-0 left-0 h-16 bg-primary-800 border-b-2 border-r-2 border-accent-500">
            <div className="max-w-screen-xl flex items-center justify-center mx-auto p-2">
                <ul className="flex flex-row text-2xl">
                    <li>
                        <a href="/" className="inline-block py-2 px-5 text-center rounded border-r-2 text-text-200" id="home-button" value="Home">Home</a>
                    </li>
                    <li>
                        <a href="/projects" className="inline-block py-2 px-5 text-center rounded border-r-2 text-text-200" id="projects-button" value="Projects">Projects</a>
                    </li>
                    <li>
                        <a href="/about" className="inline-block py-2 px-5 text-center rounded text-text-200" id="about-button" value="About">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}