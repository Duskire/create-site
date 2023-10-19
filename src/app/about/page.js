"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import Particles from '../components/particles';

export default function About() {  
    return (
        <main className="relative min-h-screen justify-center bg-gradient-to-tr from-background-600 from-10% via-background-300 via-30% to-background-900 to-90%">\
            <link rel="icon" href="favicon.svg"></link>
            {Navbar()}
            {Particles()}
            <div className="flex flex-col text-center items-center">
                    
            </div>
        </main>
    )
  }
  