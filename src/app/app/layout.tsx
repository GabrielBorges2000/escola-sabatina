import Link from 'next/link'
import color from 'tailwindcss/colors'
import { PropsWithChildren } from 'react'

import {
  Search,
  Home,
  Church,
  SendToBack,
  Users,
  Menu,
  LayoutList,
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { MenuLink } from '@/components/menu-link'
import ButtonLogout from '@/components/button-logout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

const MenuLinkData = [
  {
    icon: <Home className="h-6 w-6" color={color.blue[400]} />,
    href: '/app',
    name: 'Inicio',
  },
  {
    icon: <Church className="h-6 w-6" color={color.blue[400]} />,
    href: '/app/church',
    name: 'Igreja',
  },
  {
    icon: <SendToBack className="h-6 w-6" color={color.blue[400]} />,
    href: '/app/classOrActionsUnits',
    name: ' Classes/Unidades de Ação',
  },
  {
    icon: <Users className="h-6 w-6" color={color.blue[400]} />,
    href: '/app/students',
    name: 'Alunos',
  },
  {
    icon: <LayoutList className="h-6 w-6" color={color.blue[400]} />,
    href: '/app/attendaceList',
    name: 'Lista de Chamada',
  },
]

export default function Component({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 items-center gap-4 border-b bg-primary/80 px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Menu
              color={color.white}
              className="h-10 w-10 hover:bg-blue-700 p-1 rounded-sm"
            />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col justify-between">
            <div className="flex flex-col ">
              <SheetHeader className="flex h-14 px-6">
                <Link className="font-semibold" href="/app">
                  IASD Jd São Judas
                </Link>
              </SheetHeader>
              <div className=" space-y-2">
                {MenuLinkData.map((item) => (
                  <MenuLink key={item.href} {...item} />
                ))}
              </div>
            </div>

            <SheetFooter>
              <ButtonLogout />
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                placeholder="Buscar"
                type="search"
              />
            </div>
          </form>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  )
}
