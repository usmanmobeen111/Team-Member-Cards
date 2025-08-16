import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const teamData = [
  {
    id: 1,
    name: "Ava Thompson",
    role: "Lead UI/UX Designer",
    image: "/ava.jpg",
    socials: [
      { icon: FaTwitter, link: "https://twitter.com/ava" },
      { icon: FaLinkedin, link: "https://linkedin.com/in/ava" },
    ],
    iconClass:
      "p-2 text-white rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 hover:from-pink-300 hover:via-red-400 hover:to-rose-400 transition-all duration-300 ease-in-out",
  },
  {
    id: 2,
    name: "Liam Rodriguez",
    role: "Full Stack Developer",
    image: "/liam.jpg",
    socials: [
      { icon: FaGithub, link: "https://github.com/liam" },
      { icon: FaLinkedin, link: "https://linkedin.com/in/liam" },
    ],
    iconClass:
      "p-2 text-white rounded-full bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 hover:from-blue-300 hover:via-sky-400 hover:to-cyan-400 transition-all duration-300 ease-in-out",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Frontend Developer",
    image: "/sophia.jpg",
    socials: [
      { icon: FaTwitter, link: "https://twitter.com/sophia" },
      { icon: FaGithub, link: "https://github.com/sophia" },
    ],
    iconClass:
      "p-2 text-white rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 hover:from-yellow-200 hover:via-yellow-400 hover:to-orange-400 transition-all duration-300 ease-in-out",
  },
  {
    id: 4,
    name: "Ethan Carter",
    role: "Backend Engineer",
    image: "/ethan.jpg",
    socials: [
      { icon: FaLinkedin, link: "https://linkedin.com/in/ethan" },
      { icon: FaGithub, link: "https://github.com/ethan" },
    ],
    iconClass:
      "p-2 text-white rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 hover:from-green-300 hover:via-emerald-400 hover:to-teal-400 transition-all duration-300 ease-in-out",
  },
  {
    id: 5,
    name: "Isabella Moore",
    role: "Product Manager",
    image: "/isabella.jpg",
    socials: [
      { icon: FaLinkedin, link: "https://linkedin.com/in/isabella" },
      { icon: FaTwitter, link: "https://twitter.com/isabella" },
    ],
    iconClass:
      "p-2 text-white rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-500 to-pink-500 hover:from-violet-300 hover:via-fuchsia-400 hover:to-pink-400 transition-all duration-300 ease-in-out",
  },
  {
    id: 6,
    name: "Noah Bennett",
    role: "DevOps Engineer",
    image: "/noah.jpg",
    socials: [
      { icon: FaGithub, link: "https://github.com/noah" },
      { icon: FaLinkedin, link: "https://linkedin.com/in/noah" },
    ],
    iconClass:
      "p-2 text-white rounded-full bg-gradient-to-br from-slate-500 via-gray-600 to-black hover:from-gray-400 hover:via-slate-500 hover:to-gray-800 transition-all duration-300 ease-in-out",
  },
];
