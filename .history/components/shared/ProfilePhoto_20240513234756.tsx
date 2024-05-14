import React from 'react'
import Image from 'next/image'

const ProfilePhoto = ({src}:{src:string}) => {
  return (
    <Avatar>
    <AvatarImage src={src} alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  )
}

export default ProfilePhoto
