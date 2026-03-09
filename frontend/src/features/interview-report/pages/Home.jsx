import { useState } from "react";
import UploadFile from "../components/UploadFile";
import { PiBagFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import TextArea from "../components/TextArea";
import { FaInfoCircle } from "react-icons/fa";
import Button from "../../auth/components/Button";
import { BsStars } from "react-icons/bs";

function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <main className="w-full min-h-screen flex-center  ">
      <div className="flex flex-col gap-4 items-center h-[95vh]  ">
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
        <div className="user-details-form min-w-140 flex border-[0.5px] border-[#686666] rounded-lg  shadow-xl h-[90%] ">
          <div className="left flex-1 flex flex-col p-4 gap-4 bg-gray-700/30 border-gray-600 border-[0.1px] ">
            <div className="flex justify-between items-center">
              <label
                htmlFor="job-description"
                className="font-semibold flex items-center gap-1"
              >
                <PiBagFill />
                Target Job Description
              </label>
              <label
                htmlFor="job-description"
                className="p-2 text-sm bg-red-800/40 rounded-md"
              >
                Required
              </label>
            </div>
            <div className="relative w-full h-full">
              <TextArea
                placeholder={
                  "Paste the full job description here... e.g. 'Senior Frontend Engineer at Google requires proficiency in React, Typescript, and large-scale system design.. "
                }
                id="job-description"
                name={"jobDescription"}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <span className="absolute bottom-2 right-4 text-xs text-gray-600">
                {jobDescription.length}/8000
              </span>
            </div>
          </div>

          <div className="right  flex-1 p-4 flex flex-col gap-4">
            <p className="font-bold  capitalize flex items-center gap-2">
              <FaUser /> Your profile
            </p>

            <div>
              <label htmlFor="upload-resume">Upload resume</label>
              <span className="badge">Best results</span>
            </div>
            <UploadFile />
            <div className="partician flex items-center gap-2 text-xs ">
              <div className="w-full h-[0.2px] border-b border-gray-300"></div>
              OR
              <div className="w-full h-[0.2px] border-b border-gray-300"></div>
              <div></div>
            </div>
            <div className="After-Or-partician flex flex-col gap-4">
              <label
                htmlFor="self-descripion"
                className="font-bold capitalize flex items-center gap-2"
              >
                <MdDescription />
                Quick self description
              </label>
              <div className="relative w-full h-full ">
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
              <div className="info-badge p-3 bg-blue-800/50 rounded-lg text-xs flex items-center gap-2">
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
