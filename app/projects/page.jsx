"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import  Tabs  from "../../components/ui/tabs";
import { Orbitron } from "next/font/google";
import "./styles_proj.css";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  const projectTabs = [
    {
      id: "all",
      label: "All Projects",
    },
    {
      id: "web",
      label: "Web Development",
    },
    {
      id: "agents",
      label: "Ai Agents",
    },
  ];

  // Add a `url` field to each project
  const projectsList = {
    all: [
      {
        title: "FairBasket",
        description: "",
        image:
          "./assets/fairbasket.jpg",
        type: "Web Development",
        url: "https://github.com/sahilaf/bugsquashers",
      },
      {
        title: "Iphone 15 pro website clone",
        description: "",
        image:
          "./assets/Apple_clone.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/Apple",
      },
      {
        title: "SkyVoyager",
        description: "",
        image:
          "./assets/SkyVoager.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/SkyVoyager",
      },
      {
        title: "ScholarSphare",
        description: "",
        image:
          "./assets/scholarsphare.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/Scholarsphare",
      },
      {
        title: "Dr.Shawon Portfolio",
        description: "",
        image:
          "./assets/Portfolio.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/Site",
      },
      {
        title: "Instagram content agent",
        description: "",
        image:
          "https://github.com/sahilaf/Instagram-content-agent/raw/main/docs/Content_agent_flow.png",
        type: "Ai Agent",
        url: "https://github.com/sahilaf/Instagram-content-agent",
      },
      {
        title: "Chat with websites",
        description: "",
        image:
          "https://github.com/sahilaf/Chat_with_websites/blob/main/docs/HTML-rag-diagram.jpg?raw=true",
        type: "Ai Agent",
        url: "https://github.com/sahilaf/Chat_with_websites",
      },
      {
        title: "Ask in pdf",
        description: "",
        image:
          "https://github.com/sahilaf/Ask_in_pdf/raw/main/docs/PDF-LangChain.jpg",
        type: "Ai Agent",
        url: "https://github.com/sahilaf/Chat_with_websites",
      },
      
    ],
    web: [
      {
        title: "FairBasket",
        description: "",
        image:
          "./assets/fairbasket.jpg",
        type: "Web Development",
        url: "https://github.com/sahilaf/bugsquashers",
      },
      {
        title: "Iphone 15 pro website clone",
        description: "",
        image:
          "./assets/Apple_clone.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/Apple",
      },
      {
        title: "SkyVoyager",
        description: "",
        image:
          "./assets/SkyVoager.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/SkyVoyager",
      },
      {
        title: "ScholarSphare",
        description: "",
        image:
          "./assets/scholarsphare.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/Scholarsphare",
      },
      {
        title: "Dr.Shawon Portfolio",
        description: "",
        image:
          "./assets/Portfolio.PNG",
        type: "Web Development",
        url: "https://github.com/sahilaf/Site",
      },
    ],
    agents: [
      {
        title: "Instagram content agent",
        description: "",
        image:
          "https://github.com/sahilaf/Instagram-content-agent/raw/main/docs/Content_agent_flow.png",
        type: "Ai Agent",
        url: "https://github.com/sahilaf/Instagram-content-agent",
      },
      {
        title: "Chat with websites",
        description: "",
        image:
          "https://github.com/sahilaf/Chat_with_websites/blob/main/docs/HTML-rag-diagram.jpg?raw=true",
        type: "Ai Agent",
        url: "https://github.com/sahilaf/Chat_with_websites",
      },
      {
        title: "Ask in pdf",
        description: "",
        image:
          "https://github.com/sahilaf/Ask_in_pdf/raw/main/docs/PDF-LangChain.jpg",
        type: "Ai Agent",
        url: "https://github.com/sahilaf/Chat_with_websites",
      },
    ],
  };

  const [activeTab, setActiveTab] = React.useState(projectTabs[0].id);
  const sectionRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      },
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay:2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      >
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-primary px-4 relative overflow-hidden line__container py-5"
    >
      <div className="max-w-7xl mx-auto z-10 ">
        

        <div className="overflow-x-auto -mx-4 px-4 mb-8 sm:mb-12 md:mb-16">
          <Tabs
            tabs={projectTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            containerClassName="mb-8 font-jetbrains min-w-max mx-auto flex justify-center"
            tabClassName="text-sm sm:text-base whitespace-nowrap"
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 font-jetbrains"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeTab}
        >
          {projectsList[activeTab].map((project, index) => (
            <Link key={index} href={project.url} passHref>
              <motion.a
                variants={item}
                className="group relative overflow-hidden rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-all duration-500 block"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xs sm:text-sm text-neutral-500 font-medium tracking-wider"
                  >
                    {project.type}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg sm:text-xl font-semibold text-white mt-2 mb-2 sm:mb-3"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-sm sm:text-base text-neutral-400"
                  >
                    {project.description}
                  </motion.p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
};

export default Projects;