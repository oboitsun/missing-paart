import React from "react";

export default function SubmitForm() {
  return (
    <div className="pt-14 lg:pt-0 lg:max-w-[360px] justify-self-end w-full">
      <p className="text-[22px] droid tracking-tighter text-center">Who are you?</p>
      <form>
        <fieldset className="grid grid-cols-3 gap-3 pb-5">
          <div className="flex items-center justify-center">
            <input name="artist" value="artist" type="radio" />
            <label htmlFor="artist" className="font-bold ml-2">
              Artist
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input name="collector" value="collector" type="radio" />
            <label htmlFor="collector" className="font-bold ml-2">
              Collector
            </label>
          </div>

          <div className="flex items-center justify-center">
            <input name="investor" value="investor" type="radio" />
            <label htmlFor="investor" className="font-bold ml-1.5">
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
  );
}
