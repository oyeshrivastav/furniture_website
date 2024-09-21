import ProductCard from '../components/ProductCard';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';
import { getProducts } from '../services/productService';

export const dynamic = "force-dynamic"

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const Page = async() => {
  console.log("home page returned")
  const products = await getProducts(4)
  return (
    <div>
      <div className="text-center pt-20">
        <h1 className={`text-blue-950 text-3xl font-bold ${dancingScript.className}`}>Indias most loved{' '}<span className="text-orange-500">Furniture</span> platform for home{' '}<span className="text-rose-500">Essentials</span></h1>
      </div>
      <div className="m-4 mt-28 flex flex-wrap gap-10 justify-center">
        {products.data.map((item,index)=><ProductCard key={item.id} item={item} index={index}/>)}
      </div>
      <Link href="/products" className="inline-block text-orange-400 p-4 font-bold hover:underline">
        View All{">"}
      </Link>
    </div>
  );
};

export default Page;
