import React from 'react'

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
