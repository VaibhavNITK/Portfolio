import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/VaibhavNITK',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vaibhav-agrawal-3037a3223/',
    },
    // {
    //     name: 'LeetCode',
    //     iconUrl: leetcode,
    //     link: 'https://leetcode.com/Vaib_Agar/',
    // }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Codebook',
        description: 'CodeBook, a dynamic platform, underwent transformative upgrades: tracking upcoming coding contests via integrated APIs, facilitating seamless engagement. Introducing a Mock Interview feature with embedded video calls enriched user experiences, enabling swift interview sessions. Additionally, refined UI enhancements for Codeforces submissions empowered users to effortlessly track and elevate their performance.',
        link: 'https://github.com/IEEE-Codebook',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Career Climb',
        description: 'Crafted CareerClimb, a comprehensive web app enabling user, POC, and admin views for streamlined company interactions. Admins wield control, adding companies, reviewing applications, while integrated JWT and cookies ensure robust user privacy and secure authentication.',
        link: 'https://github.com/VaibhavNITK/CarrerClimb',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Exam Archive',
        description: 'ExamArchive: Your dynamic educational hub, fostering seamless collaboration and resource sharing. With an intuitive interface, it empowers users to explore, contribute, and engage effortlessly within a vibrant academic community.',
        link: 'https://github.com/Shubham-Rasal/ExamArchive',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Go Local',
        description: 'Experience convenience redefined with our local shop app, revolutionizing shopping by offering seamless exploration, item availability checks, and informed decisions, eliminating the need for physical store visits. Effortlessly find nearby shops and browse their items through our user-friendly interface and accurate location tracking.',
        link: 'https://github.com/IEEE-GoLocal',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'OS Simulator',
        description: 'Showcased adeptness in memory management, implementing MFT/MVT techniques and diverse allocation algorithms—first fit, best fit, worst fit, and next fit—ensuring optimal system resource utilization. Proficiently managed file systems, employing indexed sequential and contiguous allocation methods to enhance data accessibility and storage efficiency.',
        link: 'https://github.com/VaibhavNITK/OS_Simulator',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Portfolio',
        description: 'Crafted a captivating 3D portfolio website featuring engaging sections for about, projects, and an integrated email feature, harmonizing creativity with functionality for a distinctive online presence.',
        link: 'https://github.com/VaibhavNITK/Portfolio',
    }
];