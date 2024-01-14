import React, { useState } from "react";
import {
  IoLockClosed,
  IoLockOpen,
  IoCheckmarkCircle,
  IoCloseCircle,
} from "react-icons/io5";
import { FaEraser } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import AnswersTypos from "./Answers";

function MainTypo() {
  const [wordTyped, setWordTyped] = useState<string>("");
  const [locked, setLocked] = useState<boolean>(true);
  const [wordStrength, setWordStrength] = useState<string>("");

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    complexityCheck.length = e.target.value.length >= 4 ? true : false;
    complexityCheck.hasUpperCase = upper.test(e.target.value || "");
    complexityCheck.hasLowerCase = lower.test(e.target.value || "");
    complexityCheck.hasDigit = digits.test(e.target.value || "");
    complexityCheck.hasSpecialChar = specials.test(e.target.value || "");

    const complexityList = Object.values(complexityCheck).filter(
      (value) => value
    );

    setWordStrength(`${(complexityList.length / 5) * 100}%`);
    setWordTyped(e.target.value);
  };

  const handleLock = (e: React.FormEvent) => {
    e.preventDefault();
    setLocked(!locked);
  };

  const handleClear = () => {
    setWordTyped("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <form
        onSubmit={handleLock}
        className={`flex flex-col items-center justify-center w-full h-full ${
          !locked ? "h-auto" : ""
        }`}
      >
        {/* input part */}
        {locked && (
          <span className="flex items-center justify-center w-full gap-4 transition-all h-28">
            <input
              type="text"
              id="main-typo"
              className="big-input"
              placeholder="type whatever you want"
              onChange={handleType}
              value={wordTyped}
              autoFocus
              min={4}
              max={48}
            />
            <span className="flex flex-col gap-2">
              <button
                type="button"
                className="text-sm secondary-button"
                onClick={handleClear}
              >
                <FaEraser /> Clear
              </button>
              <button className="text-sm secondary-button" disabled>
                <FiEdit /> Edit
              </button>
            </span>
          </span>
        )}

        {/* lock group */}
        <main
          className={`flex justify-between w-full gap-2 p-4 px-6 my-4 border rounded-xl transition-all border-gray-700/20 darK:border-gray-300/20 ${
            !locked
              ? "bg-gray-50 dark:bg-gray-950 items-center"
              : "items-center"
          }`}
        >
          <span>
            {!locked && (
              <p className="text-sm font-bold leading-none text-gray-400 dark:text-gray-600">
                typo choosed
              </p>
            )}
            <p
              className={`select-none w-full overflow-hidden dark:text-gray-400 text-gray-600 ${
                !locked &&
                "text-xl font-bold text-gray-950 dark:text-gray-50 py-3"
              }`}
            >
              {wordTyped === "" ? (
                <p className="italic opacity-35">null</p>
              ) : (
                wordTyped
              )}
            </p>
            <span className="flex items-center justify-start gap-16 text-sm text-gray-500">
              <p>Characters: {wordTyped.length}</p>
              <p>Complexity: {wordStrength || "0%"}</p>
            </span>
          </span>

          <button
            type="submit"
            className={locked ? "main-button" : "locked-button text-sm"}
            onClick={handleLock}
            disabled={wordTyped.length < 4 || wordTyped.length > 48}
          >
            {locked ? <IoLockOpen /> : <IoLockClosed />}
            {locked ? "lock" : "unlock"}
          </button>
        </main>
      </form>

      {!locked && <AnswersTypos typo={wordTyped} />}
    </div>
  );
}

export default MainTypo;
