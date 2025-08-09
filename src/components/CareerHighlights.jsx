import React from 'react'
import { resumeData } from '../data/resumeData'

export default function CareerHighlights(){
  return (
    <section className="card" aria-label="Career highlights">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Career highlights</h2>
        <div className="text-sm text-gray-500">Click a card to jump to details</div>
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2 snap-x">
        {resumeData.highlights.map(h => (
          <button key={h.id} onClick={()=>{
            const el = document.getElementById(h.id);
            if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}) }
          }}
            className="min-w-[220px] w-[220px] snap-center card text-left hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden">
              <img src={h.logo} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="font-semibold mt-2">{h.role}</div>
            <div className="text-xs text-gray-600">{h.period}</div>
            <div className="text-sm text-gray-700 mt-1">{h.blurb}</div>
          </button>
        ))}
      </div>
    </section>
  )
}
