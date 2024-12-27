import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImSphere } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";

export const socialLinks = [
    {
        id: 1,
        icon: <FaGithub />,
        link: "https://github.com/sameer240704",
        label: "GitHub"
    },
    {
        id: 2,
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/sameergupta24/",
        label: "LinkedIn"
    },
    {
        id: 3,
        icon: <FaInstagram />,
        link: "https://instagram.com/sameergupta.24",
        label: "Instagram"
    },
    {
        id: 4,
        icon: <FaXTwitter />,
        link: "https://x.com/SameerGupt348",
        label: "Twitter"
    },
    {
        id: 5,
        icon: <MdEmail />,
        link: "mailto:sameergupta79711@gmail.com",
        label: "Email"
    }
];

export const MENU_LINKS = [
    { name: "ABOUT" },
    { name: "PROJECTS" },
    { name: "SKILLS" },
];

export const CARD_NAMES = [
    { name: "Web Dev", icon: <ImSphere /> },
    { name: "Game Dev", icon: <IoGameController /> },
    { name: "App Dev", icon: <CiMobile3 /> }
]