"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {SparklesCore} from "../ui/sparkles"
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { HeroHighlightDemo } from "../Hero/hero";
import { InfiniteMovingCardsDemo } from "../scroll/page";
import { NavbarDemo } from "../navbar/page";


export default function Mainpage() {
  const router = useRouter();
  return (
    <div>
        <NavbarDemo/>

    <BackgroundBeamsWithCollision>
      <div className="flex  flex-col sm:flex-row items-center justify-center gap-4 p-6 w-full rounded-lg shadow-md">
        <>
        <span className="text-white">
        <SignOutButton />

        </span>
          <button onClick={() => router.push("/form")} className="text-white ">Fill The Form</button>
          <Link href="/dashboard">
            <button className="w-full sm:w-auto text-black px-6 py-2 text-sm font-medium  bg-white rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out border border-blue-300 flex items-center justify-center">
              dashboard
            </button>
          </Link>

          <SignedIn>
            <div>
              <h1 className="text-white">this is only content show in login Process</h1>
            </div>
          </SignedIn>
        </>
      </div>
      <div>
      <div className="h-fit w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Arifkoyani
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      </div>
   

    </BackgroundBeamsWithCollision>
    <div>
      </div>
      <div>
        <HeroHighlightDemo/>
      </div>

      <div>
    <InfiniteMovingCardsDemo/>
      </div>
    </div>

  );
}
