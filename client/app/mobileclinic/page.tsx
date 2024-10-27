import React from 'react'

const MobileClinic = () => {
  return (
    <section>
        <div className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]">
      <div>
        <label className="mb-2 text-lg block">Large Input</label>
        <input type='text' placeholder='Large Input'
          className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500" />
      </div>
      <div>
        <label className="mb-2 text-base block">Medium Input</label>
        <input type='text' placeholder='Medium Input'
          className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500" />
      </div>
      <div>
        <label className="mb-2 text-sm block">Small Input</label>
        <input type='text' placeholder='Small Input'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" />
      </div>
    </div>
    </section>
  )
}

export default MobileClinic