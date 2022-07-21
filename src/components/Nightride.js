// src/components/Nightride.js

import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export default function Nightride() {
  return (
   <section id="nightride">
    <a href = "/">
      <ChevronDoubleLeftIcon className="absolute w-16 mt-4 ml-4" />
    </a>
    <div className="container mx-auto align-items-center">
        <img
          className="block mx-auto py-16 px-40 object-cover object-center"
          alt="hero"
          src="./project_nightride_banner.png"
        />
        <p className="mb-8 leading-relaxed px-60 text-center">
            Vehicle repair and navigational despair - what makes up a good open-world adventure game? In Project Nightride, you're lost in an expansive rendition
            of the South Dakotan badlands - enshrouded in perpetual dark and aided only by the tools you can find. Meet some strangers, collect some stories,
            but beware the dark - you never really know what's out there...
          </p>
      <div className="container mx-auto flex px-40 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Seamless Experiences
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            The truth of open world development is that a whole lot of work is gonna go into tricking the player's senses into thinking the world around them is complete.
            Occlusion, LOD-building, region chunks and model groups are some of the methods I used to keep it all running smoothly under most reasonable circumstances.
            That means that any time you build a new environmental object, you have to consider several factors: does it look right when broken down at lower LODs? What angles 
            is the object fully occluded from? Are there parts of it that are completely hidden, and can be partially unloaded? It's an in-depth process.
            <br /><br />
            Project Nightride's specific outline brought both upsides and downsides to the conversation. The whole game takes place at night, which means loads of stuff can be essentially
            untextured and silhouetted at sufficient distance, and many things can stay vague and sort-of formless for longer than they would in a daytime scene. Unfortunately, the regional
            data that I used for the map is a lot of flat, open space surrounded by cages of sharp hills. That means that there isn't a lot of opportunity to cull things hidden from the player's view, 
            since just about everything is "in view" in the central portions of the map. I've been building locations around this idea - tall and simple walls to hide the complex interior areas,
            patchy and cheap-to-render foliage that blocks the heavy-hitting geometry, and simple shapes that can be broken down easily from long-distance while retaining their core forms.
            It's all in how you approach design - keep your limitations in mind, and it'll work out.
          </p>
        
        </div>
        <div className="mr-0">
          <img
            className="w-96 object-cover object-center rounded"
            alt="hero"
            src="./nightride_terrain1.png"
          />
        </div>
      </div>


      <div className="container mx-auto flex px-40 py-20 md:flex-row-reverse flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Worldbuilding
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Project Nightride's map is built on a heightmap of the real South Dakotan Badlands National Park. The jagged, harsh region is ideal for this sort of barren roadtrip
            adventure, with large stretches of flat land surrounded by imposing cliffs and far-off landmarks. The process of painting and preserving this map, deciding how to position
            landmarks, and how it all relates to the player's ability to navigate is perhaps the most involving part of the project.
            <br /><br />
            I partly mimicked real life roadways as a baseline, but I have added several networks myself that weave through interesting terrain and pose some novel navigational challenges for the player.
            Due to the nature of the game's perpetual darkness, the player's "effective range" from their car (and primary light source) dictates how to place both roads and the important objects
            near them. Making sure things load properly as the player approaches, from logical controllers like event boundaries to higher-LOD meshes for buildings, is a tricky balance of testing
            camera angles and just trying stuff out. It's not quite as technical as other projects at a mechanical level, but it's good mental exercise, and quite creatively fulfilling!
        </p>
        </div>
        <div className="m">
          <img
            className="w-96 object-cover object-center rounded"
            alt="hero"
            src="./nightride_map.png"
          />
        </div>
      </div>
    </div>
   </section>
 );
}
