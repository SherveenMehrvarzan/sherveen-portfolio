import React, { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container py-2 flex items-center">
        <div className="hidden md:flex gap-2 ml-auto">
          <a className="px-3 py-2 hover:bg-blue-700 rounded-lg" href="#about">About</a>
          <a className="px-3 py-2 hover:bg-blue-700 rounded-lg" href="#skills">Skills</a>
          <a className="px-3 py-2 hover:bg-blue-700 rounded-lg" href="#timeline">Experience</a>
          <a className="px-3 py-2 hover:bg-blue-700 rounded-lg" href="#education">Education</a>
        </div>
        <button className="md:hidden ml-auto px-2 py-1 rounded hover:bg-blue-700" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden container pb-2 space-x-3">
          <a onClick={()=>setOpen(false)} className="inline-block px-3 py-2 hover:bg-blue-700 rounded-lg" href="#about">About</a>
          <a onClick={()=>setOpen(false)} className="inline-block px-3 py-2 hover:bg-blue-700 rounded-lg" href="#skills">Skills</a>
          <a onClick={()=>setOpen(false)} className="inline-block px-3 py-2 hover:bg-blue-700 rounded-lg" href="#timeline">Experience</a>
          <a onClick={()=>setOpen(false)} className="inline-block px-3 py-2 hover:bg-blue-700 rounded-lg" href="#education">Education</a>
        </div>
      )}
    </nav>
  )
}
