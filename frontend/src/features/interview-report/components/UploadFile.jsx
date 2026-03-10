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
      className={`flex-center w-full border border-dashed border-white/70 p-10 hover:border-blue-300 ${active && "border-blue-300 "} rounded-lg`}
    >
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        htmlFor="upload-resume"
        className="flex flex-col items-center justify-center gap-2"
      >
        <span
          className={`flex-center h-14 w-14 rounded-full border border-dashed border-white/70 ${active && "border-blue-300"} cursor-pointer`}
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
