import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { PropsWithChildren } from 'react'
import { Search, Package2, Home, Church, SendToBack, Users } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MenuLink } from '@/components/menu-link'
import ButtonLogout from '@/components/button-logout'
import color from 'tailwindcss/colors'

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
]

export default function Component({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-14 items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              {/* <Church className="h-8 w-8" /> */}
              <span className=" text-lg">IASD Jd São Judas</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium space-y-2">
              {MenuLinkData.map((item) => (
                <MenuLink key={item.href} {...item} />
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 h-16 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          {/* <div className="flex-1">
            <h1 className="font-semibold text-lg">Recent Orders</h1>
          </div> */}
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                  placeholder="Search orders..."
                  type="search"
                />
              </div>
            </form>
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
            <ButtonLogout />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
