import React from "react"
import { Link } from "react-router-dom"
function Banner() {
  return (
    <div className="relative">
        <div className="mt-25 lg:mt-[calc(113px+82px)] flex items-center justify-center flex-col max-w-[722px] w-full mx-auto text-center relative z-100 px-5 lg:px-0">
        <h1 className="text-3xl lg:text-5xl leading-[150%] tracking-[-2%] text-[#232857] mb-2">Cut Case Preparation Time for O1, EB‑1A & EB2-NIW by <b className="font-black">90%</b> Using AI</h1>  
        <p className="text-lg leading-[140%] tracking-[-2%] text-[#232857]">Generate AI draft cases in minutes, streamline document collection, and manage clients effortlessly with Migrately.</p>
        <div className="items-center gap-2.5 xl:flex hidden mt-6">
          <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-[#0E33C0] border border-[#0E33C0] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-white shadow-[0px_0px_28.02px_0px_#0000003B]">Get Started</Link>
          <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-white border border-[rgba(72,78,134,0.2)] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-[#232857] hover:border-[#232857] hover:text-[#232857]">Schedule a call</Link>
        </div>
        </div>
        <img src="/images/migrately-chat.gif" alt="Chat Gif" className="z-50 relative" />
        <div className="absolute left-0 top-[30%] w-full h-full lg:w-[500px] lg:h-[400px] z-1 lg:z-50">
          <img src="/images/glow-1.svg" className="w-full h-full object-cover" alt="Glow" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full lg:w-[500px] lg:h-[400px] z-1 lg:z-50">
          <img src="/images/glow-2.svg" className="w-full h-full object-cover" alt="Glow" />
        </div>
    </div>
  )
}

export default Banner