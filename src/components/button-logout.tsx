'use client'

import { signOut } from 'next-auth/react'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

export default function ButtonLogout() {
  return (
    <Button
      variant="secondary"
      className="space-x-2 w-full"
      onClick={() => signOut()}
    >
      <LogOut className="h-4 w-4" />
      <span>Sair</span>
    </Button>
  )
}
