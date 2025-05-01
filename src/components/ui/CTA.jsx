import React from "react"

function CTA() {
  return (
    <div className="mt-5 lg:mt-30">
        <div className="container">
           <div className="py-10 lg:py-16 px-5 lg:pl-24 lg:pr-33.5 rounded-[20px] bg-[#0E33C0] flex lg:items-center justify-between flex-col lg:flex-row items-start gap-5 lg:gap-0">
                <div className="flex flex-col gap-6">
                    <h5 className="text-2xl lg:text-[40px] tracking-[-0.8px] leading-[130%] text-white font-semibold">Transform Your <br /> Immigration Law Practice</h5>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <img src="/images/check-white.svg" alt="White Check" />
                            <p className="text-sm text-white leading-[150%]">First case for free</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/check-white.svg" alt="White Check" />
                            <p className="text-sm text-white leading-[150%]">Cancel anytime</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="w-[204px] h-[62px] bg-white flex items-center justify-center rounded-lg text-xl leading-[150%] tracking-[-0.4px] text-[#0E33C0]">Free Sign Up</a>
           </div>
        </div>
    </div>
  )
}

export default CTA