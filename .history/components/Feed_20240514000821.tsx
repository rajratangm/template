import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className='flex-1 border border'>
        <PostInput/>
        <Posts/>
    </div>
  )
}

export default Feed
