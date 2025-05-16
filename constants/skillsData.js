import { FaAngular, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiTypescript, SiUnity, SiBlender, SiGodotengine } from "react-icons/si";
import { TbBrandThreejs, TbBrandCSharp, TbBrandKotlin } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

export const skillsNumberData = {
    "Web Dev": { name: "Web Dev", number: 50 },
    "Game Dev": { name: "Game Dev", number: 30 },
    "App Dev": { name: "App Dev", number: 20 },
};

export const webSkillsData = [
    { name: "CSS", xp: "1.5 YRS", icon: <FaCss3Alt style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "JAVASCRIPT", xp: "1.5 YRS", icon: <SiJavascript style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "REACT", xp: "1.5 YRS", icon: <FaReact style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "TAILWIND CSS", xp: "1.5 YRS", icon: <SiTailwindcss style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "NODE.JS", xp: "1.5 YRS", icon: <FaNodeJs style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "MONGODB", xp: "1.5 YRS", icon: <SiMongodb style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "PYTHON", xp: "1.5 YRS", icon: <FaPython style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "NEXT.JS", xp: "1 YR", icon: <SiNextdotjs style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "POSTGRESQL", xp: "1 YR", icon: <SiPostgresql style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "TYPESCRIPT", xp: "1 YR", icon: <SiTypescript style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "THREE.JS", xp: "1 YR", icon: <TbBrandThreejs style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "ANGULAR", xp: "0.5 YRS", icon: <FaAngular style={{ height: "1.75rem", width: "auto" }} /> },
];

export const gameSkillsData = [
    { name: "UNITY", xp: "1 YR", icon: <SiUnity style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "C#", xp: "1 YR", icon: <TbBrandCSharp style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "BLENDER", xp: "1 YR", icon: <SiBlender style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "GODOT", xp: "0.5 YR", icon: <SiGodotengine style={{ height: "1.75rem", width: "auto" }} />}
];

export const appSkillsData = [
    { name: "REACT NATIVE", xp: "1 YR", icon: <FaReact style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "KOTLIN", xp: "1 YR", icon: <TbBrandKotlin style={{ height: "1.75rem", width: "auto" }} /> },
    { name: "FIREBASE", xp: "1 YR", icon: <IoLogoFirebase style={{ height: "1.75rem", width: "auto" }} /> },
];
