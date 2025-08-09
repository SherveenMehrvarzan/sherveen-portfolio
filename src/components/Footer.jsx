import React from 'react'
export default function Footer(){
  return (
    <footer className="text-center text-sm text-gray-500 py-10">
      © <span id="y">{new Date().getFullYear()}</span> Sherveen Mehrvarzan
    </footer>
  )
}
