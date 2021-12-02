import React from "react";

export default function MeetArtistsTab() {
  const artists = [
    {
      name: "Justin Aversano",
      website: "https://somesite.com",
      insta: "https://instagram.com",
      about:
        "Justin Aversano is an artist and curator working within the New York City and Los Angeles art scene. He has organized a number of shows in NYC and LA, as well as public art exhibitions around the country.",
    },
    {
      name: "Benzi",
      website: "https://somesite.com",
      insta: "https://instagram.com",
      about:
        "In their whole, Kirell’s creations can be articulated and deciphered following an array of tones, shapes, dots, and lines staged according to the nature of the data.",
    },
    {
      name: "WhisBy",
      website: "https://somesite.com",
      insta: "https://instagram.com",
      about:
        "Contemporary artist WhIsBe has established a formidable reputation in both the renegade world of street art but also the mainstream art world encompassing the museum, gallery and arena of public installations.",
    },
  ];
  return (
    <div className="mt-9">
      {artists.map((art, i) => (
        <div key={i} className="mb-10">
          <div className="flex w-full justify-between">
            <p className="font-bold">{art.name}</p>
            <div className="flex items-center gap-2">
              {art?.website && (
                <a className="text-xs underline font-bold" href={art.website}>
                  Website
                </a>
              )}
              {art?.insta && (
                <a href={art.insta} className="w-4">
                  <img
                    className="filter invert"
                    src="/assets/insta.svg"
                    alt="Artist instagram"
                  />
                </a>
              )}
            </div>
          </div>

          <div className="my-2 h-px w-full bg-[#E6E6E6]"></div>

          <p className="text-sm">{art.about}</p>
        </div>
      ))}
    </div>
  );
}
