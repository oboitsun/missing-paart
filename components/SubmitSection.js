import React from "react";

export default function SubmitSection() {
  return (
    <div className="bg-[#85AEC9] px-5 pt-12 pb-10 w-full">
      <div className=" max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full max-w-[480px] justify-self-start self-center">
          <p className="droid tracking-tighter text-[32px] lg:text-[46px] text-center lg:text-left leading-none lg:pb-5">
            <span className="text-white ">Your ticket</span> into the emerging NFT space
          </p>
          <p className="text-white pt-2 max-w-[450px]">
            Looking to learn more about the NFT space or to stay involved in all things
            related to The Missing Paart?
            <br className="hidden lg:block" />
            <span className="text-black font-bold">Sign up to our mailing list</span>
          </p>
        </div>
        <div className="pt-14 lg:pt-0 max-w-[360px] justify-self-end">
          <p className="text-[22px] droid tracking-tighter text-center">Who are you?</p>
          <form>
            <fieldset className="grid grid-cols-3 gap-3 pb-5">
              <div className="flex items-center justify-center">
                <input name="artist" value="artist" type="radio" />
                <label for="artist" className="font-bold ml-2">
                  Artist
                </label>
              </div>
              <div className="flex items-center justify-center">
                <input name="collector" value="collector" type="radio" />
                <label for="collector" className="font-bold ml-2">
                  Collector
                </label>
              </div>

              <div className="flex items-center justify-center">
                <input name="investor" value="investor" type="radio" />
                <label for="investor" className="font-bold ml-1.5">
                  Investor
                </label>
              </div>
            </fieldset>
            <input
              placeholder="Your name"
              className="px-5 border-b-2 border-b-black w-full h-12 mb-2 placeholder-black font-bold"
            />
            <input
              placeholder="Your email"
              className="px-5 border-b-2 border-b-black w-full h-12 mb-2 placeholder-black font-bold"
            />
            <button className="bg-black h-12 w-full text-white flex items-center justify-center droid">
              <span className="tracking-tighter"> Submit</span>
              <img className="ml-2 h-4" src="/assets/arrow.svg" alt="submit" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
