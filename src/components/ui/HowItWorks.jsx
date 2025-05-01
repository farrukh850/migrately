import React from "react"
import { Link } from "react-router-dom"
import CommonHeading from "../common/CommonHeading"
function HowItWorks() {
  return (
    <div className="py-10 lg:py-[117px] bg-[#F1F3FB]">
        <div className="container">
            <CommonHeading heading="How it works" para="Automate case drafting, streamline document collection, and manage clients effortlessly with Migrately." />
            <div className="grid grid-cols-12 items-stretch min-h-[497px] h-full mt-10.5 shadow-[0px_30.503px_40.371px_18.84px_rgba(62,82,198,0.07)] rounded-xl">
                <div className="col-span-12 lg:col-span-6 flex flex-col p-5 lg:py-22 lg:pl-22 lg:pr-15 bg-[#fff]">
                    <h2 className="text-2xl lg:text-[32px] text-[#232857] leading-[140%] tracking-[-0.64px] font-bold">Automate Client Intake & Document Collection</h2>
                    <p className="text-base text-[#484E86] leading-[130%] tracking-[-0.32px] mt-2">No more chasing clients for information. Migrately provides a seamless intake system where clients upload their data directly, reducing admin work for your firm.</p>
                    <div className="flex flex-col gap-2.5 my-6.5">
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Automated client questionnaires</p>
                        </div>
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Secure document uploads and storage</p>
                        </div>
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Organized client dashboards for easy tracking</p>
                        </div>
                    </div>
                    <div className="">
                        <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-[#0E33C0] border border-[#0E33C0] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-white shadow-[0px_0px_28.02px_0px_#0000003B]">Get Started</Link>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 bg-[#F3F5FC] relative flex items-end justify-center">
                    <div className="w-full lg:w-[464px] h-[300px] lg:h-[504px]">
                        <img src="/images/how-it-works.svg" className="w-full h-full object-contain lg:object-cover" alt="How It Works Image" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 items-stretch min-h-[497px] h-full mt-10.5 shadow-[0px_30.503px_40.371px_18.84px_rgba(62,82,198,0.07)] rounded-xl">
                <div className="col-span-12 lg:col-span-6 bg-[#F3F5FC] relative flex items-end justify-center order-2 lg:order-1">
                    <div className="w-full lg:w-[464px] h-[300px] lg:h-[504px]">
                        <img src="/images/scale-your-practice.svg" className="w-full h-full object-contain" alt="How It Works Image" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col p-5 lg:py-22 lg:pl-22 lg:pr-15 bg-[#fff] order-1 lg:order-2">
                    <h2 className="text-2xl lg:text-[32px] text-[#232857] leading-[140%] tracking-[-0.64px] font-bold">Scale Your Practice Without Extra Overhead</h2>
                    <p className="text-base text-[#484E86] leading-[130%] tracking-[-0.32px] mt-2">Handle more cases efficiently while maintaining accuracy. Migrately helps you grow your firm without sacrificing quality or increasing workload.</p>
                    <div className="flex flex-col gap-2.5 my-6.5">
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Streamlined workflows for managing multiple cases</p>
                        </div>
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Reduced manual work, freeing time for strategic tasks</p>
                        </div>
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Improved efficiency, leading to higher client satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 items-stretch min-h-[497px] h-full mt-10.5 shadow-[0px_30.503px_40.371px_18.84px_rgba(62,82,198,0.07)] rounded-xl">
                <div className="col-span-12 lg:col-span-6 flex flex-col p-5 lg:py-22 lg:pl-22 lg:pr-15 bg-[#fff]">
                    <h2 className="text-2xl lg:text-[32px] text-[#232857] leading-[140%] tracking-[-0.64px] font-bold">Case Prep with Migrately's AI Assistant</h2>
                    <p className="text-base text-[#484E86] leading-[130%] tracking-[-0.32px] mt-2">Prepare complete O-1 and EB-1A immigration cases faster. Instantly check criteria, draft petitions, organize evidence, and auto-fill USCIS forms—all within a single, easy-to-use dashboard.</p>
                    <div className="flex flex-col gap-2.5 my-6.5">
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Instant Case Guidance via AI Immigration Assistant</p>
                        </div>
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">Secure Document Intake and AI Case Drafting</p>
                        </div>
                        <div className="flex gap-1.5 items-center py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px">One-Click LoR & USCIS Forms (I-129) </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 bg-[#F3F5FC] relative flex items-end justify-center">
                    <div className="w-full lg:w-[464px] h-[300px] lg:h-[504px]">
                        <img src="/images/case-prep.svg" className="w-full h-full object-contain" alt="Case Prep Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks