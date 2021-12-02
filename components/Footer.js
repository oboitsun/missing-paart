import React from "react";
import Logo from "./Logo";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full bg-myBlack py-9 pb-14 flex flex-col items-center gap-4">
      <div className="w-40 invert flex justify-center">
        <Logo />
      </div>
      <a className="opacity-40 text-white" href="mailto:info@paart.com">
        info@paart.com
      </a>
      <Link href="https://instagram.com">
        <a className="w-10 h-10 p-1 border border-white flex justify-center items-center">
          <img className="" src="/assets/insta.svg" alt="instagram" />
        </a>
      </Link>
    </div>
  );
}
