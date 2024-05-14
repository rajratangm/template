import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarImage } from '../ui/avatar'

const ProfilePhoto = ({src}:{src:string}) => {
  return (
    <Avatar>
    <AvatarImage src={src} alt="banner" />
  </Avatar>
  )
}

export default ProfilePhoto
