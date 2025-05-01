import React from 'react'

function CommonHeading({ heading, para }) {
  return (
    <div className="max-w-[544px] mx-auto text-center">
        <h1 className="text-3xl lg:text-5xl leading-[130%] tracking-[-0.96px] font-extrabold text-[#232857] mb-2">{heading}</h1>
        <p className="text-lg leading-[140%] tracking-[-0.36px] text-[#232857]">{para}</p>
    </div>
  )
}

export default CommonHeading