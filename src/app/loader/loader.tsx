'use client'

import { SignInButton } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

interface FullScreenLoaderProps {
  message?: string
}

export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-background">
      <div className="text-center px-14 p-8 shadow-2xl flex flex-col justify-center items-center bg-black rounded-xl text-white">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="mt-4 text-lg  text-foreground font-bold text-white">Please Wait</p>
      </div>
    </div>
  )
}

