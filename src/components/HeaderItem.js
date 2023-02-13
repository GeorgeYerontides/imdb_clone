import Link from 'next/link'
import React, { Fragment } from 'react'

const HeaderItem = (props) => {
  return (
    <Fragment>
        <Link href={props.address} className='mx-4 lg:mx-6 hover:text-amber-600' >
            <props.icon className='text-2xl sm:hidden' />
            <p className='hidden sm:inline my-2 text-sm'>{props.title}</p>
        </Link>
    </Fragment>
  )
}

export default HeaderItem