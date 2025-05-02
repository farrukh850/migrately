import React from "react"
import { Link } from "react-router-dom"
import CommonHeading from "../common/CommonHeading"
function AiPowered() {
  return (
    <div className="pb-10 pt-25 lg:pb-[146px]">
        <div className="container">
            <CommonHeading heading="AI-Powered Immigration Case Management" para="Migrately simplifies case preparation with automated document collection, AI-assisted drafting, and client management tools. Focus on legal strategy while Migrately handles the administrative workload." />
            <div className="grid grid-cols-12 items-stretch min-h-[497px] h-full mt-10.5 shadow-[0px_30.503px_40.371px_18.84px_rgba(62,82,198,0.07)] rounded-xl">
                <div className="col-span-12 lg:col-span-6 flex flex-col p-5 lg:py-22 lg:pl-22 lg:pr-15">
                    <h2 className="text-2xl lg:text-[32px] text-[#232857] leading-[140%] tracking-[-0.64px] font-bold">Comprehensive Client & Case Management</h2>
                    <p className="text-base text-[#484E86] leading-[130%] tracking-[-0.32px] mt-2">Managing clients and their cases has never been easier. Migrately provides an AI-driven assistant, secure client portals, and seamless progress tracking to keep both attorneys and clients informed every step of the way.</p>
                    <div className="flex flex-col gap-2.5 my-6.5">
                        <div className="flex gap-1.5 items-centers py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px] mt-2">AI-powered case drafting that saves 90% of your time</p>
                        </div>
                        <div className="flex gap-1.5 items-centers py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px] mt-2">Secure client portals for document uploads and communication</p>
                        </div>
                        <div className="flex gap-1.5 items-centers py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px] mt-2">Automated task tracking and real-time progress updates</p>
                        </div>
                    </div>
                    <div className="">
                        <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-[#0E33C0] border border-[#0E33C0] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-white shadow-[0px_0px_28.02px_0px_#0000003B]">Get Started</Link>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 bg-[rgba(62,82,198,0.07)] lg:pl-[79px] lg:pt-[47px] lg:pr-4 p-5">
                    <img src="/images/immigration-image.svg" className="w-full h-full object-contain" alt="Immigration Image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AiPowered