"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { RxCaretDown, RxCaretUp } from 'react-icons/rx'
import { MdAccountCircle } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import Product from './Product'
import Home from './page'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joki Tugas',
  description: 'Buat kamu yang ga sempet ngerjain tugas, bisa joki disini.',
}

export default function RootLayout({ products }) {
  const [drop, setDrop] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='w-full shadow flex p-5 justify-between items-center fixed bg-white'>
          <h1 className='font-extrabold text-4xl bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text font-lobster'>DeStore</h1>
          <div className='font-titillium-web font-bold relative'>
            <div className='flex items-center'>
              <div className='relative flex items-center'>
              <button onClick={() => setShowCart(true)}>
                <FaShoppingCart color='salmon' className='relative p-1 rounded' size={40} />
                <div className='absolute top-0 right-0 bg-rose-500 text-white rounded-full px-2  fs'>{cart.length}</div>
              </button>
              {showCart && (
                <div className="absolute bg-white p-5 w-56 -left-28 top-10 h-auto shadow rounded-lg">
                  <button className='absolute top-0 right-0 p-2' onClick={() => setShowCart(false)}><AiOutlineCloseCircle width={50} /></button>
                  <p className='font-bold text-lg'>Product Keranjangmu</p>
                  <hr/>
                  {cart.map((product) => (
                    <div className='relative' key={product.id}>
                    {cart.length ==0 ? "Cart Masih Kosong" : ""}
                    <div className='flex flex-col'>
                      <div>{product.name}</div>
                      <div>{product.price}</div>
                      <div>Size: {product.size}</div>
                      <div>{product.quantity}</div>
                    </div>
                    </div>
                  ))}
                </div>
              )}</div>
              <button onClick={() => setDrop((prev) => !prev)} className=' rounded-lg mx-2 flex justify-between items-center'>
                <MdAccountCircle size={35} />
                <span className='mx-1 font-bold hidden md:flex'>My Account</span>
                {!drop ? (
                  <RxCaretDown size={25} />
                ) :
                  (<RxCaretUp size={25} />)
                }
              </button>
            </div>
            {drop && <div className='absolute top-10 pr-10 pl-4 pt-2 pb-2 bg-white  rounded-b-lg md:left-16 md:pr-14 border-slate-300 shadow'>
              <ul>
                <li className='my-1'>Profile</li>
                <li className='my-1'>Favorite</li>
                <hr />
                <li className='my-1'>Logout</li>
              </ul>
            </div>}
          </div>
        </nav>
        
        
        <Home />
        <Product cart={cart} products={products} addToCart={addToCart} />
        
      </body>
    </html>
  )
}
