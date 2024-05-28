"use client"
import React from 'react'
import { Rubik } from "next/font/google";
import { ChevronDown, Globe, Grid2x2, HelpCircle, LogIn, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './logo';
import { SignUpForm } from '@/components/web/auth/signup-form';
import { LoginForm } from '@/components/web/auth/login-form';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const session = useSession()
  return (
    <div className='w-full flex justify-between px-8 border-b-[5px] border-b-cyan-600 h-16'>
      <div className="flex items-center gap-10">
        <Logo />
        <div className="px-4 h-full items-center border-s-2 border-e-2 gap-3 cursor-pointer hidden md:flex ">
          <Grid2x2 size={18} />
          <span className='font-extrabold text-gray-700'>All Tools</span>
          <ChevronDown size={22} />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="gap-4 hidden lg:flex ">
          <div className="px-4 h-full py-2 flex flex-col items-center border-e-2 justify-center cursor-pointer">
            <Tag className='rotate-90' />
            <span className='font-extrabold text-gray-700'>Pricing</span>
          </div>
          <div className="px-4 h-full py-2 flex-col flex items-center border-e-2 justify-center cursor-pointer">
            <HelpCircle />
            <span className='font-extrabold text-gray-700'>Help</span>
          </div>
          <div className="px-4 h-full py-2 flex-col flex items-center border-e-2 justify-center cursor-pointer">
            <Globe />
            <span className='font-extrabold text-gray-700'>EN</span>
          </div>
        </div>
        {session.status !== "loading" && <div className="flex items-center gap-4 px-3 lg:px-10">
          {session.status === "authenticated" ? (
            <Button className='bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full py-4 text-lg' onClick={ () =>  signOut({
              redirect: true,
            })}>SignOut</Button>
          ) : (
            <>
              <LoginForm />
              <SignUpForm />
            </>
          )}
        </div>}
      </div>
    </div>
  )
}

export default Header