import { Link } from "react-router-dom";

const UserReport = ({ report }) => {
  return (
    <Link
      to={`/interview/${report._id}`}
      className="col-span-2 flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-gray-700 p-3 shadow shadow-gray-600"
    >
      <p className="rounded-md bg-blue-950 p-2 text-center">
        Job Title - {report.role}
      </p>
      <p className="rounded-md bg-green-950 p-2">
        Match Score - {report.matchScore}
      </p>
      <p className="rounded-md bg-rose-950 p-2">
        Generated At - {new Date(report.createdAt).toLocaleDateString()}
      </p>
    </Link>
  );
};

export default UserReport;
