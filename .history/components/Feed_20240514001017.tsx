import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'

const Feed = ({user}:{}) => {
  return (
    <div className='flex-1'>
        <PostInput/>
        <Posts/>
    </div>
  )
}

export default Feed
