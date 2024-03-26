import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { Pencil, Trash } from 'lucide-react'
import { ReactNode } from 'react'

export interface TableClassProps {
  nameWhithClass: string
  teacherWhithClass: string
  children: ReactNode
}

export function TableClass({
  nameWhithClass,
  teacherWhithClass,
  children,
}: TableClassProps) {
  return (
    <Card className="p-4 overflow-x-auto w-full">
      <CardHeader className="border-b">
        <div className="flex justify-between">
          <div>
            <CardTitle>{nameWhithClass}</CardTitle>
            <CardDescription>{teacherWhithClass}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Pencil className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="destructive">
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 md:p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

interface TableRowStudentProps {
  id: string
  name: string
  phone: string
  email: string
}

export function TableRowStudent({
  id,
  name,
  phone = '',
  email = '',
}: TableRowStudentProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Pencil className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="destructive">
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
