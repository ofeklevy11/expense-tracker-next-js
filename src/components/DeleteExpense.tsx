'use client'
import React from 'react'
import { Button } from './ui/button'
import { FaTrash } from 'react-icons/fa'
import { deleteExpense } from '@/app/actions/action'

const DeleteExpense = ({id}: {id:number}) => {
  return (
    <Button onClick={() => deleteExpense(id)} className='flex items-center gap-2 ' variant='destructive'>Delete <FaTrash />
    </Button>
  )
}

export default DeleteExpense