"use client";

import React, { useEffect } from "react";

const Error = (props) => {
  useEffect(() => {
    console.log(props.error);
  }, [props.error]);
  return (
    <div className="text-center mt-10">
      <h2>Something went wrong</h2>
      <button className="hover:text-amber-600" onClick={()=> props.reset()}>Try again</button>
    </div>
  );
};

export default Error;
