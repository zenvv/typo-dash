/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IoLockClosed, IoLockOpen } from "react-icons/io5";

function Typing() {
  const [wordTyped, setWordTyped] = useState<string>("");
  const [typoAnswer, setTypoAnswer] = useState<boolean>(false);
  const [locked, setLocked] = useState<boolean | null>(true);
  const [wordStrength, setWordStrength] = useState<string>("");

  function handleType(e: any) {
    const complexityCheck = {
      length: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    const specials = /[^A-Za-z 0-9]/g;
    const upper = /[A-Z]+/;
    const lower = /[a-z]+/;
    const digits = /[0-9]+/;

    complexityCheck.length = wordTyped.length >= 4 ? true : false;
    complexityCheck.hasUpperCase = upper.test(wordTyped || "");
    complexityCheck.hasLowerCase = lower.test(wordTyped || "");
    complexityCheck.hasDigit = digits.test(wordTyped || "");
    complexityCheck.hasSpecialChar = specials.test(wordTyped || "");

    const complexityList = Object.values(complexityCheck).filter(
      (value) => value
    );

    setWordStrength(`${(complexityList.length / 5) * 100}%`);
    setWordTyped(e.target.value);
  }

  function handleAnswer(e: any) {
    setTypoAnswer(() => (e.target.value == wordTyped ? true : false));
  }

  function handleLock() {
    setLocked(!locked);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* input part */}
      {locked && (
        <span className="flex flex-col items-center justify-center w-full gap-4 transition-all">
          <input
            type="text"
            id="main-typo"
            className="big-input"
            placeholder="type whatever you want"
            onChange={handleType}
          />
        </span>
      )}

      {/* lock group */}
      <main
        className={`flex  justify-between w-full gap-2 p-4 px-6 my-4 border rounded-xl transition-all border-gray-700/20 ${
          !locked ? "bg-gray-50 items-start" : "items-center"
        }`}
      >
        <span>
          {!locked && (
            <p className="text-sm font-bold leading-none text-gray-400">
              typo choosed
            </p>
          )}
          <p
            className={`w-full overflow-hidden text-gray-600 ${
              !locked && "text-xl font-bold text-gray-950 py-3"
            }`}
          >
            {wordTyped == "" ? (
              <p className="italic opacity-35">null</p>
            ) : (
              wordTyped
            )}
          </p>
          <span className="flex items-center justify-start gap-16 text-sm text-gray-500">
            <p>Characters: {wordTyped?.length}</p>
            <p>Complexity: {wordStrength ? wordStrength : "0%"}</p>
          </span>
        </span>

        <button
          className={locked ? "main-button" : "locked-button"}
          onClick={handleLock}
          disabled={wordTyped == ""}
        >
          {locked ? <IoLockOpen /> : <IoLockClosed />}
          {locked ? "lock" : "unlock"}
        </button>
      </main>

      {/* typing group */}
      {!locked && (
        <div className="flex flex-col items-center justify-center w-full gap-2 p-4 my-4 text-gray-900 bg-gray-200 rounded-lg">
          <label
            htmlFor="main-input"
            className="p-1 px-3 text-sm italic rounded-lg opacity-70 bg-gray-600/20"
          >
            try it yourself now!
          </label>
          <input
            type="text"
            className="w-full typing-input"
            id="main-input"
            placeholder="type here"
            onChange={handleAnswer}
          />
          <p>{typoAnswer ? "true" : "false"}</p>
        </div>
      )}
    </div>
  );
}

export default Typing;
