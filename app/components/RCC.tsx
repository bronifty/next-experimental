"use client";
import React from "react";

const RCC = ({ children }) => {
  console.log("RCC");

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* <div>title passed to Client Child: {props.title}</div> */}
        {children}
      </React.Suspense>
    </>
  );
};

export default RCC;
