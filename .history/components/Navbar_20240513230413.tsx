import React from 'react'
import Image from 'next/image'; // Add this line
import SearchInput from './SearchInput';
import NavItems from './NavItems';
import { UserButton } from '@clerk/nextjs';
import { SignedIn } from '@clerk/clerk-react';


const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-50'>
      <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
        <div className='flex items-center gap-2'>
        <Image
                        src={'/LinkedIn_logo.png'}
                        alt="Logo"
                        width={35}
                        height={35}
                    />
                    <div>
                      <SearchInput/>
                    </div>
        </div>
        <div className='flex items-center gap-5'>
          <div>
            <NavItems/>
          </div>
          <div>
            <SignedIn/>
            <UserButton/>
          </div>


        </div>

      </div>
      
    </div>
  )
}

export default Navbar
