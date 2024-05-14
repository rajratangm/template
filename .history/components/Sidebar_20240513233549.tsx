import React from 'react'
import Image from 'next/image'


const Sidebar = ({user}:{user:any}) => {
  return (
    <div className='hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded'>
      <div className='flex relative flex-col items-center'>
        <div className='w-full h-16 overflow-hidden'>
            {
                user &&(
                    <Image
                    src={}
                    />
                )
            }

        </div>

      </div>
    </div>
  )
}

export default Sidebar
