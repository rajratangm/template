import { IPostDocument } from '@/models/post.model'
import Image from 'next/image'
import React from 'react'

const PostContent = ({ post }: { post: IPostDocument }) => {
  return (
    <div className='my-3'>
      <p className='my-3 px-4'>{post?.description}</p>
   
    </div>
  )
}

export default PostContent