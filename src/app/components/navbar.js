"use client"

import { useEffect } from "react";

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

export default function Navbar(user, current_page) {
    return (
        <nav className="fixed w-full z-2 top-0 left-0 h-48 bg-gradient-to-b from-background-700 pointer-events-none">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 pointer-events-auto">
                <ul className="flex flex-col text-lg">
                    <li>
                        <NavLink to="/" className="block py-2 pl-3 pr-4 w-20 text-center text-text-200 rounded" id="home-button" value="Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className="block py-2 pl-3 pr-4 w-20 text-center text-text-200 rounded" id="projects-button" value="Projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="block py-2 pl-3 pr-4 w-20 text-center text-text-200 rounded" id="about-button" value="About">About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}