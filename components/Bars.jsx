"use client";
import { MdOutlineDoneOutline } from "react-icons/md";
import { ImHappy } from "react-icons/im";
import { BiLogoVisa } from "react-icons/bi";
import { DiAptana } from "react-icons/di";
import ProgressBar from "@ramonak/react-progress-bar";

import { useState, useEffect } from "react";

const Bars = ({ percentage1 = 80, percentage2 = 90, percentage3 = 98 }) => {
  const [progress, setProgress] = useState(percentage1);
  const [progress2, setProgress2] = useState(percentage2);
  const [progress3, setProgress3] = useState(percentage3);

  useEffect(() => {
    setProgress(percentage1);
  }, [percentage1]);

  useEffect(() => {
    setProgress(percentage2);
  }, [percentage2]);

  useEffect(() => {
    setProgress(percentage3);
  }, [percentage3]);

  return (
    <div
      className="flex flex-col
     justify-center items-center w-full h-[300px] mb-4"
    >
      <div className="">
        <DiAptana size={60} style={{ color: "#A6A11C" }} />
      </div>
      <div>
        <h1>Hello</h1>
        <div className="flex gap-3">
          <ProgressBar
            completed={progress}
            height="20px"
            animateOnRender
            bgColor="#686745"
            className="w-96"
          />
          <MdOutlineDoneOutline size={25} className="" />
        </div>
      </div>
      <div>
        <h1>Hello</h1>
        <div className="flex gap-3">
          <ProgressBar
            completed={progress2}
            animateOnRender
            bgColor="#AA4E41"
            className="w-96"
          />
          <ImHappy size={25} className="" />
        </div>
      </div>
      <div>
        <h1>Hello</h1>
        <div className="flex gap-3">
          <ProgressBar
            completed={progress3}
            animateOnRender
            bgColor="#0000FF"
            className="w-96"
          />
          <BiLogoVisa size={30} className="" />
        </div>
      </div>
    </div>
  );
};

export default Bars;
