import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resumeData'
import Lightbox from './Lightbox'

export default function Timeline(){
  const [img, setImg] = useState(null)
  return (
    <section id="timeline" className="card" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading" className="text-2xl font-bold mb-2">Timeline of Experiences</h2>
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-1 bg-blue-600/60 rounded-full"></div>
        <div className="space-y-4 pl-10">
          {resumeData.experiences.map((e)=> (
            <motion.article
              initial={{opacity:0, y:24}}
              whileInView={{opacity:1, y:0}} viewport={{once:true}}
              transition={{duration:0.4}}
              key={e.id} id={e.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex gap-3 items-start">
                <img src={e.logo} alt="" className="w-14 h-14 rounded-lg object-contain bg-gray-100" />
                <div className="flex-1">
                  <h3 className="font-semibold">{e.role} — {e.company}</h3>
                  <p className="text-sm text-gray-600">{e.period}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-800">
                    {e.bullets.map((b, i)=> <li key={i}>{b}</li>)}
                  </ul>
                  {e.images?.length ? (
                    <div className="flex gap-3 mt-3">
                      {e.images.map((src, i)=> (
                        <img key={i} src={src} alt="Project" className="w-40 h-24 rounded-lg object-cover cursor-pointer hover:scale-105 transition" onClick={()=>setImg(src)} />
                      ))}
                    </div>
                  ): null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      {img ? <Lightbox img={img} onClose={()=>setImg(null)} /> : null}
    </section>
  )
}
