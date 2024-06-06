'use client'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOut = ({title,icon}:{title:string,icon:React.ReactNode}) => {
  return (
    <Button  className='w-32 bg-yellow-500 font-semibold  flex gap-4'
    onClick={() =>
      signOut({ callbackUrl: '/', redirect:true })
    }
  >
    {title}
    {icon}
  </Button>
  )
}

export default SignOut