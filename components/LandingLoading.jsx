import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaSass,
  FaAws,
  FaJava,
  FaFigma,
  FaDocker,
  FaBootstrap,
  FaDatabase,
  FaXbox,
  FaGitlab,
  FaGitAlt,
  FaRust,
  FaGithub,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";
import {
  SiNextdotjs,
  SiNginx,
  SiTypescript,
  SiOpencv,
  SiLangchain,
  SiMongodb,
  SiEpicgames,
  SiPytorch,
  SiHuggingface,
  SiUnity,
  SiBlender,
  SiNpm,
  SiPostman,
  SiTailwindcss,
  SiUnrealengine,
  SiMysql,
  SiTensorflow,
  SiRockstargames,
  SiVite,
  SiCanva,
  SiRiotgames,
  SiNintendoswitch,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoPostgresql,
  BiLogoDiscordAlt,
  BiLogoDjango,
  BiLogoFirebase,
  BiLogoFlask,
  BiLogoRedux,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";

const techIcons = [
  FaReact,
  FaFigma,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  RiJavascriptFill,
  SiRockstargames,
  SiTypescript,
  FaDocker,
  SiLangchain,
  SiEpicgames,
  FaGithub,
  FaJava,
  FaBootstrap,
  BiLogoFlask,
  BiLogoFirebase,
  SiCanva,
  FaAws,
  SiVite,
  FaLinux,
  SiPostman,
  VscAzure,
  SiNginx,
  SiNintendoswitch,
  FaPython,
  SiRiotgames,
  FaSass,
  SiNextdotjs,
  BiLogoDjango,
  BiLogoPostgresql,
  FaGitlab,
  FaXbox,
  SiUnrealengine,
  FaGitAlt,
  VscVscode,
  BiLogoDiscordAlt,
  SiUnity,
  SiHuggingface,
  IoLogoGameControllerB,
  SiNpm,
  SiMysql,
  SiBlender,
  BiLogoRedux,
  SiPytorch,
  TbBrandKotlin,
  FaDatabase,
  SiTailwindcss,
  SiTensorflow,
  FaGolang,
  SiMongodb,
  SiOpencv,
  FaRust,
  BiLogoCPlusPlus,
];

const LandingLoading = ({ loadingComplete }) => {
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
        })
      );
      setIconGrid(grid);
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);

    setTimeout(() => setShowWelcome(true), 2000);
    setTimeout(() => setShowWelcome(false), 4000);
    setTimeout(() => loadingComplete(), 5000);

    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#141329] overflow-hidden">
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
            className="text-white font-bold opacity-0  uppercase tracking-wider"
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
