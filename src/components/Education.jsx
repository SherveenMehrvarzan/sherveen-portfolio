import React from 'react'
import { resumeData } from '../data/resumeData'

export default function Education(){
  return (
    <section id="education" className="card" aria-labelledby="education-heading">
      <h2 id="education-heading" className="text-2xl font-bold mb-2">Education</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {resumeData.education.map((ed, i)=> (
          <div key={i} className="bg-white border rounded-lg p-3">
            <div className="font-semibold">{ed.school}</div>
            <div className="text-sm text-gray-600">{ed.degree}</div>
            <div className="text-sm">{ed.period}</div>
            {ed.notes ? <div className="text-sm text-gray-700 mt-1">{ed.notes}</div> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
