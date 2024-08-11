import React from 'react'
import { AlignLeft, ShoppingCart } from 'lucide-react';
import SheetComponent from './SheetComponent';
import Cart from './Cart';
const Navbar = () => {
  
  return (
    <>
     <div className="fixed flex justify-between items-center py-2 w-screen shadow border-b border-slate-300 px-10 bg-green-500 z-5">
        <div className="px-3"><p className='text-lg font-bold'>Plants Pro</p></div>
        <Cart/>
        </div> 
    </>
  )
}

export default Navbar
