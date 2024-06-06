'use client'
import { FC } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  transactionCount : number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    transactionCount
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '8'

  return (
    <div className='flex justify-center my-6 gap-2'>
      <Button 
      className='bg-pink-400/80  text-lg hover:bg-pink-400/60 flex gap-3'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/dashboard/all-transactions?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
       <FaArrowLeft /> Prev page 

      </Button>

      <div className='flex items-center mx-4'>
        {page} / {Math.ceil(transactionCount / Number(per_page))}
      </div>

      <Button  
      className='bg-pink-400/80  text-lg hover:bg-pink-400/60 flex gap-3'
        
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/dashboard/all-transactions?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next page <FaArrowRight />

      </Button>
    </div>
  )
}

export default PaginationControls