import React from "react";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";

export default function Skills(){
  const skills = Array.isArray(resumeData?.skills) ? resumeData.skills : [];

  if (!skills.length) {
    return (
      <section className="card" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-bold mb-2">Skills</h2>
        <div className="text-gray-500">Add skills in <code>src/data/resumeData.js</code>.</div>
      </section>
    );
  }

  return (
    <section className="card" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-2xl font-bold mb-2">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-2">
        {skills.map((s, i)=> (
          <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.3, delay:i*0.03}} className="bg-white border rounded-lg px-3 py-2 font-semibold">
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
