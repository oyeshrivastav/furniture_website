'use client'
import { MinusIcon, PlusIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../utils/useCart'
import { formatAmount } from '../../utils/stripe'
import { handleCheckout } from '../../services/checkout-cart'
import toast from 'react-hot-toast'

const CartPage = () => {
  const { cartCount, cartItems, cartTotal, incrementCartItems, decrementCartItems, deleteAllItems, deleteById } = useCart()

  const cardCheckout = async () => {
    try {
      const body = cartItems.map(item => {
        return {
          price: item.price_id,
          quantity: item.quantity
        }
      })
      const url = await handleCheckout(body)
      console.log(url)
    } catch (err) {
      toast.error('Checkout failed')
    }
  }

  return (
    <div className='m-5 px-4 md:px-10 lg:px-20'>
      {cartCount > 0 ? (
        <>
          <h2 className='text-2xl md:text-3xl font-medium'>Cart Items: {cartCount}</h2>
          <button className='text-orange-600 mt-2 flex items-center font-bold gap-1 hover:text-red-600 hover:cursor-pointer' onClick={deleteAllItems}>
            Clear all <TrashIcon className='w-4 h-4' />
          </button>
        </>
      ) : (
        <>
          <h2 className='text-3xl md:text-4xl font-semibold'>Your shopping cart is empty!</h2>
          <Link href="/products" className='text-amber-700 text-lg md:text-xl mt-1 underline'>Shop here</Link>
        </>
      )}
      {cartCount > 0 && (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className='flex flex-col md:flex-row justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg'>
              <Link href={`/products/${item.id}`} className='flex items-center mb-4 md:mb-0'>
                <Image priority src={item.image} width={80} height={80} alt="" className='w-20 h-auto' />
                <p className='font-semibold text-lg md:text-xl ml-2'>{item.name}</p>
              </Link>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <div className='flex items-center gap-3'>
                  <button
                    disabled={item.quantity === 1}
                    className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'
                    onClick={() => decrementCartItems(item.id)}
                  >
                    <MinusIcon className='w-5 h-5' />
                  </button>
                  <p className='font-semibold text-lg md:text-xl'>{item.quantity}</p>
                  <button
                    className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white'
                    onClick={() => incrementCartItems(item.id)}
                  >
                    <PlusIcon className='w-5 h-5' />
                  </button>
                </div>
                <p className='text-lg md:text-xl whitespace-nowrap'>
                  X <span className='font-semibold'>{formatAmount(item.price)}</span>
                </p>
                <button
                  className='text-orange-500 hover:text-red-600'
                  onClick={() => deleteById(item.id)}
                >
                  <XCircleIcon className='w-5 h-5' />
                </button>
              </div>

            </div>
          ))}

          <div className='flex flex-col items-end border-t py-4 mt-8'>
            <p className='text-lg md:text-xl'>
              Total <span className='font-bold text-green-500'>{cartTotal}</span>
            </p>
            <button className='mt-4 py-2 px-4 md:py-2 md:px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md' onClick={cardCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
