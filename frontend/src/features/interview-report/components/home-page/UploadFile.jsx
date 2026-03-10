//library
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import useInterview from "../../hooks/useInterview";

function UploadFile({ active, setActive, file, setFile }) {
  const { setError } = useInterview();

  const handleDrop = (e) => {
    e.preventDefault();
    setActive(false);
    setError("");
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }
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

  const handleFileChange = (e) => {
    setError("");
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }
      setFile(file);
    }
  };

  return (
    <div
      className={`flex-center w-full border border-dashed border-white/70 p-10 hover:border-blue-300 ${active && "border-blue-300 "} rounded-lg`}
    >
      {!file && (
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
      )}
      <input
        onChange={handleFileChange}
        type="file"
        accept=".pdf"
        className="hidden"
        id="upload-resume"
      />
      {file && (
        <div className="relative">
          <p className="relative z-1 rounded-md bg-rose-900 px-2 py-1 text-xs text-rose-400">
            {file.name}
          </p>
          <p className="mt-1 text-center text-[9px] text-gray-500">
            Size:{(file.size / 1024 / 1024).toFixed(2)}MB
          </p>
          <div
            onClick={() => setFile(null)}
            className="flex-center absolute top-[-2%] right-[-2%] z-2 size-2 cursor-pointer rounded-full text-xs"
          >
            <ImCross className="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
