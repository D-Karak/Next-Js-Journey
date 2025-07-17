import React from 'react'
import { SignIn } from '@clerk/nextjs'
const page = () => {
  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
    <SignIn />
    </div>
  )
}

export default page