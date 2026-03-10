import React from "react";

const Input = ({ lable, id, inputType = "text", ...rest }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold" htmlFor={id}>
        {lable}
      </label>
      <input
        className="rounded-md border border-gray-600/20 bg-white/95 px-4 py-2 text-black transition-all duration-400 outline-none focus:ring-4 focus:ring-green-500"
        type={inputType}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
