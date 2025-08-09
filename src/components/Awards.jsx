import React from 'react'
import { resumeData } from '../data/resumeData'
import { motion } from 'framer-motion'

export default function Awards(){
  return (
    <aside className="card" id="awards" aria-labelledby="awards-heading">
      <h2 id="awards-heading" className="text-2xl font-bold mb-2">Awards</h2>
      <ul className="space-y-2">
        {resumeData.awards.map((a, i)=> (
          <motion.li key={i} initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.3}} className="bg-white border rounded-lg px-3 py-2 text-gray-700">
            {a}
          </motion.li>
        ))}
      </ul>
    </aside>
  )
}
