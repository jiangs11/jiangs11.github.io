import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export const links = [
    {
        index: 0,
        title: "Find me on Github",
        href: "https://github.com/jiangs11",
        icon: <FaGithub />,
    },
    {
        index: 1,
        title: "Find me on LinkedIn",
        href: "https://www.linkedin.com/in/jiangsteven99/",
        icon: <FaLinkedin />,
    },
    {
        index: 2,
        title: "Contact me via Email",
        href: "mailto:jiangsteven99@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        index: 3,
        title: "Check out my Resume",
        href: "../static/Jiang_Resume.pdf",
        icon: <FaFilePdf />,
    },
];
