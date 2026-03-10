import {
  BEHAVIORAL_QUESTIONS,
  NAV_ITEMS,
  PREPARATION_PLAN,
  SKILL_GAPS,
  TECHNICAL_QUESTIONS,
} from "../constants";
import { useState } from "react";
import Questions from "../components/interview-page/Questions";
import NavLinks from "../components/interview-page/NavLinks";
import HorizontalLine from "../components/HorizontalLine";
import RoadMap from "../components/interview-page/RoadMap";
import MatchScore from "../components/MatchScore";
import Badge from "../components/interview-page/Badge";

const Interview = () => {
  const [activeNav, setActiveNav] = useState("technical");
  return (
    <main className="container mx-auto mt-10 grid min-h-[90vh] grid-cols-10 rounded-lg border border-gray-800 shadow-xs shadow-gray-800">
      <aside className="left-sidebar col-span-2 border-r border-gray-800 p-6 text-gray-400">
        <h2 className="mb-4 text-sm font-bold tracking-wide">SECTIONS</h2>
        {NAV_ITEMS.map((item) => {
          return (
            <NavLinks
              item={item}
              activeNav={activeNav}
              setActiveNav={setActiveNav}
            />
          );
        })}
      </aside>

      <section className="main-content col-span-6 p-6">
        {activeNav === "technical" && (
          <Questions questions={TECHNICAL_QUESTIONS} />
        )}
        {activeNav === "behavioral" && (
          <Questions title={"Behavioral"} questions={BEHAVIORAL_QUESTIONS} />
        )}
        {activeNav === "roadmap" && <RoadMap plans={PREPARATION_PLAN} />}
      </section>

      <aside className="right-sidebar col-span-2 border-l border-gray-800 p-6">
        <div className="flex flex-col items-center gap-4">
          <MatchScore matchScore={40} />
          <HorizontalLine />
          <div className="skill-gaps flex flex-col flex-wrap gap-4">
            <h2 className="text-sm font-bold tracking-wide text-gray-400 uppercase">
              Skill Gaps
            </h2>
            {SKILL_GAPS.map((gap) => (
              <Badge
                key={gap.skill}
                className={`${gap.severity === "low" ? "bg-green-950 text-green-400" : gap.severity === "medium" ? "bg-yellow-950 text-yellow-400" : "bg-red-950 text-red-400"} text-xl`}
              >
                {gap.skill}
              </Badge>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Interview;
