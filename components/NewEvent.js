import React from "react";

export default function NewEvent() {
  return (
    <div className="w-full">
      <div className=" lg:hidden w-full bg-myBlack p-1  text-white">
        <div className="flex items-center ">
          <div className="max-w-max  h-full px-5 text-white bg-myBlue flex items-center uppercase text-10 font-medium">
            Upcoming event
          </div>
          <div className="flex items-center ml-5 mr-auto  text-10">
            <img className="filter invert mx-2" src="/assets/date.svg" alt="date" />
            <p className="font-medium">
              DEC <span className="font-medium mx-1">|</span> 2 - 4
            </p>
          </div>
        </div>
        <div className="droid text-sm leading-none text-white pt-1 pb-1.5">
          Come meet us at Art Basel Miami Beach
        </div>
      </div>

      <div className=" hidden lg:flex w-full bg-myBlack p-1 flex-col  items-center lg:flex-row lg:p-0  h-full  max-w-[1200px] mx-auto lg:h-[60px] text-white">
        <div className=" h-full px-5 text-white bg-myBlue flex items-center uppercase text-sm font-medium">
          Upcoming event
        </div>
        <div className="droid text-2xl leading-none text-white ml-3 ">
          Come meet us at Art Basel Miami Beach
        </div>
        <div className="flex items-center ml-5 mr-auto  text-sm">
          <img className="filter invert mx-2" src="/assets/date.svg" alt="date" />
          <p className="font-medium">
            DEC <span className="font-medium mx-1">|</span> 2 - 4
          </p>
        </div>
        <div className="h-full pr-2.5 py-2.5">
          <button className="border-white border max-w-max h-full flex items-center droid tracking-tighter px-6">
            More details
          </button>
        </div>
      </div>
    </div>
  );
}

{
}

{
  /* <div className="flex  font-bold text-white text-10 leading-none h-full">
<div className="p-1 px-1.5 lg:p-0 bg-myBlue max-w-max uppercase h-full  w-10 flex-shrink-0"></div>
<img className="filter invert mx-2" src="/assets/date.svg" alt="date" />
<p className="font-medium">
  DEC <span className="font-medium mx-1">|</span> 2-4
</p>
</div>
<div className="droid font-bold text-sm text-white mt-2 mb-1 lg:m-0 h-full">
Come meet us at Art Basel Miami Beach
</div>{" "}
<div className=""></div> */
}
