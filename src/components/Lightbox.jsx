import React, { useEffect } from 'react'

export default function Lightbox({ img, onClose }){
  useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
      <img src={img} alt="Preview" className="max-w-[92%] max-height-[92%] rounded-xl shadow-2xl" onClick={(e)=>e.stopPropagation()} />
    </div>
  )
}
