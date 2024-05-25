import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-slate-300 mb-4 flex justify-between items-center px-5 p-4 font-bold text-black'>
        <Link href="/">
            Home
        </Link>

        <ul>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar