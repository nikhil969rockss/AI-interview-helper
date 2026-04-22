import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-px flex-1 bg-white/10"></div>
      <span className="text-xs text-slate-500">OR</span>
      <div className="h-px flex-1 bg-white/10"></div>
    </div>
  );
};

export default Divider;
