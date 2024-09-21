'use client'
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../utils/useCart';

const AddToCart = ({product}) => {
  const {addItem} = useCart()
  const handleAddCart =()=>{
    addItem(product)
    toast.success(`${product.name} Item added to cart`)
    }
  return (
    <div>
    <button onClick={handleAddCart} className='w-full mt-4 py-2 px-6 bg-orange-500 text-white rounded-md hover:text-orange-500 hover:bg-blue-300'>Add To Cart</button>
    <Toaster/>
    </div>
  )
}

export default AddToCart