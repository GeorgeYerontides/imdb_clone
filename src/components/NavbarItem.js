'use client'

import Link from 'next/link'
import React from 'react'
import {useSearchParams } from 'next/navigation'
const NavbarItem = (props) => {

  const searchParams =  useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div className='mx-2'>
        <Link href={`/?genre=${props.param}`}  className={`m-4 hover:text-amber-600 font-semibold p2 ${
            genre && 
            genre === props.param && 
            'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        }`} >{props.title}</Link>
    </div>
  )
}

export default NavbarItem