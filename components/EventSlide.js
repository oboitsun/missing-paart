import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import ScheduleTab from "./ScheduleTab";
import MeetArtistsTab from "./MeetArtistsTab";
export default function EventSlide() {
  const tabsNames = ["Event Overview", "Schedule", "Meet the artists"];
  const tabs = {
    0: <OverviewTab />,
    1: <ScheduleTab />,
    2: <MeetArtistsTab />,
  };
  const [currentTab, setCurrentTab] = useState(0);
  const [dir, setDirection] = useState("toRight");
  const handleChooseTab = (i) => {
    if (i < currentTab) {
      setDirection("toRight");
    } else if (i > currentTab) {
      setDirection("toLeft");
    }
    setCurrentTab(i);
  };
  return (
    <div className="lg:grid lg:grid-cols-2 w-full gap-3 lg:gap-10 lg:max-h-[676px] h-full">
      <p className="lg:hidden droid text-center tracking-tighter text-[22px] leading-none pb-3">
        Art Basel Miami Beach
      </p>
      <div className="  w-full relative lg col-start-2 lg:row-start-1  h-full">
        <img
          className="absolute w-1/6 h-auto bottom-2.5 right-2.5"
          src="/assets/art-basel.png"
          alt="art-basel"
        />
        <img
          className="lg:hidden w-full object-cover"
          src="/assets/slide-pic.jpg"
          alt="slide "
        />
        <img
          className="hidden lg:block w-full h-full object-cover"
          src="/assets/slide-pic-desk.jpg"
          alt="slide "
        />
      </div>
      <div className="w-full lg:col-start-1 lg:row-start-1 lg:pl-16 pt-16 pb-5 max-h-[676px]  flex flex-col">
        <p className="hidden lg:block text-lg font-bold pb-2.5 flex-shrink-0">
          DEC | 2 - 4 | 2021{" "}
        </p>
        <p className="hidden lg:block droid  tracking-tighter text-[40px] leading-none pb-3 flex-shrink-0">
          Art Basel Miami Beach
        </p>
        <div className="EventSlide__tabs ">
          {tabsNames.map((tab, i) => (
            <button
              onClick={() => {
                handleChooseTab(i);
              }}
              key={i}
              className={`tab ${i === currentTab ? `active ${dir}` : ""} ${dir}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="HeroSectionTabs__currentTab  overflow-y-auto  h-[calc(100%-8px)] my-2">
          {tabs[currentTab]}
        </div>
      </div>
    </div>
  );
}
