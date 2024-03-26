'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export interface MenuLinkProps {
  href: string
  name: string
  icon: ReactNode
}

export function MenuLink({ href, name, icon }: MenuLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        isActive && 'bg-gray-200',
        'flex items-center gap-3 rounded-sm bg-gray-50 px-3 py-6 text-gray-900 transition-all text-md hover:bg-gray-300',
      )}
    >
      {icon}
      {name}
    </Link>
  )
}
