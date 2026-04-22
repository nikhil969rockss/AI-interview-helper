import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  const [loadingMessage, setLoadingMessage] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoadingMessage(true);
    }, 1000 * 5);
    return () => clearTimeout(timerId);
  }, [loadingMessage]);

  return (
    <main className="flex-center min-h-screen w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <AiOutlineLoading3Quarters className="animate-spin text-7xl" />{" "}
        <h1 className="animate-pulse text-2xl">Loading...</h1>
        {loadingMessage && (
          <p className="max-w-md text-center text-sm">
            The site is on deploy on render. which is slow at inital load kindly
            please wait for a minute or so to load , Thank you for your paitence
            ☺️
          </p>
        )}
      </div>
    </main>
  );
};

export default Loading;
