import React, { useEffect, useState } from "react";
import { techIcons } from "@/constants/techIconsData";

const LandingLoading = ({ loadingComplete, loading }) => {
  const [iconGrid, setIconGrid] = useState([]);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const calculateGrid = () => {
      const iconSize = 40;
      const gap = 20;
      const screenWidth = window.innerWidth + iconSize;
      const screenHeight = window.innerHeight + iconSize;

      const cols = Math.ceil(screenWidth / (iconSize + gap));
      const rows = Math.ceil(screenHeight / (iconSize + gap));

      const grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => {
          const RandomIcon =
            techIcons[Math.floor(Math.random() * techIcons.length)];
          const delay = Math.random() * 2;
          return { Icon: RandomIcon, delay, appear: Math.random() * 3 };
        }),
      );
      setIconGrid(grid);
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);

    setTimeout(() => setShowWelcome(true), 2000);
    setTimeout(() => setShowWelcome(false), 4000);
    setTimeout(() => loadingComplete(), 4000);

    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#141329] overflow-hidden">
      {!loading && (
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-[8px] z-20 pointer-events-none"
          style={{
            animation: `fadeIn 0.5s forwards`,
          }}
        ></div>
      )}
      <div
        className="absolute inset-0 grid gap-x-10 gap-y-10"
        style={{ marginLeft: "-30px", marginTop: "-30px" }}
      >
        {iconGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-x-14 gap-y-32">
            {row.map(({ Icon, delay, appear }, colIndex) => (
              <div
                key={colIndex}
                className="opacity-0"
                style={{
                  animation: `fadeIn 0.5s ${appear}s forwards, bounce 2s ${delay}s infinite`,
                }}
              >
                <Icon className="w-12 h-12 text-gray-100/40" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {showWelcome && (
          <div
            className="text-white font-bold opacity-0 uppercase tracking-[0.4rem]"
            style={{
              animation: "fadeInOut 2s forwards",
              fontFamily: "sans-serif",
              fontSize: "100px",
            }}
          >
            Welcome
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingLoading;
