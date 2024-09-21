import Link from 'next/link'
import { formatAmount } from '../utils/stripe'
import Image from 'next/image'

const ProductCard = ({item, index}) => {
    return (
        <Link href={`/products/${item.id}`} className='w-full sm:w-64 h-62 bg-white rounded-border border-gray-200 hover:cursor-pointer hover:shadow-xl'>
            <Image priority={index == 0} src={item.images[0]} width={160} height={160}  alt="" className='w-full h-40' />
            <div className='flex justify-between p-2'>
                <div>
                    <h1 className="font-bold text-gray-800">{item.name}</h1>
                    <p className="w-40 truncate text-gray-600">{item.description}</p>
                </div>
                <div className="text-green-700 shadow-sm font-bold py-2">{formatAmount(item.default_price.unit_amount)}</div>
            </div>
        </Link>
    )
}

export default ProductCard