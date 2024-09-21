'use client'
import Link from 'next/link'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { useCart } from '../utils/useCart'
const Navbar = () => {
  const {cartCount} = useCart()
  return (
    <nav className='bg-gradient-to-r from-cyan-100 to-blue-100 p-1 flex justify-between'>
      <Link href="/" className='text-amber-700 text-3xl font-extralight'>furniture</Link>
      <Link href="/cart" className='text-amber-700 px-4 py-2 font-bold hover:text-red-400 cursor-pointer'>
        <ShoppingCartIcon className='w-7 h-7 inline-block'/> cart
        <span>({cartCount})</span>
      </Link>
    </nav>
  )
}

export default Navbar