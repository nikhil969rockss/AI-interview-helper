import React from "react";

const Button = ({ type = "button", className,loading, children }) => {
  return (
    <button
      className={`${className ? className : "px-4 py-2 transition-all duration-300  active:scale-[0.9] bg-[#67435f] rounded-md"} ${loading ? "cursor-not-allowed bg-[#67435f55]" : ""} `}
      type={type}
      disabled={loading}
    >
      {loading ? "loading...":children}
    </button>
  );
};

export default Button;
