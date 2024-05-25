import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='text-center'>
        <h1 className='text-xl font-bold'>Not Found</h1>
        <Link href="/">Volver al Home</Link>
    </div>
  )
}

export default NotFound