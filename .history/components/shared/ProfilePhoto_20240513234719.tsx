import React from 'react'
import Image from 'next/image'

const ProfilePhoto = ({src}:{src:string}) => {
  return (
    <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  )
}

export default ProfilePhoto
