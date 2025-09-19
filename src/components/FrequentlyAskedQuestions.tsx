import yellow from "../assets/yellow.svg";
import purple from "../assets/purple3.svg";
import Question from "./Question";
const FrequentlyAskedQuestions = () => {
  const questions = [
    {
      question:
        "What makes WonderKids different from other education platforms?",
    },
    {
      question: "How can I access WonderKids?",
    },
    {
      question:
        "What about the security of children's data using this platform?",
    },
  ];
  return (
    <section className="px-5 py-5 md:px-20 md:py-15 grid grid-cols-1 md:grid-cols-7 justify-between">
      <div className="md:col-span-3 flex sm:flex-col flex-row  ">
        <h4 className="h4 font-semibold  md:max-w-[580px]">
          Frequently{" "}
          <span className="font-normal font-courgette text-purple-300">
            asked
          </span>{" "}
          questions
        </h4>
        <div className="flex lg:gap-21.5 lg:flex-row md:flex-col md:gap-2 flex-row sm:gap-5 gap-1">
          <img
            src={yellow}
            className="-z-10 w-[30px] h-[30px] sm:w-[151px] sm:h-[151px] md:max-w-full md:h-auto "
            alt=""
            aria-hidden="true"
          ></img>
          <img
            src={purple}
            className="-z-10 w-[30px] h-[30px] sm:w-[188px] sm:h-[170px] md:max-w-full md:h-auto"
            alt=""
            aria-hidden="true"
          ></img>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center md:col-span-4">
        {questions.map((question, index) => (
          <Question key={index} question={question.question} />
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
