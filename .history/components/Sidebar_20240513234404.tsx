import React from 'react'
import Image from 'next/image'
import ProfilePhoto from './shared/ProfilePhoto'


const Sidebar = ({user}:{user:any}) => {
  return (
    <div className='hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded'>
      <div className='flex relative flex-col items-center'>
        <div className='w-full h-16 overflow-hidden'>
            {
                user &&(
                    <Image
                    src={'/banner.jpg'}
                    alt="Banner"
                    width={200}
                    height={200}
                    className='w-full h-full rounded-t'
                    />
                )
            }

        </div>
        <div className='my-1 absolute top-10'>
            <ProfilePhoto src={user? user?.imgUrl : '/'}/>
           
        </div>

      </div>
    </div>
  )
}

export default Sidebar
