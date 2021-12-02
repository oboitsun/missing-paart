import React from "react";
import Link from "next/link";
export default function ScheduleTab() {
  const schedule = [
    {
      date: "December 2",
      time: "5pm",
      brief: (
        <p className="">
          Cocktails and panel discussion on the future of NFTs with{" "}
          <Link href="https://somewhere.com">
            <a className="text-[#5050FF] underline font-bold"> Justin Aversano</a>
          </Link>{" "}
          ,{" "}
          <Link href="https://somewhere.com">
            <a className="text-[#5050FF] underline font-bold"> WhIsBy</a>
          </Link>
          , and{" "}
          <Link href="https://somewhere.com">
            <a className="text-[#5050FF] underline font-bold"> Benzi</a>
          </Link>
        </p>
      ),
    },
    {
      date: "December 3",
      time: "6pm",
      brief: <p className="">Silent auction for the art pieces on display</p>,
    },
    {
      date: "December 4",
      time: "7pm",
      brief: <p className="">General networking and cocktail party</p>,
    },
  ];
  return (
    <div className="mt-8">
      {schedule.map((s, i) => (
        <div key={i} className="">
          <div className="flex items-center font-bold mb-2">
            <img src="/assets/date.svg" alt="event date" />
            <span className="ml-2">{s.date}</span>
          </div>
          <div className="flex items-center font-bold mb-3">
            <img src="/assets/time.svg" alt="event date" />
            <span className="ml-2">{s.time}</span>
          </div>
          {s.brief}
          {i < schedule.length - 1 && (
            <div className="my-3 h-px w-full bg-[#E6E6E6]"></div>
          )}
        </div>
      ))}
    </div>
  );
}
