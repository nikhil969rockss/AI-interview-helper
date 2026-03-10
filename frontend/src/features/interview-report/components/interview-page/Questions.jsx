//components
import Badge from "./Badge";
import HorizontalLine from "../HorizontalLine";
import Accordian from "./Accordian";

const Questions = ({ questions, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <h1 className="font-bold">{title} Questions</h1>
        <Badge className={"bg-gray-900 text-gray-400"}>
          {questions?.length} questions
        </Badge>
      </div>
      <HorizontalLine />

      <div className="flex flex-col gap-4">
        {questions &&
          questions.map((question, index) => {
            return (
              <Accordian
                key={question.answer}
                q_no={index + 1}
                intention={question.intention}
                question={question.question}
                answer={question.answer}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Questions;
