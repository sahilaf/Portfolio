"use client"
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
const Home = () => {
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
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none xl:pr-16 pr-0">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Sahil Al Farib</span>
            </h1>
            <p className="max-e-[500px] mb-9 text-white/80">
            I’m Sahil, a Computer Science Engineering student passionate about leveraging full-stack web technologies and AI/ML to build user centric, impactful, community-driven solutions. 
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/SahilCv.pdf"
                download
                className=""
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary hover:transition-all duration-500"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Home;
