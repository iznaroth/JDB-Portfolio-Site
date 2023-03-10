// src/components/ManicMechanics.js

import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export default function Industrizer() {
  return (
   <section id="manmech">
    <a href = "/">
      <ChevronDoubleLeftIcon className="absolute w-16 mt-4 ml-4" />
    </a>
    <div className="container mx-auto align-items-center">
        <img
          className="block mx-auto py-16 px-40 object-cover object-center"
          alt="hero"
          src="./manmech_bannerv2.png"
        />
        <p className="mb-8 leading-relaxed px-60 text-center">
            Production chains and optimization strains - Manic Mechanics is a minecraft mod paced for both solo progression and cross compatibility. The mod is designed around a
            player-driven resource economy, influence from competitors and rivals, tons of convoluted processing chains, and a terribly overwrought story to tie it all together. Can you hack it as the latest in a long-line of multiversal tech-barons?
          </p>
      <div className="container mx-auto flex px-40 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            The factory must grow...
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            As a human being born after the turn of the century, Minecraft was a pretty influential part of my childhood. Over the years, I've been poking my head into 
            the modding scene and trying it out - and here's the result. Manic Mechanics inherits a lot of DNA from the "tech mod" standard that has shaped Minecraft's community content since
            the early days - with a focus on resource management, logistic puzzles, and endless automation, it's a real brainscratcher. On the implementation side, it certainly forced me to 
            keep my code clean - both to cooperate with an existing codebase, and to stay compliant and compatible with the thousands of other mods out there. Boilerplate is king, and consistency is
            the difference between a working mod and a useless one. 
            <br /><br />
            It's all made using Minecraft Forge, a powerful community-built API that uses official mappings of the Minecraft source code and loads of helpful functions
            to standardize the process of Minecraft mod development. As a community project, documentation and consistent guides are rare, so a lot of my learning happens in
            public GitHub repositories for other Forge mods. It's done a lot to sharpen my existing-project adaptation speed. 
            <br /><br />
            (...and guess what! That means cross-compatibility. Some of the items in this screenshot are from the legendary tech mod Mekanism - check it out here: https://www.curseforge.com/minecraft/mc-mods/mekanism)
          </p>
        
        </div>
        <div className="mr-0">
          <img
            className="relative w-96 object-cover object-center rounded mr-0"
            alt="A screenshot of a graphical user interface from a modded game of Minecraft. The interface is titled IFSR and shows several gameplay components, including an input and output slot, a power meter, three recipe toggles and three fluid tanks."
            src="./infuser gui.png"
          />
        </div>
      </div>


      <div className="container mx-auto flex px-40 py-20 md:flex-row-reverse flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Coexisting & Innovating
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
          The awkward relationship between modding and game-design is no more obvious than in Minecraft - because the codebase isn't great. Really though, what monolithic 10+-year gamedev
          project is clean? The imposition of such an iterative project is that you always have to be willing to rework an idea, no matter how much you love it. Manic Mechanics has gone through
          not one, not two, probably around five total facelifts and reevaluations due to unforseen limitations in the Minecraft engine - weird rendering quirks, data storage issues, worldgen access.
          The process of reconfiguring your ideas to suit problems you can't forsee is kind-of fun. It creates a balance of defensive and aggressive design, which I think is the best way
          to digest a monolithic codebase without getting fatigued or forgetting details. 
          <br /><br />
          More often than expected, it's a rendering issue. Creating entities made exclusively out of quads can be frustrating, but it is also liberating to have such a limited palette. Tricky technical
          limitations like single-texture-only mappings for animated models will require clever workarounds, re-engineering of the rendering stack, and a whole lot of trial-and-error. Even this wonky
          looking mob had to be reworked once - no animated textures meant that I could only convey the motion I wanted with animated parts, so it was rebuilt. 
          </p>
        
        </div>
        <div className="m">
          <img
            className="relative w-96 object-cover object-center rounded mr-0"
            alt="A screenshot of a modded Minecraft game, wherein the player is hitting an entity made up of concentric rings and a central crystalline hand"
            src="./manmech_rendering.png"
          />
        </div>
      </div>
    </div>
   </section>
 );
}
