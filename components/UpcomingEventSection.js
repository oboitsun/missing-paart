import React from "react";
import EventsSilder from "./EventsSilder";
import Heading from "./Heading";

export default function UpcomingEventSection() {
  return (
    <div className="flex flex-col items-center w-full  px-2.5 xl:px-0 pb-10 max-w-[1200px] mx-auto">
      <Heading>Upcoming Events</Heading>
      {/* <div className="lg:hidden relative w-full mb-5  mt-14 h-10 flex justify-between items-center">
        <div
          onClick={() => {}}
          id="swiper-prev"
          className="w-10 h-full bg-black flex justify-center items-center"
        >
          <img className="rotate-180" src="/assets/arrow.svg" alt="previous slide" />
        </div>
        <div className="min-w-max mx-auto font-bold">DEC ︱ 2 - 4︱2021</div>
        <div
          id="swiper-next"
          className="w-10 h-full bg-black flex justify-center items-center"
        >
          <img src="/assets/arrow.svg" alt="previous slide" />
        </div>
      </div> */}
      <div className="w-full relative overflow-hidden bg-white slider-shadow border border-gray-300 p-2.5 pt-4 mt-10 lg:p-0 lg:mt-14">
        <EventsSilder />
      </div>
      {/* <div className="hidden relative w-full mb-5  mt-8 h-10 lg:flex justify-center gap-20 items-center">
        <div id="swiper-prev" className="flex items-center gap-5 h-full cursor-pointer">
          <div
            onClick={() => {}}
            className="w-10 h-full bg-black flex justify-center items-center"
          >
            <img className="rotate-180" src="/assets/arrow.svg" alt="previous slide" />
          </div>
          <p className="droid tracking-tighter">Previous</p>
        </div>
        <div id="swiper-next" className="flex items-center gap-5 h-full cursor-pointer">
          <p className="droid tracking-tighter">Next event</p>
          <div className="w-10 h-full bg-black flex justify-center items-center">
            <img src="/assets/arrow.svg" alt="previous slide" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
