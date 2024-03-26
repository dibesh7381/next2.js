import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
   
      <div className="bg-gray-800 h-[100px] sticky top-0 flex items-center gap-5">
       <Link href="/"><img className="w-[100px]" src="https://www.tailorbrands.com/wp-content/uploads/2020/03/Tailor-brands-White-transparent.png"></img></Link> 
        <ul className="flex items-center gap-7 text-white ">
        <Link href="/"><li className='hover:underline underline-offset-8 decoration-gray-200 hover:text-blue-400'>Form an LLC</li></Link>
        <Link href="/logomaker"><li className='hover:underline underline-offset-8 decoration-orange-200 hover:text-blue-400'>Logo Maker</li></Link>
        <Link href="/products"><li className='hover:underline underline-offset-8 decoration-green-200 hover:text-blue-400'>Products</li></Link>
        <Link href="/Blog"><li className='hover:underline underline-offset-8 decoration-purple-200 hover:text-blue-400'>Blog</li></Link>
        <Link href="/about"><li className='hover:underline underline-offset-8 decoration-pink-200 hover:text-blue-400'>About</li></Link>
        <Link href="/support"><li className='hover:underline underline-offset-8 decoration-red-200 hover:text-blue-400'>Support</li></Link>
        </ul>
     </div>
    
  )
}

export default Navbar
