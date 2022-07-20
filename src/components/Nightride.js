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
            maybe even do a little exploring. No promises you'll like what you find out there, though...
          </p>
      <div className="container mx-auto flex px-40 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            The factory must grow...
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            As a human being born after the turn of the century, Minecraft was a pretty influential part of my childhood. Over the years, I've been poking my head into 
            the modding scene and trying it out - and here's the result. The Industrizer inherits a lot of DNA from the "tech mod" standard that has shaped Minecraft's community content since
            the early days - with a focus on resource management, logistic puzzles, and endless automation, it's a real brainscratcher. On the implementation side, it certainly forced me to 
            keep my code clean - both to cooperate with an existing codebase, and to stay compliant and compatible with the thousands of other mods out there.
            <br /><br />
            It's all made using Minecraft Forge, a powerful community-built API that uses official mappings of the Minecraft source code and loads of helpful functions
            to standardize the process of Minecraft mod development. As a community project, documentation and consistent guides are rare, so a lot of my learning happens in
            public GitHub repositories for other Forge mods. A lot of my code-interpreting capability comes from this project.
          </p>
        
        </div>
        <div className="mr-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./render-wraparound-ew.png"
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
          When working with such an elaborate pre-existing codebase, a lot of fun ideas get roadblocked by architectural issues. I find that focusing on very 
            system-agnostic design, where I try to see a problem as a set of basic programmatic parts with fundamental and simple solutions, helps me translate very ambitious concepts
            into realistic goals.
            <br /><br />
            Take this tricky item for example. In normal Minecraft, blocks are a fairly 1:1 deal - one thing in one space. I wanted to fit multiple "tubes" for transporting stuff
            into one block of space, so I had to get clever. You can give a block different models based on its "blockstate" by defining the conditions for the change, but in this case,
            that'd mean one state file for each configuration. This block can store six different tubes, each with the ability to connect in six directions. In short, that'd sum up to a nice
            2^40 files. That's 1,099,511,627,776 files generated on startup - not terribly performant. I had to go deeper.
            <br /><br />
            I knew of another mod that'd done something similar, so I peeked at their code. Turns out, there was another route to model rendering - I could build the model
            on-demand using OpenGL and some provided helper functions. So long as I only rebuilt the model when necessary, that reduces the work down to a solid 1-at-a-time structure. Here's the result - 
            quite spatially efficient, if I say so myself.
          </p>
        
        </div>
        <div className="m">
          <img
            className="relative object-cover object-center rounded mr-0"
            alt="hero"
            src="./render-wraparound-ew.png"
          />
        </div>
      </div>
    </div>
   </section>
 );
}
