import React from "react";

export default function Heading({ align = "text-center", addClasses, children }) {
  return (
    <p
      className={`text text-[40px] tracking-[-2.4px] lg:text-[46px] lg:tracking-tight leading-none droid ${addClasses}  ${align}`}
    >
      {children}
    </p>
  );
}
