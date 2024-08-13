"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { TitleComponent } from "../ui";

export const HeaderSection = () => {
   const data = [
      "Mythic Codex — James Onterio - 7.26 —",
      "Mythic Codex — Paul Rodrick - 7.26 —",
      "Mythic Codex — Smith Rawson - 7.26 —",
      "Mythic Codex — Jake Paul - 7.26 —",
      "Mythic Codex — Mike Tyson - 7.26 —",
      "Mythic Codex — Ryan Garcia - 7.26 —",
      "Mythic Codex — Khabib N. - 7.26 —",
      "Mythic Codex — Justin P. - 7.26 —",
   ];

   return (
      <div className="">
         <div className="flex justify-center">
            <p className="md:pt-16 text-[3rem] md:text-[6.2rem] font-bold text-customDark">
               Awwwards
            </p>
            {/* <TitleComponent
               title="Lucky Pius"
               avatar="https://github.com/shadcn.png"
               className="rounded-full border-2 border-white"
            /> */}
         </div>

         <div className="mb-[66px]">
            <Marquee speed={30} gradient={false} pauseOnHover>
               {data.map((info, index) => {
                  return <p key={index}>{info}</p>;
               })}
            </Marquee>
         </div>
      </div>
   );
};
