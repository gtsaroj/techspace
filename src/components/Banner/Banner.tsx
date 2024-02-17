import React from 'react'

const Banner: React.FC = () => {
  return (
      <div className=' flex flex-col gap-16 justify-center items-baseline pl-10 bg-[var(--primary-bg)] bg-[url("/public/photos/622.png")] bg-no-repeat bg-contain bg-right sm:h-[70vh] h-[50vh]'>
          
          <div>
              <h3 className='text-[var(--light-text)] text-4xl'>Wecome to <span>Techspace</span></h3>
              <h3 className='text-[var(--light-text)]'>We provide Web development services</h3>
          </div>
          <div className='flex gap-3'>
              <button className='w-[100px]  text-[var(--light-background)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]'>Join Us</button>
              <button className='w-[100px]  text-[var(--light-background)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]'>Contact Us</button>
          </div>
</div>
  )
}

export default Banner