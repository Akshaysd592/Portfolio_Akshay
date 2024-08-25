import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { GlobeDesign } from "./GlobeDesign";
import { Globe } from "./ui/globe";

const Homepage = () => {
  return (
    <>
      <LampContainer className="sm:pt-12  relative">
      
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
        >
          Welcome, <br /> To Akshay's World.
          
        </motion.h1>
      </LampContainer>
       <div className="flex justify-center w-full absolute top-[75%]">
        <div className=" h-56 sm:h-80  w-80">
        <GlobeDesign />
        </div>
       
       </div>
     
    </>

  );
};

export default Homepage;
