import React from "react"

function WorkSmarter() {
  return (
    <div className="py-10 lg:py-[108px] bg-white border-b border-[#BABFD2]">
        <div className="container">
            <div className="flex flex-col gap-2">
                <small className="text-base leading-[130%] tracking-[-0.32px] text-[#232857]">Our Core Values for Lawyers</small>
                <h4 className="text-xl lg:text-[32px] leading-[130%] tracking-[-0.64px] text-[#232857] font-bold">Helping You Work Smarter, Not Harder</h4>
            </div>
            <div className="grid grid-cols-12 items-stretch gap-3 mt-12.5">
                <div className="col-span-12 lg:col-span-4 p-10.5 rounded-xl border border-[#DFE2FF]">
                    <h5 className="mb-2.5 leading-normal text-lg font-bold text-[#232857]">Efficiency Through AI</h5>
                    <p className="mb-2.5 leading-[130%] text-base text-[#232857] tracking-[-0.32px]">Automate case drafting & document management in minutes, freeing up your time for strategy & client advocacy.</p>
                </div>
                <div className="col-span-12 lg:col-span-4 p-10.5 rounded-xl border border-[#DFE2FF]">
                    <h5 className="mb-2.5 leading-normal text-lg font-bold text-[#232857]">Accuracy & Compliance</h5>
                    <p className="mb-2.5 leading-[130%] text-base text-[#232857] tracking-[-0.32px]">AI-powered compliance checks ensure error-free documentation that meets the latest immigration requirements.</p>
                </div>
                <div className="col-span-12 lg:col-span-4 p-10.5 rounded-xl border border-[#DFE2FF]">
                    <h5 className="mb-2.5 leading-normal text-lg font-bold text-[#232857]">Client-Centered Service</h5>
                    <p className="mb-2.5 leading-[130%] text-base text-[#232857] tracking-[-0.32px]">Transparent communication, real-time updates, and a seamless experience to keep your clients informed and satisfied.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkSmarter