import React, { useState } from "react";

export default function SubmitForm() {
  const [who, setWho] = useState("artist");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="pt-14 lg:pt-0 lg:max-w-[360px] justify-self-end w-full">
      <p className="text-[22px] droid tracking-tighter text-center">Who are you?</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`who: ${who}\nname: ${name}\nemail: ${email}`);
        }}
      >
        <fieldset className="grid grid-cols-3 gap-3 pb-5">
          <div className="flex items-center justify-center">
            <input
              onClick={(e) => {
                setWho(e.target.value);
              }}
              checked={who === "artist"}
              name="artist"
              value="artist"
              type="radio"
            />
            <label
              onClick={() => setWho("artist")}
              htmlFor="artist"
              className="font-bold ml-2 cursor-pointer"
            >
              Artist
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              onClick={(e) => {
                setWho(e.target.value);
              }}
              checked={who === "collector"}
              name="collector"
              value="collector"
              type="radio"
            />
            <label
              onClick={() => setWho("collector")}
              htmlFor="collector"
              className="font-bold ml-2 cursor-pointer"
            >
              Collector
            </label>
          </div>

          <div className="flex items-center justify-center">
            <input
              onClick={(e) => {
                setWho(e.target.value);
              }}
              checked={who === "investor"}
              name="investor"
              value="investor"
              type="radio"
            />
            <label
              onClick={() => setWho("investor")}
              htmlFor="investor"
              className="font-bold ml-1.5 cursor-pointer"
            >
              Investor
            </label>
          </div>
        </fieldset>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          type="text"
          placeholder="Your name"
          className="px-5 border-b-2 border-b-black w-full h-12 mb-2 placeholder-black font-bold"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          type="email"
          placeholder="Your email"
          className="px-5 border-b-2 border-b-black w-full h-12 mb-2 placeholder-black font-bold"
        />
        <button
          type="submit"
          className="bg-black h-12 w-full text-white flex items-center justify-center droid"
        >
          <span className="tracking-tighter"> Submit</span>
          <img className="ml-2 h-4" src="/assets/arrow.svg" alt="submit" />
        </button>
      </form>
    </div>
  );
}
