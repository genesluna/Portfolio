import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import servx from "@/public/ServX.jpg";
import billie from "@/public/Billie_Dark.jpg";
import cinesmac from "@/public/cinesmac.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-stack Developer",
    location: "Maceió, AL",
    description:
      "I worked as a full-stack developer at DER. We developed a refueling and preventive maintenance management system for the department's fleet of vehicles. Adobe Flex was used in the front-end, in the back-end PHP and MySQL as the database.",
    icon: React.createElement(CgWorkAlt),
    date: "2005 - 2006",
  },
  {
    title: "Full-Stack Developer",
    location: "Maceió, AL",
    description:
      "I worked as a full-stack developer at Manutenção Express. We created and maintained an ERP. The system was initially developed in FLEX / PHP / MySQL. In 2015 we decided to migrate to Microsoft's stack and rewrote everything using C# / UWP / SQL Server. We also had the need to introduce offline data synchronization and for that we used Azure Mobil Services. We also developed a mobile version using React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "2007 - 2023",
  },
  {
    title: "CESMAC College",
    location: "Maceió, AL",
    description:
      "Graduating from the Systems Analysis and Development course at CESMAC College.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Maceió, AL",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, ReactNative, Next.js, TypeScript, Tailwind, .Net, Blazor and PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ServX",
    description:
      "Desktop ERP application focused on service providers. It also provides offline synchronization.",
    tags: ["C#", "UWP", ".NET", "SQLServer", "Entity Framework"],
    imageUrl: servx,
  },
  {
    title: "Billie",
    description:
      "Billie is a mobile application that helps you keep track of your expenses. You can easily log your expenses, view spending trends and set budgets.",
    tags: ["ReactNative", "TypeScript", "Firebase", "Tailwind"],
    imageUrl: billie,
  },
  {
    title: "Cinesmac",
    description:
      "Application for buying movie tickets. Project developed for the object-oriented programming discipline of Cesmac College.",
    tags: ["Angular", "PostgreSQL", "Redis", "C#", ".NET", "CQRS", "Stripe"],
    imageUrl: cinesmac,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "C#",
  "Angular",
  "React",
  "ReactNative",
  "Next.js",
  ".Net",
  "UWP",
  "Blazor",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "Firebase",
  "PostgreSQL",
  "SQLServer",
] as const;
