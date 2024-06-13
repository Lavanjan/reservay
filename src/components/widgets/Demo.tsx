import React from "react";
import { DemoProps } from "~/shared/types";

const Demo = ({ title, href }: DemoProps) => {
  return (
    <div className="relative text-center max-w-8xl h-screen bg-center pb-20">
      <div className="h-20 text-4xl mt-10 font-bold font-heading justify-self-center">
        {title}
      </div>
      <div className="flex justify-center items-center h-5/6 pb-10 pt-10  pr-1/12  w-4/5 sm:w-8/12 mx-auto">
        <iframe
          className="absolute   w-11/12 h-4/5 "
          src={href}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Demo;
