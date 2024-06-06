import AddExpense from '@/components/AddExpense'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';




export default async function AddTransaction() {
  const session = await getServerSession(authOptions)

  if(!session) {
    redirect('/')
  }

  return (
    <main className='container pt-32' >
      <h1 className='text-5xl text-center'>Add Transaction</h1>
      <div className='pt-12'>
      <AddExpense/>
      </div>
    </main>
  )
}
