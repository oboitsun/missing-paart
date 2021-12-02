import React from "react";
import Heading from "./Heading";
import Logo from "./Logo";
import Image from "next/image";
import NewEvent from "./NewEvent";

export default function HeroSection() {
  return (
    <div className="px-2.5 flex flex-col items-center pt-12 pb-10 w-full xl:pb-20">
      <Logo />
      <Heading addClasses="pt-5 pb-8 lg:py-10">
        Digital gallieries <br className="lg:hidden" /> in physical spaces
      </Heading>
      <div className="w-full pb-[56.25%] lg:pb-[25%] 2xl:pb-[36%]  relative max-h-[690px] overflow-hidden mb-2.5">
        <Image
          layout="fill"
          //   width={1890}
          //   height={690}
          objectFit="cover"
          className="w-full h-full object-cover top-0 left-0 absolute"
          src="/assets/main-bg.jpg"
          alt="main"
        />
        {/* <video
          autoPlay={true}
          loop={true}
          muted={true}
          src="/assets/video.mp4"
          className="w-full h-full top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
          alt="video"
        /> */}
      </div>
      <NewEvent />
    </div>
  );
}
