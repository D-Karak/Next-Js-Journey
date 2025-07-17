import React from 'react'
import { SignUp } from '@clerk/nextjs'
const page = () => {
  return (
    <div style={{paddingTop:'50px', display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
        <SignUp />
        </div>
  )
}

export default page