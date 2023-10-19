"use client"

import Image from 'next/image'
import { useEffect, useState } from "react";
import Navbar from ".//components/navbar"
import Particles from './/components/particles';

export default function Home() {
  return (
    <main className="relative min-h-screen justify-center bg-gradient-to-tr from-background-600 from-10% via-background-300 via-30% to-background-900 to-90%">
      {Navbar()}
      {Particles()}
      <div className="flex flex-col text-center items-center">
        <div className="relative mt-40 mx-auto p-5 pointer-events-none z-20">
          <Image className="relative" src="/banner.svg" alt="Duskire Banner" width={480} height={360} id="banner"/>
        </div>
        <div className="flex flex-row z-20">
          {/*from https://icons8.com/icon/set/social-media/pulsar-color */}
          <a href="https://www.twitch.tv/duskirelive" className="">
            <Image className="border-box h-20 w-20 p-3" src="/twitchicon.svg" alt="twitch" width={48} height={48} id="social1"/>
          </a>
          <a href="https://www.youtube.com/@duskirelive" className="">
            <Image className="border-box h-20 w-20 p-3" src="/youtubeicon.svg" alt="youtube" width={48} height={48} id="social2"/>
          </a>
          <a href="https://www.x.com/duskirelive" className="">
            <Image className="border-box h-20 w-20 p-3" src="/twitxicon.svg" alt="twitterx" width={48} height={48} id="social3"/>
          </a>
          <a href="https://www.reddit.com/user/DuskireLive" className="">
            <Image className="border-box h-20 w-20 p-3" src="/redditicon.svg" alt="reddit" width={48} height={48} id="social4"/>
          </a>
          <a href="https://www.github.com/Duskire" className="">
            <Image className="border-box h-20 w-20 p-3" src="/githubicon.svg" alt="github" width={48} height={48} id="social5"/>
          </a>
        </div>
        <div className="relative mx-auto p-20 z-20 text-xl">
          <p className="block rounded-full p-2 text-text-200 bg-primary-500">I'm a programming student who has a lot to share with the world!</p>
          <hr className="my-5"/>
          <p className="text-2xl p-2 text-text-300" id="projects"><b>Projects</b></p>
          <h2 className="relative p-3 text-text-300">Here are some of my current and upcoming projects</h2>
          <div className="flex flex-row items-center justify-center">
            <div className="p-3">
              <button className="inline-block p-3 rounded outline hover:outline-offset-4 outline-accent-500 text-text-200 bg-primary-500 hover:text-text-400">
                This Site!
                <Image className="mx-auto" src="/javascript.jpg" alt="Javascript Image" width={150} height={150}/>
              </button>
            </div>
            <div className="p-3">
              <button className="inline-block p-3 rounded text-text-200 bg-primary-500 hover:text-text-400">
                Coming Soon!
                <Image className="mx-auto" src="/comingsoon.jpg" alt="Coming Soon Image" width={150} height={150}/>
              </button>
            </div>
            <div className="p-3 hover:border-5 hover:border-accent-300">
              <button className="inline-block p-3 rounded text-text-200 bg-primary-500 hover:text-text-400">
                Coming Soon!
                <Image className="mx-auto" src="/comingsoon.jpg" alt="Coming Soon Image" width={150} height={150}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
