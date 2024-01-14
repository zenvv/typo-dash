import React, { useState } from "react";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

interface AnswersProps {
  typo: string;
}

function AnswersTypos({ typo }: AnswersProps) {
  const [currentTypo, setCurrentTypo] = useState<boolean | null>(false);
  const [answer, setAnswer] = useState<string>("");
  const [correctAnswers, setCorrectAnswers] = useState<
    { text: string; time: number }[]
  >([]);
  const [wrongAnswers, setWrongAnswers] = useState<
    { text: string; time: number }[]
  >([]);
  const [startTime, setStartTime] = useState<number | null>(null);

  const endTime = performance.now();
  const elapsedTime = startTime ? endTime - startTime : 0;

  function handleAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (answer.trim() === typo) {
      setCurrentTypo(true);
      setCorrectAnswers((prevAnswers) => [
        ...prevAnswers,
        { text: answer.trim(), time: elapsedTime },
      ]);
    } else {
      setCurrentTypo(false);
      setWrongAnswers((prevAnswers) => [
        ...prevAnswers,
        { text: answer.trim(), time: elapsedTime },
      ]);
    }

    setAnswer(""); // Clear the input field after submission
    setStartTime(null); // Reset the start time
  }

  function handleInputChange() {
    if (startTime === null) {
      // Set start time when the user starts typing
      setStartTime(performance.now());
    }
  }

  return (
    <>
      <form
        onSubmit={handleAnswer}
        className="flex flex-col items-center justify-center w-full gap-2 p-4 my-4 text-gray-900 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-800"
      >
        <header className="flex items-center justify-between w-full">
          <label
            htmlFor="main-input"
            className="p-1 px-3 text-sm italic rounded-lg opacity-70 bg-gray-600/20"
          >
            try it yourself now!
          </label>
          <p className="text-sm italic opacity-80">
            {elapsedTime.toFixed(2)} ms
          </p>
        </header>
        <input
          type="text"
          className="w-full typing-input"
          id="main-input"
          value={answer}
          placeholder="type here"
          onChange={(e) => {
            setAnswer(e.target.value);
            handleInputChange();
          }}
          autoFocus
        />
        <button
          type="submit"
          className="text-xs italic font-bold opacity-40 disabled:invisible"
          disabled={!answer.trim()}
        >
          press [enter] to submit
        </button>
      </form>
      <section className="flex items-start justify-center w-full gap-4 h-72">
        <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-8 pb-0 text-gray-500 rounded-lg bg-gray-200/50 dark:bg-gray-800/50">
          <h1 className="flex items-center gap-2 text-lg">
            <IoCheckmarkCircle />
            Correct Answers ({correctAnswers.length}):{" "}
          </h1>
          <span className="w-full h-full py-4 overflow-scroll">
            {correctAnswers.map(({ text, time }, id) => (
              <p className="text-xs italic leading-normal opacity-80" key={id}>
                {text} ({time.toFixed(2)}ms)
              </p>
            ))}
          </span>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-8 pb-0 text-gray-500 rounded-lg h-5full bg-gray-200/50 dark:bg-gray-800/50">
          <h1 className="flex items-center gap-2 text-lg">
            <IoCloseCircle />
            Wrong Answers ({wrongAnswers.length}):{" "}
          </h1>
          <span className="w-full h-full py-4 overflow-scroll">
            {wrongAnswers.map(({ text, time }, id) => (
              <p className="text-xs italic leading-normal opacity-80" key={id}>
                {text} ({time.toFixed(2)}ms)
              </p>
            ))}
          </span>
        </div>
      </section>
    </>
  );
}

export default AnswersTypos;
