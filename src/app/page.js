"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";
import Navbar from ".//components/navbar"
import Particles from './/components/particles';

export default function Home() {
  return (
    <main className="relative min-h-screen justify-center bg-gradient-to-tr from-background-600 from-10% via-background-300 via-30% to-background-900 to-90%">
      <link rel="icon" href="favicon.svg"></link>
      {Navbar()}
      {Particles()}
      <div className="flex flex-col text-center items-center">
        <div className="relative mt-40 mx-auto p-5 pointer-events-none z-20">
          <Image className="relative" src="/banner.svg" alt="Duskire Banner" width={480} height={360} id="banner"/>
        </div>
        <div className="flex flex-row z-20">
          {/*from https://icons8.com/icon/set/social-media/pulsar-color*/}
          <a href="https://www.twitch.tv/duskirelive" className="hover:scale-125 transition duration-500 cursor-pointer">
            <Image className="border-box h-20 w-20 p-3" src="/twitchicon.svg" alt="twitch" width={48} height={48} id="social1"/>
          </a>
          <a href="https://www.youtube.com/@duskirelive" className="hover:scale-125 transition duration-500 cursor-pointer">
            <Image className="border-box h-20 w-20 p-3" src="/youtubeicon.svg" alt="youtube" width={48} height={48} id="social2"/>
          </a>
          <a href="https://www.x.com/duskirelive" className="hover:scale-125 transition duration-500 cursor-pointer">
            <Image className="border-box h-20 w-20 p-3" src="/twitxicon.svg" alt="twitterx" width={48} height={48} id="social3"/>
          </a>
          <a href="https://www.reddit.com/user/DuskireLive" className="hover:scale-125 transition duration-500 cursor-pointer">
            <Image className="border-box h-20 w-20 p-3" src="/redditicon.svg" alt="reddit" width={48} height={48} id="social4"/>
          </a>
          <a href="https://www.github.com/Duskire" className="hover:scale-125 transition duration-500 cursor-pointer">
            <Image className="border-box h-20 w-20 p-3" src="/githubicon.svg" alt="github" width={48} height={48} id="social5"/>
          </a>
        </div>
        <div className="relative mx-auto p-20 z-20 text-xl">
          <p className="block rounded-full p-2 text-text-200 bg-primary-700">I'm a programming student who has a lot to share with the world!</p>
          <hr className="my-5"/>
          <h2 className="relative text-2xl p-2 text-text-50" id="projects"><b>Projects</b></h2>
          <p className="relative p-3 text-text-50">Here are some of my current and upcoming projects</p>
          <div className="flex flex-row items-center justify-center">
            <div className="p-3 hover:scale-125 transition duration-500 cursor-pointer">
              <button className="inline-block p-3 rounded-xl bg-gradient-to-tl from-bg-secondary-600 from-10% via-bg-primary-300 via-40% to-bg-secondary-800 to-80% text-text-200 hover:text-text-400">
                This Site!
                <Image className="m-auto rounded-xl" src="/javascript.jpg" alt="Javascript Image" width={150} height={150}/>
              </button>
            </div>
            <div className="p-3 hover:scale-125 transition duration-500 cursor-pointer">
              <button className="inline-block p-3 rounded-xl bg-gradient-to-tl from-bg-secondary-600 from-10% via-bg-primary-300 via-40% to-bg-secondary-800 to-80% text-text-200 hover:text-text-400">
                New Game (WIP)
                <br/ >
                Coming Eventually!
                <Image className="m-auto rounded-xl" src="/comingsoon.jpg" alt="Coming Soon Image" width={150} height={150}/>
              </button>
            </div>
            <div className="p-3 hover:scale-125 transition duration-500 cursor-pointer">
              <button className="inline-block p-3 rounded-xl bg-gradient-to-tl from-bg-secondary-600 from-10% via-bg-primary-300 via-40% to-bg-secondary-800 to-80% text-text-200 hover:text-text-400">
                Coming Soon!
                <Image className="m-auto rounded-xl" src="/comingsoon.jpg" alt="Coming Soon Image" width={150} height={150}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
