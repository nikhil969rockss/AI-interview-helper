import React from "react";

const Button = ({ type = "button", className, loading, children, icon }) => {
  return (
    <button
      className={`${className ? className : "px-4 py-2 transition-all duration-300  active:scale-[0.9] bg-[#67435f] rounded-md"} ${loading ? "cursor-not-allowed bg-[#67435f55]" : ""} flex items-center gap-2`}
      type={type}
      disabled={loading}
    >
      {icon}
      {loading ? "loading..." : children}
    </button>
  );
};

export default Button;
