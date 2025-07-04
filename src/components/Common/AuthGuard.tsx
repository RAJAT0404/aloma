// components/AuthGuard.tsx
'use client'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { RootState } from '@/Store'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/sign-in') // redirect if not logged in
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) return null // or loading spinner

  return <>{children}</>
}
