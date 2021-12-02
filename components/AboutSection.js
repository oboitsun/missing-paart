import React from "react";
import Image from "next/image";
import Heading from "./Heading";

export default function AboutSection() {
  return (
    <div className="flex flex-col lg:flex-row mb-14 max-w-[1200px] items-center mx-auto lg:px-2.5 xl:px-0 lg:gap-10 xl:mb-20">
      <div className="w-full lg:w-[55%]">
        <Image
          layout="intrinsic"
          width={1280}
          height={1500}
          className=""
          src="/assets/showroom-pic.jpg"
        />
      </div>
      <div className="px-5 lg:px-0 mt-9  lg:w-[45%]">
        <Heading align="text-left">
          {`Events & Galleries centered around NFT artists`}
        </Heading>
        <p className="text-myGray mt-5">
          The Missing Paart aims to educate art lovers on the emerging NFT market and
          ecosystem. Our events and galleries are a means of encouraging collaborations
          between digital creators and building a community around this growing medium.
          Our focus is on education and creating a launchpad for budding NFT artists
          across the world.
        </p>
      </div>
    </div>
  );
}
