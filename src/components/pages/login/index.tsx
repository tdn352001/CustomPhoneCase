'use client'
import LoginForm from '@/components/pages/login/login-form'
import SvgIcon from '@/components/ui/svg-icon'
import { useAppDispatch } from '@/hooks/redux'
import { routers } from '@/libs/constants/routers'
import { authService } from '@/services/auth-service'
import { authActions } from '@/store/slices/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    const getCurrentUser = async () => {
      return authService.getCurrentUser().then((res) => {
        const user = res.data
        dispatch(authActions.setUser(user))
        router.push(routers.customize)
      })
    }
    getCurrentUser()
  }, [router, dispatch])
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <SvgIcon className="w-[6.375rem] h-[2.5rem]" icon="LogoFull" />
          <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
