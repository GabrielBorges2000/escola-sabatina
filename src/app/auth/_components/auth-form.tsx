'use client'
import Image from 'next/image'

import ESLOGO from '@/assets/logo-es.png'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { toast } from '@/components/ui/use-toast'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function AuthForm() {
  const form = useForm<SignInForm>()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false })

      toast({
        title: 'Link Enviado!',
        description: 'Link de login enviado para o seu email.',
      })
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Ocorreu um erro ao enviar o link de login.',
        variant: 'destructive',
      })
    }
  })

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-6 w-96">
        <div className="space-y-2 flex flex-col items-center">
          <Image
            src={ESLOGO}
            width={200}
            height={200}
            quality={100}
            priority
            alt="Logo da escola sabatina "
          />
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Entre com seu email
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="email"
                {...form.register('email')}
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </div>
    </div>
  )
}
