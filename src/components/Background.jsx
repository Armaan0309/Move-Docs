import React from "react";
import Foreground from "./Foreground";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="w-full py-10 flex justify-center text-zinc-200 text-2xl font-bold">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] leading-none tracking-normal font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
