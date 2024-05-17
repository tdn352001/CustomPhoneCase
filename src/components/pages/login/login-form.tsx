'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLoginMutation } from '@/hooks/queries/auth'
import { useAppDispatch } from '@/hooks/redux'
import { routers } from '@/libs/constants/routers'
import { authActions } from '@/store/slices/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

export const schema = z.object({
  email: z.string().email({ message: 'Email is not valid' }),
  password: z.string().min(1, 'Password is required'),
})

type UserFormValue = z.infer<typeof schema>

export default function LoginForm() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { isPending, mutateAsync: login } = useLoginMutation()

  const form = useForm<UserFormValue>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = async (formValue: UserFormValue) => {
    return login(formValue)
      .then((res) => {
        const { user, access_token } = res.data
        dispatch(authActions.setUser(user))
        localStorage.setItem('access_token', access_token)
        router.push(routers.customize)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email..." disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password..." disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} className="ml-auto w-full" type="submit">
          Login
        </Button>
      </form>
    </Form>
  )
}
