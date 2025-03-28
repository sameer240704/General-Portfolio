import React, { useState, useEffect } from "react";
import { skillsNumberData } from "@/constants/skillsData";

const SkillsNumber = ({ hoveredElement }) => {
  const [displayedNumber, setDisplayedNumber] = useState(100);
  const [loading, setLoading] = useState(false);
  const [randomText, setRandomText] = useState("Hardworking");
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const fallbackTexts = ["Hardworking", "Perseverant", "Creative"];
    setRandomText(
      fallbackTexts[Math.floor(Math.random() * fallbackTexts.length)]
    );
  }, [hoveredElement]);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    const calculateTotal = () => {
      if (!hoveredElement) {
        return 100;
      }
      return skillsNumberData[hoveredElement]?.number || 100;
    };

    const targetNumber = calculateTotal();
    const totalSteps = 100;
    const stepDuration = 500 / totalSteps;
    const step = (targetNumber - displayedNumber) / totalSteps;

    setLoading(true);

    const intervalId = setInterval(() => {
      setDisplayedNumber((prev) => {
        const nextValue = prev + step;

        if (
          (step > 0 && nextValue >= targetNumber) ||
          (step < 0 && nextValue <= targetNumber)
        ) {
          clearInterval(intervalId);
          setLoading(false);
          return targetNumber;
        }

        return nextValue;
      });
    }, stepDuration);

    return () => clearInterval(intervalId);
  }, [hoveredElement]);

  return (
    <div
      className="w-[40%] flex justify-center items-center h-full relative"
      style={{
        animation: "slideLeft 0.5s forwards",
      }}
    >
      <div className="relative inline-flex flex-col items-center">
        <span
          className={`absolute -top-9 text-8xl transition-opacity duration-500 font-hiatus text-purple-400 tracking-wide ${
            loading && !isInitialRender ? "opacity-0" : "opacity-100"
          } translate-x-1/2 whitespace-nowrap`}
          style={{
            right: "50%",
            transform: "translateX(50%)",
            textShadow: "0px 0px 10px rgba(160, 32, 240, 0.5)",
          }}
        >
          {hoveredElement ? skillsNumberData[hoveredElement]?.name : randomText}
        </span>

        <span className="text-10xl font-semibold text-gray-400/50 transition-all duration-500 font-montserrat">
          {Math.round(displayedNumber)}%
        </span>
      </div>
    </div>
  );
};

export default SkillsNumber;
