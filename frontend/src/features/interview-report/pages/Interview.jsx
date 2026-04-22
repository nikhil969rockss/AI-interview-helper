//library
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WiStars } from "react-icons/wi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

//components
import Questions from "../components/interview-page/Questions";
import NavLinks from "../components/interview-page/NavLinks";
import HorizontalLine from "../components/HorizontalLine";
import RoadMap from "../components/interview-page/RoadMap";
import MatchScore from "../components/MatchScore";
import Badge from "../components/interview-page/Badge";
import { NAV_ITEMS } from "../constants";
import Button from "../../auth/components/Button";

//hooks

import { useInterviewStore } from "../../store/interview.store";
import Header from "../../auth/components/Header";

const Interview = () => {
  const params = useParams();
  const { interviewReport, interviewReportById, pdfLoading, getPdf } =
    useInterviewStore();
  const [activeNav, setActiveNav] = useState("technical");

  useEffect(() => {
    if (!params.interviewId) return;
    interviewReportById(params.interviewId);
  }, [interviewReportById, params.interviewId]);

  if (!interviewReport) {
    return (
      <main className="flex-center h-screen w-full">
        <div className="flex flex-col items-center">
          <p>Generation failed, Nothing to show, please try agian</p>
          <Link className="underline" to={"/"}>
            Go to home
          </Link>
        </div>
      </main>
    );
  }
  //function to generate dedicated pdf

  async function handleGeneratePdf() {
    await getPdf(params.interviewId);
  }

  //Loading screen while generating the pdf
  if (pdfLoading) {
    return (
      <main className="flex-center h-screen w-full">
        <div className="flex flex-col gap-4">
          <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
          <h1>Generating Pdf</h1>
          <p className="animate-pulse text-sm">Please wait...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto my-20 grid min-h-[90vh] grid-cols-10 rounded-lg border border-gray-800 shadow-xs shadow-gray-800">
      {/* header */}
      <Header />

      {/* LEFT SIDE BAR */}
      <aside className="left-sidebar col-span-2 flex flex-col justify-between border-r border-gray-800 p-6 text-gray-400">
        <div>
          <h2 className="mb-4 text-sm font-bold tracking-wide">SECTIONS</h2>
          {NAV_ITEMS.map((item) => {
            return (
              <NavLinks
                key={item.id}
                item={item}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
            );
          })}
        </div>
        <Button
          onClick={handleGeneratePdf}
          icon={<WiStars size={40} />}
          className={
            "flex items-center bg-fuchsia-900 text-xs text-fuchsia-400 hover:ring-4 hover:ring-fuchsia-400"
          }
        >
          Generate Dedicated Resume
        </Button>
      </aside>

      {/* MAIN CONTENT */}
      <section className="main-content col-span-6 p-6">
        {activeNav === "technical" && (
          <Questions questions={interviewReport?.technicalQuestions} />
        )}
        {activeNav === "behavioral" && (
          <Questions
            title={"Behavioral"}
            questions={interviewReport?.behavioralQuestions}
          />
        )}
        {activeNav === "roadmap" && (
          <RoadMap plans={interviewReport?.preparationPlan} />
        )}
      </section>

      {/* RIGHT SIDE BAR */}

      <aside className="right-sidebar col-span-2 border-l border-gray-800 p-6">
        <div className="flex flex-col items-center gap-4">
          <MatchScore matchScore={interviewReport?.matchScore} />
          <HorizontalLine />
          <div className="skill-gaps flex flex-col flex-wrap gap-4">
            <h2 className="text-sm font-bold tracking-wide text-gray-400 uppercase">
              Skill Gaps
            </h2>
            {interviewReport?.skillGaps &&
              interviewReport.skillGaps.map((gap) => (
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
