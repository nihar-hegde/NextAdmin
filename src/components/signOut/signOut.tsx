"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

const SignOut = () => {
  return (
    <Button variant={'destructive'} onClick={()=>signOut()}>Sign Out</Button>
  )
}

export default SignOut