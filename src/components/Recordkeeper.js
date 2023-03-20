// src/components/Recordkeeper.js

import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export default function Recordkeeper() {
  return (
   <section id="Recordkeeper">
    <a href = "/">
        <ChevronDoubleLeftIcon className="fixed w-16 mt-2 ml-4" />
    </a>
    <div className="container mx-auto align-items-center">
        <img
          className="block mx-auto lg:py-16 lg:px-40 py-4 px-4 object-cover object-center"
          alt="hero"
          src="./recordkeeper_banner.png"
        />
        <p className="lg:mb-8 leading-relaxed lg:px-60 px-4 py-4 text-center">
            Character creation and data serialization - Recordkeeper is a bot for the Discord messaging platform, employing a precisely-tuned SQLite database to maintain
            characters, abilities, stories and more for a variety of TTRPG systems. Everything from the character you play to the places you take them can be stored, archived, and referenced for a smooth experience.
            Waste less time bookkeeping, spend more time dungeoneering!
          </p>
      <div className="container mx-auto flex lg:px-40 lg:py-20 px-4 py-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Multi-User Madness
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Recordkeeper doesn't just need to store information for each user - it needs to store information for all of their characters. Sure, I could limit each player to one character at a time,
            but what's the fun in that? Instead, I designed a system of persistence, permitting any number of characters (at admin discretion) for each user, with a simple system to set and unset active characters
            at game-time. Using Discord's quite-helpful User ID system, it's trivial to tie Character entries to their owner and look them up whenever necessary, without any real input from the player's end.
            Keeping things intuitive is nice and straightforward, with Discord's API doing much of the logical heavy-lifting.
            <br></br><br></br>
            The character system is a baseline for loads of other fun side content and novelties. The bot can record big moments and valuable loot, enscribing the finder's name into a permanent entry.
            It can buy, sell and examine items for individual characters, and even store some state about how trustworthy or responsible the character in question is. It can streamline gameplay by storing
            stats and helping with rolls or abilities, too! In the worst circumstances, it can even memorialize a character after their death, and help the player sort out inheritance. With simple systems comes great extendability.
          </p>
        
        </div>
        <div className="mr-0">
          <img
            className="w-96 object-cover object-center rounded"
            alt="hero"
            src="./recordkeeper_characters.png"
          />
        </div>
      </div>


      <div className="container mx-auto flex lg:px-40 lg:py-20 px-4 py-4 md:flex-row-reverse flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            In a Post-Pathfinder World
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            It isn't 1974, and so you've got plenty more options than just D&D for TTRPG antics. That means different rules, different stats, and different character structures.
            Luckily, Recordkeeper is built with modularity in mind. The "system" component of a character is a separate part of the logic and database, allowing admins to specify rulesets
            like Pathfinder, D&D and Cyberpunk for individual characters or entire groups. That means that a 'character' is all the fluff like name, bio and physical characteristics, and the stats
            are a configurable jigsaw piece that can be swapped out and altered whenever. One character can even be adapted to another system, if the player wills it.
            <br></br><br></br>
            Currently, I'm working away at a system that simplifies the process of creating a custom ruleset, permitting any server admin or even player to give Recordkeeper
            custom instructions for character creation and simulation. Eventually, I'd like to integrate them all into a public library that the bot can access, allowing people to share
            and utilize any number of rulesets, be they homebrew or classic.
          </p>
        
        </div>
        <div className="m">
          <img
            className="w-96 object-cover object-center rounded"
            alt="hero"
            src="./recordkeeper_stats.png"
          />
        </div>
      </div>
    </div>
   </section>
 ); //IMG ATTRIBUTIONS: Stats -> https://mykindofmeeple.com/how-to-roll-stats-in-dnd-pros-cons/
}
