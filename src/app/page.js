"use client"

import Image from 'next/image'
import { useEffect, useState } from "react";
import Navbar from ".//components/navbar"
//import Particles from './/components/particles';

export default function Home() {
  return (
    <main className="min-h-screen justify-center bg-gradient-to-b from-background-600 to-background-900">
      {Navbar()}
      <div className="flex flex-col text-center items-center">
        <div className="absolute z-0">
          {/* {Particles()} */}
        </div>
        <div className="relative mt-40 mx-auto p-5 z-2 object-center overflow-hidden pointer-events-none">
          <Image className="relative transform hover:scale-120 priority" src="/banner.svg" alt="Duskire Banner" width={480} height={360} id="banner"/>
        </div>
        <div className="flex flex-row z-2">
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
        <div className="relative mx-auto p-20 z-2 text-xl">
          <p className="">I'm a programming student who has a lot to share with the world!</p>
          <hr />
          <p className="text-2xl p-4 text-text-300" id="projects"><b>Projects</b></p>
          <h2 className="relative p-3 text-text-300">Here are some of my current and upcoming projects</h2>
          <div className="flex flex-row items-center justify-center">
            <div className="p-3">
              <button className="inline-block p-3 rounded text-text-200 bg-primary-500 hover:text-text-400">
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


  /*return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )*/