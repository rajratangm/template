import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'

const PostInput = ({user}:{user:any}) => {
  return (
    <div className='bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg '>
        <div className='flex items-center gap-3'>
            <ProfilePhoto src={}/>

        </div>


      
    </div>
  )
}

export default PostInput
