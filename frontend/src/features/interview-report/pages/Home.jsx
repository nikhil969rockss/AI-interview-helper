//library
import { useEffect, useState } from "react";
import { PiBagFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

//components
import Button from "../../auth/components/Button";
import UploadFile from "../components/home-page/UploadFile";
import TextArea from "../components/home-page/TextArea";
import Header from "../../auth/components/Header";

//hooks
import InterviewLoading from "../components/interview-page/Loading";
import UserReport from "../components/home-page/UserReport";
import { isUserTest } from "../../../lib/utils";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/auth.store";
import { useInterviewStore } from "../../store/interview.store";

function Home() {
  const [active, setActive] = useState(false);
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [showLoginButton, setShowLoginButton] = useState(false);
  const { user, handleLogout, loading } = useAuthStore();

  const isUserTestUser = isUserTest(user);

  const {
    createInterviewReport,
    interviewLoading,
    interviewReports,
    interviewReportsByUser,
    testUserDemo,
    setTestUserDemo,
  } = useInterviewStore();
  const navigate = useNavigate();

  // to setup only one generation as a test user
  useEffect(() => {
    const stored = localStorage.getItem("test");
    const isDemo = stored === "true";
    setTestUserDemo(isDemo);
    if (!isDemo) return;
    const timerId = setTimeout(
      () => {
        setTestUserDemo(false);
        localStorage.setItem("test", "false");
      },
      1000 * 60 * 60 * 24,
    );

    return () => clearTimeout(timerId);
  }, [setTestUserDemo]);

  async function handleGenerateReport() {
    if (!jobDescription || !selfDescription || !file) {
      toast.error(
        "Job Description, Self Description and File are required to get best result",
      );
      return;
    }

    if (isUserTestUser && testUserDemo) {
      toast.info(
        "You can only generate one report as a test user, try again tommorrow",
      );
      setShowLoginButton(true);
      return;
    }

    const report = await createInterviewReport({
      resumePdf: file,
      jobDescription,
      selfDescription,
    });

    if (report) {
      if (isUserTestUser) {
        setTestUserDemo(true);
        setTestUserDemo(localStorage.setItem("test", "true"));
      }
      navigate(`/interview/${report._id}`);
    }
  }

  // after generating a test user report, show signup button
  async function handleTestUserSignup() {
    await handleLogout();
    navigate("/register", { replace: true });
  }

  useEffect(() => {
    if (!interviewReports.length) {
      interviewReportsByUser();
    }
  }, [interviewReports.length, interviewReportsByUser]);

  if (interviewLoading) {
    return <InterviewLoading />;
  }

  return (
    <>
      {/* Main Screen */}

      <main className="container mx-auto flex min-h-screen flex-col">
        <Header
          ExtraElement={
            <div className="flex items-end gap-4">
              {/* sign up button */}
              {showLoginButton && (
                <button
                  onClick={handleTestUserSignup}
                  className="flex-center bg-surface-dim cursor-pointer rounded-lg border-2 border-transparent px-4 py-2 transition-all duration-300 hover:border-purple-200"
                >
                  <span className="animate-pulse font-bold"> Sign up</span>
                </button>
              )}

              {/* profile image initials */}
              <p className="flex items-center gap-2 overflow-hidden">
                <span className="">👋</span>
                <img
                  src={`https://api.dicebear.com/5.x/initials/svg?seed=${user?.username}`}
                  alt="user"
                  className="size-10 rounded-full select-none"
                  draggable={false}
                />
              </p>

              {/* Logout button */}
              <button
                disabled={loading}
                onClick={async () => await handleLogout()}
                className="flex-center cursor-pointer rounded-lg border-2 border-transparent bg-linear-to-r from-red-600 to-rose-600 px-4 py-2 transition-all duration-300 hover:border-2 hover:border-red-400 disabled:bg-gray-500"
              >
                Logout
              </button>
            </div>
          }
        />
        <div className="my-20 flex min-h-[95vh] w-full flex-col gap-4">
          {/* Heading */}

          <div className="heading flex w-full justify-center pt-4">
            <div className="w-full">
              <h1 className="text-4xl font-bold">
                Create Your Custom{" "}
                <span className="bg-linear-to-r from-[#313ab8] to-[#e44575] bg-clip-text text-transparent">
                  Interview Plan
                </span>
              </h1>
              <p className="">
                Let our AI analyze the job requirements and your unique profile
                to build a winning strategy
              </p>
            </div>
          </div>

          {/* Resume-details, job description form */}

          <div className="user-details-form flex min-h-[85vh] w-full rounded-lg border-[0.5px] border-[#686666] shadow-xl">
            <div className="left flex flex-1 flex-col gap-4 border-[0.1px] border-gray-600 bg-gray-700/30 p-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="job-description"
                  className="flex items-center gap-1 font-semibold"
                >
                  <PiBagFill />
                  Target Job Description
                </label>
                <label
                  htmlFor="job-description"
                  className="rounded-md bg-red-800/40 p-2 text-sm"
                >
                  Required
                </label>
              </div>
              <div className="relative h-full w-full">
                {/* Text-Area component for job-description */}

                <TextArea
                  placeholder={
                    "Paste the full job description here... e.g. 'Senior Frontend Engineer at Google requires proficiency in React, Typescript, and large-scale system design.. "
                  }
                  id="job-description"
                  name={"jobDescription"}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <span className="absolute right-4 bottom-2 text-xs text-gray-600">
                  {jobDescription.length}/8000
                </span>
              </div>
            </div>

            <div className="right flex flex-1 flex-col gap-4 p-4">
              <p className="flex items-center gap-2 font-bold capitalize">
                <FaUser /> Your profile
              </p>

              <div className="flex items-center gap-2">
                <label className="capitalize" htmlFor="upload-resume">
                  Upload resume
                </label>
                <span className="badge rounded-md bg-pink-900/50 px-2 py-1">
                  Best results
                </span>
              </div>

              {/* Upload file component */}

              <UploadFile
                active={active}
                setActive={setActive}
                file={file}
                setFile={setFile}
              />
              <div className="partician flex items-center gap-2 text-xs">
                <div className="h-[0.2px] w-full border-b border-gray-300"></div>
                AND
                <div className="h-[0.2px] w-full border-b border-gray-300"></div>
                <div></div>
              </div>
              <div className="After-Or-partician flex flex-col gap-4">
                <label
                  htmlFor="self-descripion"
                  className="flex items-center gap-2 font-bold capitalize"
                >
                  <MdDescription />
                  Quick self description
                </label>
                <div className="relative h-full w-full">
                  {/* Text-Area component for self-description */}

                  <TextArea
                    placeholder={
                      "Briefly describe your experiences, key skills and years of experiences if you don't have a resume handy..."
                    }
                    id="self-descripion"
                    name={"selfDescription"}
                    value={selfDescription}
                    onChange={(e) => setSelfDescription(e.target.value)}
                  />
                </div>
                <div className="info-badge flex items-center gap-2 rounded-lg bg-blue-800/50 p-3 text-xs">
                  <FaInfoCircle />
                  <p>
                    For best result a{" "}
                    <span className="font-semibold">Resume</span> and a{" "}
                    <span className="font-semibold">Self Description</span> is
                    required to generate a personalized plan
                  </p>
                </div>
                <Button
                  className={"hover:ring-2 hover:ring-cyan-600"}
                  onClick={handleGenerateReport}
                  icon={<BsStars />}
                >
                  Generate My Interview Strategy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* User Interview Reports */}

        {interviewReports.length > 0 && (
          <div className="mt-6 mb-5 flex w-full flex-col gap-4">
            <h2 className="font-bold">Your Recient Reports</h2>
            <div className="grid grid-cols-8 gap-4">
              {interviewReports.map((report) => (
                <UserReport key={report._id} report={report} />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
