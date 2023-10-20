"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import Particles from '../components/particles';

export default function About() {  
    return (
        <main className="relative min-h-screen justify-center bg-gradient-to-tr from-background-600 from-10% via-background-300 via-30% to-background-900 to-90%">
            <link rel="icon" href="favicon.svg"></link>
            {Navbar()}
            {Particles()}
            <div className="flex flex-col text-center items-center">
                <div className="relative mt-20 p-5 text-xl z-20">
                    <div className="rounded-xl my-5 hover:scale-110 transition duration-500 cursor-pointer text-text-50 bg-primary-700 bg-opacity-70">
                        <h2 className="p-2 text-2xl">About Me</h2>
                        <p className="p-2">I'm Duskire, a beginner developer, who is currently learning website development and game design</p>
                    </div>
                    <div className="rounded-xl my-5 hover:scale-110 transition duration-500 cursor-pointer text-text-50 bg-primary-700 bg-opacity-70">
                        <h2 className="p-2 text-2xl">This Site</h2>
                        <p className="p-2">This site doubles as a portfolio for myself, <br />
                        while also being a project for a class to showcases my skills as a developer <br />
                        The site is built using the Next.js framework, and utilises various languages <br />
                        such as HTML, JavaScript, Tailwind CSS, and ReactJS</p>
                    </div>
                    <a href="mailto:duskirebusiness@gmail.com" className=" decoration-text-100 hover:underline">
                        <div className="rounded-xl my-5 hover:scale-110 transition duration-500 cursor-pointer text-text-50 bg-primary-700 bg-opacity-70">
                            <h2 className="p-2 text-2xl">Contact</h2>
                            <p className="p-2">Email - duskirebusiness@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </main>
    )
  }
  