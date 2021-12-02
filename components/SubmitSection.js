import React from "react";
import SubmitForm from "./SubmitForm";

export default function SubmitSection() {
  return (
    <div className="bg-[#85AEC9] px-5 pt-12 pb-10 w-full">
      <div className=" max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full lg:max-w-[480px] justify-self-start self-center">
          <p className="droid tracking-tighter text-[32px] lg:text-[46px] text-center lg:text-left leading-none lg:pb-5">
            <span className="text-white ">Your ticket</span> into the emerging NFT space
          </p>
          <p className="text-white pt-2 lg:max-w-[450px]">
            Looking to learn more about the NFT space or to stay involved in all things
            related to The Missing Paart?
            <br className="hidden lg:block" />
            <span className="text-black font-bold">Sign up to our mailing list</span>
          </p>
        </div>
        <SubmitForm />
      </div>
    </div>
  );
}
