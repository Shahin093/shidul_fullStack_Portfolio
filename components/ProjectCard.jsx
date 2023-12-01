import Image from "next/image";
import aizen from "../public/aizen.jpg";
import kamui from "../public/kamui.jpg";
import BusService from "../public/busService.PNG";

import pokedex from "../public/pokedex.jpg";
import portfolio from "../public/portfolio.jpg";
import cryptohunter from "../public/crypto-hunter.jpg";
import redeye from "../public/red-eye.jpg";
import evo from "../public/evo.jpg";
import nft from "../public/nft.jpg";
import nike from "../public/nike.jpg";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Tutor Management System",
      description:
        "A tutor management system is software designed to assist businesses in creating online learning platforms and simplifying the operations of tutoring services",
      link: "/work/aizen",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "PC-Builder",
      description:
        "Online bus services refer to transportation services that can be booked, managed, and accessed through the internet",
      link: "/work/kamui",
      target: "_self",
    },
    {
      id: 2,
      image: BusService,
      title: "Online Bus Services",
      description:
        "A PC builder, also known as a PC configurator or custom PC builder, is a tool or platform that allows users to customize and build their own personal computers according to their specific needs and preferences",
      link: "/work/online-bus-service",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "Fixil Repaire",
      description:
        "A PC builder, also known as a PC configurator or custom PC builder, is a tool or platform that allows users to customize and build their own personal computers according to their specific needs and preferences",
      link: "/work/fixil-repire",
      target: "_self",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
