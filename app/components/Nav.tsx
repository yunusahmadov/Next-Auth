'use client'
import React from 'react'
import Link from "next/link"
import { useSession,signIn,signOut } from 'next-auth/react'
function Nav() {
  const session=useSession()

  console.log(session);
  
  return (
   <nav>
    <Link href={'/'}>
    Home
    </Link>
    {/* <Link href={'/api/auth/signin'}>
    Signin
    </Link> */}
    {session.data && (
      <Link href={"/profile"}>Profile</Link>
    )}
    {
      session.data ? 
      <Link href="" onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</Link>:<Link href={'/api/auth/signin'}>Sign In</Link>
    }
   </nav>
  )
}

export default Nav