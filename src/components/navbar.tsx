import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-[#121010] border-2 border-white sticky top-0 text-white'>
        <div className='font-bold text-[34px]'>Food Mania</div>
        <ul className='flex gap-7 mr-5 '>
           <Link href={"/"}>
            <li>Home</li></Link>
           <Link href={"/about"}>
           <li>About</li> </Link>
           <Link href={"/contact"}> <li>Contact</li></Link>

        </ul>
    </nav>
  )
}

export default Navbar