import React from "react";

const InterviewLoading = () => {
  return (
    <main className="container mx-auto mt-10 grid min-h-[90vh] grid-cols-10 rounded-lg border border-gray-800 shadow-xs shadow-gray-800">
      <aside className="left-sidebar col-span-2 border-r border-gray-800 p-6 text-gray-400">
        <div className="flex w-full animate-pulse flex-col gap-4">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <div
                key={i}
                className="h-4 w-full animate-pulse rounded-md bg-gray-700 p-3"
              ></div>
            );
          })}
        </div>
      </aside>
      <section className="col-span-6 p-6">
        <div className="flex-center h-full w-full animate-pulse rounded-lg bg-gray-700">
          Generating Content please wait...
        </div>
      </section>
      <aside className="col-span-2 flex flex-col items-center gap-4 border-l border-gray-800 p-6">
        <div className="h-4 w-full animate-pulse rounded-md bg-gray-700 p-3"></div>
        <div className="size-28 animate-pulse rounded-full bg-gray-700"></div>
        <div className="h-4 w-full animate-pulse rounded-md bg-gray-700 p-3"></div>
        <div className="h-4 w-full animate-pulse rounded-md bg-gray-700 p-3"></div>
        <div className="h-4 w-full animate-pulse rounded-md bg-gray-700 p-3"></div>
      </aside>
    </main>
  );
};

export default InterviewLoading;
