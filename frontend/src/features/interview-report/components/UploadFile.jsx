import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

function UploadFile() {
  const [active, setActive] = useState(false);
  const [file, setFile] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    setActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setActive(false);
  };

  return (
    <div
      className={`w-full border border-white/70 border-dashed p-10 flex-center hover:border-blue-300 ${active && "border-blue-300 "} rounded-lg`}
    >
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        htmlFor="upload-resume"
        className="flex flex-col gap-2 justify-center items-center  "
      >
        <span
          className={`w-14 h-14 flex-center rounded-full border border-dashed border-white/70 ${active && "border-blue-300"} cursor-pointer`}
        >
          <FaCloudUploadAlt />
        </span>

        <p className="text-sm">Click to upload or drag & drop</p>
        <p className="text-sm">PDF only MAX(5MB)</p>
      </label>
      <input type="file" accept=".pdf" className="hidden" id="upload-resume" />
    </div>
  );
}

export default UploadFile;
