"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { PinContainer } from "../../components/ui/3d-pin";
//aboutdata

const about = {
  title: "About Me",
  description:
    "I am a full stack developer with a passion for creating beautiful and functional websites. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sahil Al Farib",
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801936064767",
    },
    {
      fieldName: "Exprience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "sahilfarib320@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaialable",
    },
  ],
};
const exprience = {
  icon: "./assets/resume/badge.svg",
  title: "My Experience",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  items: [
    {
      company: "Tech Solution",
      position: "Full Stack Developer",
      duration: "2021-2022",
    },
    {
      company: "Web design studios",
      position: "Frontend intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2021-2022",
    },
    {
      company: "Tech Academy",
      position: "Ui/Ux Designer",
      duration: "2021-2022",
    },
    {
      company: "Tech Academy",
      position: "Ui/Ux Designer",
      duration: "2021-2022",
    },
    {
      company: "Tech Academy",
      position: "Ui/Ux Designer",
      duration: "2021-2022",
    },
  ],
};
const education = {
  icon: "./assets/resume/cap.svg",
  title: "My Education",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  items: [
    {
      institution: "ABC University",
      degree: "BSc in Computer Science",
      duration: "2018-2021",
    },
    {
      institution: "XYZ High School",
      degree: "High School Diploma",
      duration: "2014-2018",
    },
    {
      institution: "XYZ High School",
      degree: "High School Diploma",
      duration: "2014-2018",
    },
    {
      institution: "XYZ High School",
      degree: "High School Diploma",
      duration: "2014-2018",
    },
    {
      institution: "XYZ High School",
      degree: "High School Diploma",
      duration: "2014-2018",
    },
    {
      institution: "XYZ High School",
      degree: "High School Diploma",
      duration: "2014-2018",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "loram ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  skillList: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="exprience"
          className="flex flex-col xl:flex-row gap-[60px] h-[80vh]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-full">
            <TabsTrigger value="exprience">Exprience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full pb-0 h-full">
            {/* Exprience */}
            <TabsContent value="exprience" className="w-full ">
              <motion.div 
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1,
                  ease: "easeIn",
                }
              }}
              className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{exprience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {exprience.description}
                </p>
                <ScrollArea className="h-[500px] -mt-5">
                  <div className="flex justify-center xl:justify-between">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
                      {exprience.items.map((item, index) => {
                        return (
                          <PinContainer
                            title={item.duration}
                            key={index}
                            className="bg-[#232329] rounded-lg flex flex-col justify-center items-center gap-1 p-4 tracking-tight w-[20rem] h-[10rem]"
                            containerClassName=" rounded-lg w-[20rem] h-[15rem]"
                          >
                            <h3>{item.position}</h3>
                            <div className="flex items-center gap-2">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </PinContainer>
                        );
                      })}
                    </ul>
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full ">
              <motion.div 
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1,
                  ease: "easeIn",
                }
              }}
              className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[500px] -mt-5">
                  <div className="flex justify-center xl:justify-between">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
                      {education.items.map((item, index) => {
                        return (
                          <PinContainer
                            title={item.duration}
                            key={index}
                            className="bg-[#232329] rounded-lg flex flex-col justify-center items-center gap-1 p-4 tracking-tight w-[20rem] h-[10rem]"
                            containerClassName=" rounded-lg w-[20rem] h-[15rem]"
                          >
                            <h3>{item.institution}</h3>
                            <div className="flex justify-center items-center gap-2 ">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.degree}</p>
                            </div>
                          </PinContainer>
                        );
                      })}
                    </ul>
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className=" overflow-hidden w-full">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 1,
                    ease: "easeIn",
                  },
                }}
                className="flex flex-col text-center xl:text-left w-full max-w-6xl mx-auto"
              >
                <h3 className="text-4xl font-bold mb-[20px]">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-0 justify-items-center">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <PinContainer
                        title={skill.name}
                        key={index}
                        className="bg-[#232329] rounded-lg flex flex-col justify-center items-center gap-1 p-4 tracking-tight w-[10rem] h-[10rem]"
                        containerClassName="rounded-lg w-[15rem] h-[12rem]"
                      >
                        <div className="flex justify-center items-center gap-x-2 text-6xl">
                          {skill.icon}
                        </div>
                      </PinContainer>
                    );
                  })}
                </ul>
              </motion.div>
            </TabsContent>

            {/* About Me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 1,
                    ease: "easeIn",
                  },
                }}
                className="flex flex-col gap-[30px]"
              >
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0 mt-10">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
