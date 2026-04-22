import React from "react";

const Footer = () => {
  return (
    <footer className="mt-xl w-full border-t border-white/5 bg-[#020617] py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">
        <div>
          <span className="font-bold text-slate-200">InterviewAI</span>
          <p className="mt-2 text-sm text-slate-500">
            © 2024 InterviewAI. All rights reserved. Powered by Advanced LLMs.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-sm text-slate-500 transition-colors hover:text-fuchsia-400"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-sm text-slate-500 transition-colors hover:text-fuchsia-400"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-sm text-slate-500 transition-colors hover:text-fuchsia-400"
            href="#"
          >
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
