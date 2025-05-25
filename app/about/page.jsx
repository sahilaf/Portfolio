"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="h-[100%] bg-primary py-12  text-gray-300"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-52 gap-10 ">
        {/* Left Column */}
        <div>
          <section className="mb-10 ">
            <h2 className="text-4xl font-semibold text-white mb-3">About me</h2>
            <p>
              I'm Sahil Al Farib, a Computer Science student at United
              International University. I’m passionate about crafting full-stack
              web applications and infusing them with Artificial Intelligence to
              solve real-world problems. From design to deployment, I enjoy
              building efficient, intelligent, and user-centric digital
              experiences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-4xl font-semibold text-white mb-3">
              Education
            </h2>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full mr-4"></span>
              <div>
                <p className="font-medium text-white">
                  United International University
                </p>
                <p className="text-sm">BSc in CSE, Ongoing</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-semibold text-white mb-3">
              Experience
            </h2>

          

            <div className="mb-4">
              <h4 className="font-semibold text-white">
                Learnathon 3.0 2nd Runner-Up (Mern Stack)
              </h4>
              <p className="text-sm text-gray-300">
                Participated in Geeky Solutions' 16-week immersive program
                focused on developing job-ready tech professionals. Collaborated
                with a team to build <strong>FairBasket</strong>, a full-stack Ai powered
                e-commerce platform, and secured the{" "}
                <strong>2nd Runner-Up</strong> position in the final contest.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-4xl font-semibold text-white mb-6">
            Skills & Tools
          </h2>

          {/* Languages */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "JavaScript",
                "C/C++",
                "SQL",
                "NoSQL",
                "HTML5",
                "CSS3",
                "Bash",
                "TypeScript",
                "Java",
              ].map((lang) => (
                <span
                  key={lang}
                  className="bg-[#00ff996b] text-white text-sm px-3 py-1 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "React Native",
                "Tailwind CSS",
                "ShadCN/UI",
                "FastAPI",
                "Express.js",
                "Vite",
              ].map((framework) => (
                <span
                  key={framework}
                  className="bg-[#00ff996b] text-white text-sm px-3 py-1 rounded-full"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & ORMs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Databases & ORMs</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "MongoDB",
                "PostgreSQL",
                "Firebase Firestore",
                "SQLite",
                "Prisma ORM",
                "MySQL",
              ].map((db) => (
                <span
                  key={db}
                  className="bg-[#00ff996b] text-white text-sm px-3 py-1 rounded-full"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>

          {/* AI/ML & Automation */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">AI/ML</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "OpenAI API",
                "Gemini API",
                "LangChain",
                "CrewAI",
                "Retrieval-Augmented Generation (RAG)",
                "Pinecone Vector DB",
                "YOLOv8",
                "OpenCV",
                "TensorFlow (basic)",
                "pandas",
                "NumPy",
                "Matplotlib",
                "Scikit-learn",
                "Prompt Engineering",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#00ff996b] text-white text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
