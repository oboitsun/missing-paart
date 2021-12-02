import React from "react";

export default function OverviewTab({ brief, date }) {
  return (
    <div className="mt-5">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet
        lacinia sapien, et scelerisque lorem volutpat at. Mauris et ullamcorper orci
      </p>
      <div className="flex flex-col gap-2 py-3">
        <div className="flex items-center font-bold">
          <img src="/assets/date.svg" alt="event date" />
          <span className="ml-2">December 2 - 4</span>
        </div>
        <div className="flex items-center font-bold">
          <img src="/assets/time.svg" alt="event date" />
          <span className="ml-2">9am - 5pm</span>
        </div>
        <div className="flex items-center font-bold">
          <img src="/assets/location.svg" alt="event date" />
          <span className="ml-2">380 NW 24th Street, Miami, FL, 33127</span>
        </div>
      </div>
      <p className="font-medium">
        {" "}
        In collaboration with{" "}
        <a className="text-[#5050FF] underline font-bold" href="/">
          SaveArtSpace
        </a>
      </p>
      <img className="my-5 w-20" src="/assets/sas.png" alt="Save Art Space" />
      <button className="droid text-white tracking-tighter text-xl py-3 lg:py-4 border border-black w-full bg-black hover:text-black hover:bg-white transition-all">
        Get tickets
      </button>
    </div>
  );
}
