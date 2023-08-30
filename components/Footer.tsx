import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image 
          src='/logo-purple.svg'
          width={115}
          height={38}
          alt='incredibbble'
          />
          <p className='text-start text-sm mt-5 max-w-xs font-normal'>
            Incredibbble is the worlds leading commulutyu in 
          </p>
            
          
        </div>
      </div>
    </footer>

  )
}

export default Footer