import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import ShareBtn from '../../../components/ShareBtn'
import AddToCart from '../../../components/AddToCart'
import { getProductbyId, getProducts } from '../../../services/productService'
import { formatAmount } from '../../../utils/stripe'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const dynamic = "force-dynamic"

// export async function generateStaticParams() {
//   const products = await getProducts()
//   const slugs = products.data.map(item => ({ slug: item.id }))
//   return slugs
// }

export async function generateMetadata({ params: { slug } }) {
  const product = await getProductbyId(slug)
  if(!product){
    notFound()
  }
  return {
    title: `Furniture | ${product.name}`
  }
}
const Product1 = async ({ params: { slug }}) => {
  console.log("individual product page returned", slug)
  const product = await getProductbyId(slug)

  const clientProduct={
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.default_price.unit_amount,
    price_id: product.default_price.id,
    currency: 'INR',
    image: product.images[0]
  }
  return (
    <div className='m-2 px-10'>
      <div className='flex justify-around items-center flex-wrap'>
        <div className='w-80 h-80'>
          <Image priority src={product.images[0]} width={320} height={320}  alt="" className='w-full h-auto bg-white' />
        </div>
        <div className='max-w-md border rounded-md shadow-lg p-6 bg-white'>
          <h2 className='text-3xl font-semibold'>{product.name}</h2>
          <div className='flex pt-2 gap-2 items-center'>
            <CheckIcon className='text-lime-500 w-5 h-5' />
            <span className='font-semibold'>In stock</span>|<ShareBtn />
          </div>
          <div className='mt-4 border-t pt-4'>
            <p className='text-gray-500'>Price</p>
            <p className='text-xl font-semibold'>{formatAmount(product.default_price.unit_amount)}</p>
          </div>
          <AddToCart product={clientProduct}/>
        </div>
      </div>
      <p className='mt-8'>{product.description}</p>
    </div>
  )
}

export default Product1