// src/components/Recordkeeper.js

import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export default function Recordkeeper() {
  return (
   <section id="Recordkeeper">
    <a href = "/">
      <ChevronDoubleLeftIcon className="absolute w-16 mt-4 ml-4" />
    </a>
    <div className="container mx-auto align-items-center">
        <img
          className="block mx-auto py-16 px-40 object-cover object-center"
          alt="hero"
          src="./brittle_banner.png"
        />
        <p className="mb-8 leading-relaxed px-60 text-center">
            Deep spelunking and save-error debunking - Brittle is an unusual metroidvania with a deeply-customizable loadout system and an enormous, seamless map. Pull off crazy chain-combos,
            solve esoteric puzzles and get hopelessly lost underground in this mad subterranean scramble.
        </p>
        <div className="container mx-auto flex px-40 py-8 md:flex-row flex-col items-center justify-center">
          <img
            className="relative h-20 object-cover object-center mr-0"
            alt="An crude recreation of the itch.io logo, with text reading 'itch demo soon!'"
            src="./horrible indicator 3.png"
          />
        </div>
      <div className="container mx-auto flex px-40 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Ol' Reliable
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            It's like a graduate condition for an aspiring game developer to take a crack at the 2D platformer. That's not just because of simplicity or appeal - rather, it's because
            it's such a great meeting point. The many fundamentals of game development, from rendering to reasoning, from hit detection to narrative direction, all of 'em are here in a 
            slightly-more digestible format. Brittle's my take. It's unwieldy, overly-ambitious, and a big stepping-stone in my journey towards understanding how big-scale design and small-scale 
            implementation interact.
            <br></br><br></br>
            Though I have yet to master the asset pipeline, I've come quite far in my system architecture. Brittle features a slightly-overcomplicated loadout system with eight possible loadouts,
            each containing three abilities. The player can freely configure which of the numerous abilities go into which loadout, and what three to pair up. These abilities react and collide with 
            one-another, producing outrageous and unpredictable combat situations. That's the centerpiece, but there's plenty more - from dialogue to random events, it's a hefty beast.
          </p>
        
        </div>
        <div className="mr-0">
          <img
            className="w-96 object-cover object-center rounded"
            alt="hero"
            src="./brittle01.png"
          />
        </div>
      </div>


      <div className="container mx-auto flex px-40 py-20 md:flex-row-reverse flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Spinning Plates, Tracking States
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            A core part of Brittle's experience is freedom of approach, which means I need to design around many different routes to the exit. That means that it isn't quite as cut-and-dry as 
            saving a bunch of on-off flags. Well, it still is at the end of the day, but the logic that decides how those 1s and 0s flip is a bit more elaborate than that.
            Most games use some kind-of singleton Gamemaster to keep things running in a logically clean manner, but Brittle also uses a WorldstateMaster to make sure that whenever the player
            sets a big flag, that any unexpected consequences (say, a necessary prevention flag for acquiring an ability early) is tripped as well. The WorldstateMaster
            analyzes a lot of conditionals, which is messy, so it's gotta be well documented. This becomes doubly-important when the question of a reactive world is posed - are there any faulty
            conditional pairs - dialogue that makes no sense with context, or blockages that erroneously appear? Designing a Metroidvania is all about diligence and consistency.
            <br></br><br></br>
            This is the lower-layer consequence of desigining around broad possibilities. Any time I want to add a room, obstacle or fight, I need to consider what it means
            to players at different points (or on different routes) of the game. Knowing that they could arrive in each room for the first time at a very different moment than 
            other players means that each individual experience has a lot of different in-and-out conditions. Tuning is a process of careful consideration, and making sure it's saved correctly
            is only one part of the puzzle.
          </p>
        
        </div>
        <div className="m">
          <img
            className="relative w-96 object-cover object-center rounded mr-0"
            alt="hero"
            src="./brittle_mapshot.png"
          />
        </div>
      </div>
    </div>
   </section>
 );
}
