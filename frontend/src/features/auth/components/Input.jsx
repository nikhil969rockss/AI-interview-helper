import React from "react";

const Input = ({ lable, id, inputType = "text", ...rest }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <label className="font-semibold text-sm" htmlFor={id}>
        {lable}
      </label>
      <input
        className="outline-none border px-4 py-2 border-gray-600/20 rounded-md focus:border-[#67435f]/80 transition-all duration-400"
        type={inputType}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
