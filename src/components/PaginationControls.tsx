'use client'
import { FC } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

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
      className='bg-pink-400/80 font-semibold text-lg hover:bg-pink-400/70'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/dashboard/all-transactions?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        prev page
      </Button>

      <div className='flex items-center mx-4'>
        {page} / {Math.ceil(transactionCount / Number(per_page))}
      </div>

      <Button  
      className='bg-pink-400/80 font-semibold text-lg hover:bg-pink-400/60'
        
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/dashboard/all-transactions?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        next page
      </Button>
    </div>
  )
}

export default PaginationControls