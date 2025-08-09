import React from 'react'
import { resumeData } from '../data/resumeData'

export default function Header(){
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-gray-200">
      <div className="container py-3 flex items-center gap-3">
        <img src="/portrait.jpg" alt="Portrait" className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
        <div>
          <div className="font-extrabold text-blue-700">Sherveen Mehrvarzan</div>
          <div className="text-sm text-gray-600">{resumeData.title}</div>
        </div>
        <div className="ml-auto flex gap-2">
          <a className="btn" href={`mailto:${resumeData.email}`}>Email</a>
          <a className="btn-solid" href={resumeData.links.resume} download>Download Résumé</a>
        </div>
      </div>
    </header>
  )
}
