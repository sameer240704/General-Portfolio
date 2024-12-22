import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const socialLinks = [
    {
        id: 1,
        icon: <FaGithub />,
        link: "https://github.com",
        label: "GitHub"
    },
    {
        id: 2,
        icon: <FaLinkedin />,
        link: "https://github.com",
        label: "LinkedIn"
    },
    {
        id: 3,
        icon: <FaInstagram />,
        link: "https://instagram.com",
        label: "Instagram"
    },
    {
        id: 4,
        icon: <FaXTwitter />,
        link: "https://twitter.com",
        label: "Twitter"
    },
    {
        id: 5,
        icon: <MdEmail />,
        link: "mailto:someone@example.com",
        label: "Email"
    }
];