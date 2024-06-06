'use client'
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

const SignIn = ({title}:{title:string}) => {
  return (
    <Button className='w-48 bg-yellow-500 font-bold text-lg'
    onClick={() =>
      signIn('github', { callbackUrl: '/dashboard/monthly-goal' })
    }
  >
    {title}
  </Button>
  )
}

export default SignIn