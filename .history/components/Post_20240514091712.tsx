"use client"
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { useUser } from '@clerk/nextjs'

const Post = () => {

    const user = useUser();

  return (
    <div className='bg-white my-2 rounded-lg border-gray-300'>
      <div className='flex gap-2 p-4'>
        <ProfilePhoto src={user?.user.}/>

      </div>
    </div>
  )
}

export default Post
