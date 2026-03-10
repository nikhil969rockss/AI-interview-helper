
const MatchScore = ({ matchScore }) => {
  let borderColor;
  let scoreMessage;
  let messageColor;
  if (Number(matchScore) > 75) {
    borderColor = "border-green-400";
    messageColor = "text-green-400";
    scoreMessage = "Strong Match for this role";
  } else if (Number(matchScore) > 30 && Number(matchScore) <= 75) {
    borderColor = "border-orange-400";
    messageColor = "text-orange-400";
    scoreMessage = "Okay Match for this role";
  } else if (Number(matchScore) <= 30) {
    borderColor = "border-red-400";
    messageColor = "text-red-400";
    scoreMessage = "Poor Match for this role";
  }
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="font-bold tracking-wide text-gray-400 uppercase text-sm">
        Match Score
      </h2>
      <div
        className={`flex-center size-28 rounded-full border-4 text-2xl font-bold ${borderColor}`}
      >
        {matchScore} %
      </div>
      <p className={`${messageColor} text-xs`}>{scoreMessage}</p>
    </div>
  );
};

export default MatchScore;
