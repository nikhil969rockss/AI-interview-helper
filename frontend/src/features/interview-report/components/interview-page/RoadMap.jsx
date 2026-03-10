import HorizontalLine from "../HorizontalLine";
import Badge from "./Badge";
import RoadMapIcon from "./RoadMapIcon";

const RoadMap = ({ plans }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <h1 className="font-bold">Preparation Road Map</h1>
        <Badge className={"bg-gray-900 text-gray-400"}>
          {plans.length}-Day-Plan
        </Badge>
      </div>
      <HorizontalLine />
      {plans.map((plan) => (
        <div key={plan?.day} className="flex gap-4">
          <RoadMapIcon />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Badge className={"bg-rose-950 text-rose-400"}>
                Day {plan?.day}
              </Badge>
              <h2 className="font-semibold">{plan?.focus}</h2>
            </div>

            <ul className="ml-4 text-gray-400">
              {plan?.tasks.map((task) => (
                <li key={task} className="list-disc">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadMap;
