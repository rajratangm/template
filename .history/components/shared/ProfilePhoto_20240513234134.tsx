import React from 'react'
import Image from 'next/image'

const ProfilePhoto = ({src}:{src:String}) => {
  return (
    <div>
        <Image
        src={src}
        alt= 'Profile Photo'
        />
      
    </div>
  )
}

export default ProfilePhoto
