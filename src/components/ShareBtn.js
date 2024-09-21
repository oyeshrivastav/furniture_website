'use client'
import {ShareIcon} from '@heroicons/react/24/solid'
import toast, { Toaster } from 'react-hot-toast'
const ShareBtn = () => {
  const handleShare =()=>{
    navigator.clipboard.writeText(window.location.href)
    toast.success('Copied')
  }
  return (
    <>
    <button className="text-orange-400 font-bold inline-block hover:cursor-pointer hover:text-red-600" onClick={handleShare}><ShareIcon className='h-5 mr-2 inline-block'/> Share Link</button>
    <Toaster/>
    </>
  )
}

export default ShareBtn