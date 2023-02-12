import React from 'react'
import MenuItem from './MenuItem';
import {AiFillHome,AiFillInfoCircle} from 'react-icons/ai'
import Link from 'next/link';
import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-2'>
        <div className="flex">
            <MenuItem title='HOME' address='/' icon={AiFillHome} />
            <MenuItem title='ABOUT' address='/about' icon={AiFillInfoCircle} />
        </div>
        <div className="flex items-center space-x-5 mr-2">
            <DarkMode />
            <Link href='/'>
                <h2 className='text-2xl'>
                    <span className='font-bold bg-amber-400 py-1 px-2 rounded-lg mr-1'>IMDb</span>
                    <span >Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}
export default Header;