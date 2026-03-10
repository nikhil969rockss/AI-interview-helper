import React from "react";
import { useState } from "react";
import Badge from "./Badge";
import { IoIosArrowUp } from "react-icons/io";

const Accordian = ({ question, intention, answer, q_no }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden rounded-lg border-[0.8px] border-gray-800 bg-[#38194a] shadow-xs shadow-gray-600">
      <div
        onClick={() => setOpen(!open)}
        className="question relative z-2 flex cursor-pointer items-center justify-between border-b border-gray-600 p-2"
      >
        <div className="question flex items-center gap-2">
          <Badge className={"bg-orange-950 text-orange-400"}>Q{q_no}</Badge>
          <h2 className="font-semibold text-[#d6d0d0] select-none">
            {question}
          </h2>
        </div>
        <div className="cursor-pointer p-3" onClick={() => setOpen(!open)}>
          {/* {open ? <IoIosArrowDown /> : <IoIosArrowUp />} */}
          {
            <IoIosArrowUp
              className={`${open ? "rotate-180" : ""} transition-all duration-500`}
            />
          }
        </div>
      </div>

      <div
        className={`answer ${open ? "max-h-100 transition-all duration-500" : "max-h-0 transition-all duration-500"} `}
      >
        <div className="flex flex-col items-start gap-4 p-3">
          <div className="flex flex-col items-start gap-1">
            <Badge className={"bg-blue-950 text-blue-400"}>INTENTION</Badge>
            <p className="text-sm text-gray-400">{intention}</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Badge className={"bg-green-950 text-green-400"}>
              MODEL ANSWER
            </Badge>
            <p className="text-sm text-gray-400">{answer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordian;
