import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <BeatLoader />
    </div>
  );
};

export default Loading;
