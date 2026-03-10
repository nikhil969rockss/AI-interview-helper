import UploadFile from "../components/UploadFile";
import { PiBagFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import TextArea from "../components/TextArea";
import { FaInfoCircle } from "react-icons/fa";
import Button from "../../auth/components/Button";
import { BsStars } from "react-icons/bs";
import useInterview from "../hooks/useInterview";

function Home() {
  const {
    jobDescription,
    setJobDescription,
    selfDescription,
    setSelfDescription,
    errorMsg,
  } = useInterview();

  return (
    <main className="flex-center min-h-screen w-full">
      <div className="flex h-[95vh] flex-col items-center gap-4">
        <div className="heading">
          <h1 className="text-4xl font-bold">
            Create Your Custom{" "}
            <span className="bg-linear-to-r from-[#313ab8] to-[#e44575] bg-clip-text text-transparent">
              Interview Plan
            </span>
          </h1>
          <p>
            Let our AI analyze the job requirements and your unique profile to
            build a winning strategy
          </p>
        </div>
        <div className="user-details-form flex h-[90%] min-w-140 rounded-lg border-[0.5px] border-[#686666] shadow-xl">
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
            <UploadFile />
            <div className="partician flex items-center gap-2 text-xs">
              <div className="h-[0.2px] w-full border-b border-gray-300"></div>
              OR
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
                  Either a <span className="font-semibold">Resume</span> or a{" "}
                  <span className="font-semibold">Self Description</span> is
                  required to generate a personalized plan
                </p>
              </div>
              <Button icon={<BsStars />}>Generate My Interview Strategy</Button>
              {errorMsg && (
                <p className="text-xs text-red-700">Error:{errorMsg}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
