import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { Input } from './ui/input'

const PostInput = ({user}:{user:any}) => {
  return (
    <div className='bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg '>
        <div className='flex items-center gap-3'>
            <ProfilePhoto src={user?.imageUrl}/>
            <Input
            type='text'
            placeholder='start a post'
            className=''
            />

        </div>


      
    </div>
  )
}

export default PostInput
